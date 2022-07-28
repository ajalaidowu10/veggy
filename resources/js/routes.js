import Vue from 'vue';
import Router from 'vue-router';

import ItemList from './components/ItemList/ItemList';
import CartList from './components/CartList/CartList';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  hash: false,
  routes: [
				    {
				      path: '/',
				      name: 'item-list',
				      component: ItemList,
				    },
				    {
				      path: '/cart',
				      name: 'cart-list',
				      component: CartList,
				    },
				  ]
});

export default router;