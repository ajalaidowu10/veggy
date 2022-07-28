import axios from 'axios';

const state = {
	items: []
}

const getters = {
  getItems: state => {
  	return state.items.filter(item => item.qty > 0);
  }
}

const actions = {
	fetchItems ({ commit }) {
	    axios.get(`/api/item`).then(res => {
	      commit('SET_ITEMS', res.data.data)
	    });
	  }
}

const mutations = {
	SET_ITEMS(state, items){
		state.items = items;
	},
}

const itemModule = {
	state,
	mutations,
	actions,
	getters
}

export default itemModule;