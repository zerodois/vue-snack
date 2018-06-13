import {check, mount} from './utils.js'
import MyComponent from 'my-component.vue'


describe('MyComponent', () => {

  check(MyComponent)

  describe ('mount', function () {
    let vm = mount(MyComponent)

    it('renders the right content', function () {
      return vm.$nextTick().then( function () {
            let text = vm.$el.textContent
            text.should.equal('Hello World !')
      })
    })

    it('renders the right style', function () {
      return vm.$nextTick().then( function () {
        vm.$el.classList.contains('my-style').should.be.true
      })
    })

  })
})
