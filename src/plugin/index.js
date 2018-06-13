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
  let div = document.createElement('div')
  div.id = 'snackbar-' + Date.now()
  document.body.appendChild(div)
  config.config = Default
  component = new Constructor({
    propsData: config
    // parent
  })
  component.$mount('#' + div.id)
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
  Object.assign(config.config, Default[theme])
  Object.assign(component, options)
  component.active = true
  timeout = setTimeout(close, Default.time)
}

const $snack = () => {
  let vm = this
  let all = {}
  for (let m in methods) {
    all[m] = params => actions(params, methods[m])
  }
  return all
}

const plugin = {
  install (Vue, options = {}) {
    Object.assign(Default, options)
    Constructor = Vue.extend(Snack)
    Vue.prototype.$snackbar = $snack()
    create()
  }
}

export default plugin

