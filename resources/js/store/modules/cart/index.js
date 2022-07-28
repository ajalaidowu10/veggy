import axios from 'axios';

const state = {
	cartItems: [],
	checkoutStatus: null
}

const getters = {
  getCartItems: (state, getters, rootState) => {
  	return state.cartItems.map(cartItem => {
  	        const getItem = rootState.item.items.find(
  	          item => item.id === cartItem.id
  	        );
  	        return {
  	          id: getItem.id,
  	          title: getItem.title,
  	          price: getItem.price,
  	          description: getItem.description,
  	          image: getItem.image,
  	          description: getItem.description,
  	          qty: cartItem.qty
  	        };
  	      })
  },
  getCheckoutStatus: state => state.checkoutStatus,
  getCartTotal: (state, getters) => {
  	return getters.getCartItems.reduce((prev, cur) => {
  		return (Number(cur.qty) * Number(cur.price.substring(1))) + prev; }, 0).toFixed(2);
  },
  getCartQty: (state, getters) => {
  	return getters.getCartItems.reduce((prev, cur) => {
  		return cur.qty + prev;
  	}, 0);
  }
}

const actions = {
	addToCart(context, item){
		//check if item exist in cart
		const getCartItem = context.state.cartItems.find(cartItem => cartItem.id === item.id);
		getCartItem ? context.commit('INCREMENT_ITEM_QTY', getCartItem) : context.commit('ADD_ITEM', item.id);
	},
	incrementItemQty(context, item){
		const getCartItem = context.state.cartItems.find(cartItem => cartItem.id === item.id);
		context.commit('INCREMENT_ITEM_QTY', getCartItem)
	},
	decrementItemQty(context, item){
		const getCartItem = context.state.cartItems.find(cartItem => cartItem.id === item.id);
		context.commit('DECREMENT_ITEM_QTY', getCartItem)
	},
	removeFromCart(context, item){
		context.commit('REMOVE_ITEM', item.id)
	},
	checkout(context){
		// promise object for checkout inplace of the checkout api 
		const checkout = new Promise((resolve, reject) => {
			if(true){
				setTimeout(resolve, 1000, 'Checkout Successful');
			}else{
				setTimeout(resolve, 1000, 'Checkout Fail');
			}
		});
		checkout.then(res => {
			context.commit('EMPTY_CART');
			context.commit('SET_CHECKOUT_STATUS', 'success');
		})
		.catch(err => {
			context.commit('SET_CHECKOUT_STATUS', 'fail');
		})
	}
}

const mutations = {
	ADD_ITEM(state, itemId){
		state.cartItems.push({id: itemId, qty: 1});
	},
	REMOVE_ITEM(state, itemId){
		state.cartItems = state.cartItems.filter(item => item.id !== itemId);
	},
	INCREMENT_ITEM_QTY(state, cartItem){
		cartItem.qty++;
	},
	DECREMENT_ITEM_QTY(state, cartItem){
		cartItem.qty--;
	},
	EMPTY_CART(state){
		state.cartItems = [];
	},
	SET_CHECKOUT_STATUS(state, status){
		state.checkoutStatus = status;
		alert('Checkout Successful');
	}
}

const cartModule = {
	state,
	mutations,
	actions,
	getters
}

export default cartModule;