import Promise from 'es6-promise' 
import Vue from 'vue' 

// so that next tick returns a Promise
Promise.polyfill()

export function check(options) {
  describe('options', function () {
    if (options.data) {
      describe('data', function () {
        it('should be a function', function () {
          options.data.should.be.a('function')
        })
      })    
    }
  })    
}

export function mount(Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData: propsData }).$mount()
  return vm
}
