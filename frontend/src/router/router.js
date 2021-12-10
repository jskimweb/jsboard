import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home'
import Post from '@/views/Post'
import PostDetail from '@/views/PostDetail'
import Write from '@/views/Write'
import Edit from '@/views/Edit'

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
			component: Post
		},
		{
			path: '/post/:id',
			name: 'PostDetail',
			component: PostDetail
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