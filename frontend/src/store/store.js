import { createStore } from 'vuex'
import axios from 'axios'

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
		setPosts(state, payload) {
			state.posts = payload;
		},
		setPost(state, payload) {
			state.post = payload;
		}
	},
	actions: {
		async getPosts({ commit }) {
			const { data } = await axios.get('/api/post');
			commit('setPosts', data);
		},
		async getPost({ commit }, postId) {
			const { data } = await axios.get(`/api/post/${postId}`);
			commit('setPost', data);
		}
	}
});

export default store