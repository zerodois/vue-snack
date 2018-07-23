//
// vue PlugIn
//
import Snack from './Snackbar.vue'
import Default from './defaults'

let Constructor
let component = null
let timeout = null
let closing = null
let options = null
const config = {}
const methods = {
  danger: 'danger',
  show: 'default',
  success: 'success'
}

const sleep = time => new Promise((resolve, reject) => setTimeout(_ => resolve(), time))

const create = parent => {
  document.addEventListener('DOMContentLoaded', event => { 
    let div = document.createElement('div')
    div.id = 'snackbar-' + Date.now()
    document.body.appendChild(div)
    config.config = Default
    component = new Constructor({
      propsData: config
      // parent
    })
    component.$on('close', _ => close())
    component.$mount('#' + div.id)
  })
}

const close = function () {
  component.active = false
  clearTimeout(timeout)
}

const actions = async (params, theme) => {
  options = params
  if (component.active && closing) {
    return
  }
  if (component.active) {
    close()
    closing = true
    await sleep(400)
    closing = false
  }
  if (typeof options === 'string') {
    options = { text: options }
  }
  let fn = options.action
  options.action = async () => {
    if (!fn) {
      return close()
    }
    fn()
    close()
  }

  Object.assign(config.config, Default[theme])
  Object.assign(component, Object.assign({}, options, { theme }))
  component.active = true
  timeout = setTimeout(close, Default.time)
}

const $snack = (opt) => {
  let vm = this
  let news = {}
  let themes = {}
  opt.methods = opt.methods || []
  opt.methods.forEach(item => {
    news[item.name] = item.name
    themes[item.name] = {
      primary: item.color || Default.default.primary
    }
  })
  Object.assign(Default, themes)
  let all = {}
  let meth = Object.assign({}, methods, news)
  for (let m in meth) {
    all[m] = params => actions(params, meth[m])
  }
  return all
}

const plugin = {
  install (Vue, options = {}) {
    Constructor = Vue.extend(Snack)
    create()
    Object.assign(Default, options)
    Vue.prototype.$snack = $snack(options)
  }
}

export default plugin

