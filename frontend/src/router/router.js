import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home'
import Post from '@/views/Post'
import Write from '@/views/Write'

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
			path: '/write',
			name: 'Write',
			component: Write
		}
	]
});

export default router;