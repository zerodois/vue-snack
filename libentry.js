import './src/styles/styles.scss'
import plugin from './src/plugin/index.js'
export default plugin

// Auto-install
let _Vue = null
if (typeof window !== 'undefined') {
  _Vue = window.Vue
} else if (typeof global !== 'undefined') {
  _Vue = global.Vue
}
if (_Vue) {
  _Vue.use(plugin)
}
