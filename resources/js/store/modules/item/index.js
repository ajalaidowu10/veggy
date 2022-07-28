import axios from 'axios';

const state = {
	items: [],
	searchField: '',
}

const getters = {
  getItems: state => {
  	const { items, searchField } = state;
  	return items.filter(item => (item.title.toLowerCase().includes(searchField.toLowerCase()) && item.qty > 0));
  }
}

const actions = {
	fetchItems ({ commit }) {
	    axios.get(`/api/item`).then(res => {
	      commit('SET_ITEMS', res.data.data)
	    });
	  },
	setSearchField ({ commit }, event) {
	      commit('SET_SEARCH_FIELD', event.target.value);
	  }
}

const mutations = {
	SET_ITEMS(state, items){
		state.items = items;
	},

	SET_SEARCH_FIELD(state, text){
		state.searchField = text;
	},
}

const itemModule = {
	state,
	mutations,
	actions,
	getters
}

export default itemModule;