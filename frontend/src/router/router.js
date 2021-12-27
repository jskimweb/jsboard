import { createRouter, createWebHistory } from 'vue-router';
import PostPage from '@/views/PostPage'
import PostDetailPage from '@/views/PostDetailPage'
import WritePage from '@/views/WritePage'
import EditPage from '@/views/EditPage'
import SearchPage from '@/views/SearchPage'
import store from '@/store/store'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/post'
		},
		{
			path: '/post',
			name: 'PostPage',
			component: PostPage,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_POSTS', store.state.currentPage).then(() => {
					store.commit('endSpinner');
					next();
				}).catch(err => {
					console.log(err);
				});
			}
		},
		{
			path: '/post/:id',
			name: 'PostDetailPage',
			component: PostDetailPage,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_POST', to.params.id).then(() => {
					store.commit('endSpinner');
					next();
				}).catch(err => {
					console.log(err);
				});
			}
		},
		{
			path: '/write',
			name: 'WritePage',
			component: WritePage
		},
		{
			path: '/edit/:id',
			name: 'EditPage',
			component: EditPage
		},
		{
			path: '/search',
			name: 'SearchPage',
			component: SearchPage
		}
	]
});

export default router;