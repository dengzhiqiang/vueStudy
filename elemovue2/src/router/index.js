import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Good from '@/components/good/good';
import Seller from '@/components/seller/seller';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/good',
      name: 'good',
      component: Good
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }

  ]
})
