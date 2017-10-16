import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: require('./foo.html'),
})
export default class Foo extends Vue {
  private msg = 'two way data';
}
