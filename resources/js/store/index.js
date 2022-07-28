import Vue from 'vue';
import Vuex from 'vuex';
import item from './modules/item';
import cart from './modules/cart';

Vue.use(Vuex);
const store =  new Vuex.Store({
	modules: {
		item,
		cart
	}
});

export default store;