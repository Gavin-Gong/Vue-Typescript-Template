import Vue from 'vue';
import Router from 'vue-router';
import { RouterOptions } from 'vue-router';
import Foo from '../components/foo';
import HelloWorld from '../components/HelloWorld.vue';

Vue.use(Router);
const routes = {
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo,
    },
  ],
};

export default new Router(routes as RouterOptions);
