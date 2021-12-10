import { createStore } from 'vuex'

const store = createStore({
	state: {
		posts: [],
		post: {}
	},
	getters: {
		posts(state) {
			return state.posts
		},
		post(state) {
			return state.post
		}
	},
	mutations: {},
	actions: {}
});

export default store