import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import eslint from 'rollup-plugin-eslint'
import uglify from 'rollup-plugin-uglify'
import sass from 'rollup-plugin-sass';
import replace from 'rollup-plugin-replace'
import filesize from 'rollup-plugin-filesize'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import csso from 'postcss-csso';
import { minify } from 'uglify-es'

const options = {
  distName: 'vue-snack',
  umdName: 'VueSnackPlugin',
  transpiler: 'babel',
  styles: 'extract',
  external: ['vue']
}

const isProduction = process.env.NODE_ENV === `production`

const isDevelopment = process.env.NODE_ENV === `development`

const libPath = (isDevelopment 
      ? `dist/${options.distName}.js` 
      : `dist/${options.distName}.min.js`)
  
const cssPath = (isDevelopment 
      ? `dist/${options.distName}.css` 
      : `dist/${options.distName}.min.css`)

const sassConfig = {
  include: [ '**/*.css', '**/*.scss' ],
  options: {includePaths: ['node_modules']},
  processor: css => postcss((isDevelopment
                      ? [autoprefixer()]
                      : [autoprefixer(), csso()]))
                    .process(css)
                    .then(result => result.css)
}

if (isProduction && options.styles == 'extract') {
  sassConfig.output = cssPath
} else {
  sassConfig.insert = true
}

const config = {
  input: 'libentry.js',
  output: {
    file: libPath,
    format: 'umd',
    name: options.umdName
  },
  external: options.external,
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV )
    }),
    eslint({ include: [ '**/*.js', '**/*.vue' ] }),
    vue({ autoStyles: false, styleToImports: true }),
    resolve({ jsnext: true, main: true, browser: true }),
    sass(sassConfig),
    commonjs ()
  ],
  sourcemap: isDevelopment ? 'inline' : true
}

switch (options.transpiler){
  case 'babel' :
    config.plugins.push(babel())
    break;
  case 'buble' :
    config.plugins.push(buble())
    break;
  case 'none':
  default:
    break
}

if (isProduction) {
  config.plugins.push(replace({
    'process.env.NODE_ENV': JSON.stringify( 'production' )
  }))
  config.plugins.push(uglify({}, minify))
  config.plugins.push(filesize())
}

if (isDevelopment) {
  // config.plugins.push(livereload())
  // config.plugins.push(serve({
  //   contentBase: './public/',
  //   port: 8080,
  //   open: true
  // }))
}

export default config
