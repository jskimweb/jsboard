import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home'
import Post from '@/views/Post'
import PostDetail from '@/views/PostDetail'
import Write from '@/views/Write'
import Edit from '@/views/Edit'
import store from '@/store/store'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/post',
			name: 'Post',
			component: Post,
			beforeEnter: (to, from, next) => {
				store.dispatch('GET_POSTS').then(() => {
					next();
				}).catch(err => {
					console.log(err);
				});
			}
		},
		{
			path: '/post/:id',
			name: 'PostDetail',
			component: PostDetail,
			beforeEnter: (to, from, next) => {
				store.dispatch('GET_POST', to.params.id).then(() => {
					next();
				}).catch(err => {
					console.log(err);
				});
			}
		},
		{
			path: '/write',
			name: 'Write',
			component: Write
		},
		{
			path: '/edit/:id',
			name: 'Edit',
			component: Edit
		}
	]
});

export default router;