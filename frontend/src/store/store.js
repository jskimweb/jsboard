import { createStore } from 'vuex'
import { getPosts, getPost } from '@/api/api';

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
	mutations: {
		SET_POSTS(state, payload) {
			state.posts = payload;
		},
		SET_POST(state, payload) {
			state.post = payload;
		}
	},
	actions: {
		async GET_POSTS({ commit }) {
			const { data } = await getPosts();
			commit('SET_POSTS', data);
		},
		async GET_POST({ commit }, postId) {
			const { data } = await getPost(postId);
			commit('SET_POST', data);
		}
	}
});

export default store