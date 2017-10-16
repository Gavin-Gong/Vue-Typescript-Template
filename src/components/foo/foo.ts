import Component from 'vue-class-component'
import Vue from 'vue'

@Component({
  template: require('./foo.html')
})
export default class Foo extends Vue {
  // template = require('./foo.html')
  msg = 'two way data'
}