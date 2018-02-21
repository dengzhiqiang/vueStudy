import Vue from 'vue';
import App from './App';

import goods from 'components/goods/goods';
import seller from 'components/seller/seller';
import star from 'components/star/star';


import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';

// 安装路由模块
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/goods', component: goods},
    {path: '/seller', component: seller},
    {path: '/star', component: star}
  ]
});

new Vue({
  el: 'body',
  router: router,
  components: {App}
});


// import goods from 'components/goods/goods';
// import ratings from 'components/ratings/ratings';
// import seller from 'components/seller/seller';
//
// import 'common/stylus/index.styl';


// Vue.use(VueResource);
//
// let app = Vue.extend(App);
//
// let router = new VueRouter({
// 	linkActiveClass: 'active'
// });

// router.map({
// 	'/goods': {
// 		component: goods
// 	},
// 	'/ratings': {
// 		component: ratings
// 	},
// 	'seller': {
// 		component: seller
// 	}
// });

// router.start(app, '#app');
// router.go('/goods');
