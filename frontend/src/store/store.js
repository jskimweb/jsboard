import { createStore } from 'vuex'
import { getPosts, getPost, searchPosts } from '@/api/api';

const store = createStore({
	state: {
		posts: [],
		post: {},
		totalPosts: 0,
		limitPosts: 0,
		currentPage: 1,
		totalPages: 0,
		loadingStatus: false
	},
	getters: {
		posts(state) {
			return state.posts
		},
		post(state) {
			return state.post
		},
		loadingStatus(state) {
			return state.loadingStatus
		}
	},
	mutations: {
		SET_POSTS(state, payload) {
			state.posts = payload;
		},
		SET_POST(state, payload) {
			state.post = payload;
		},
		startSpinner(state) {
			state.loadingStatus = true;
		},
		endSpinner(state) {
			state.loadingStatus = false;
		}
	},
	actions: {
		async GET_POSTS({ commit }, page) {
			const { data } = await getPosts(page);
			commit('SET_POSTS', data.content);
			this.state.totalPosts = data.length;
			this.state.limitPosts = data.limit;
			this.state.totalPages = Math.ceil(data.length / data.limit);
		},
		async GET_POST({ commit }, postId) {
			const { data } = await getPost(postId);
			commit('SET_POST', data);
		},
		async SEARCH_POSTS({ commit }, searchText) {
			const { data } = await searchPosts(searchText);
			commit('SET_POSTS', data);
		}
	}
});

export default store