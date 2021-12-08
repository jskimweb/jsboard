<template>
	<div class="container mt-5">
		<div v-for="(post, index) in posts" :key="index" class="card">
			<div class="card-body">
				<div class="card-title">{{ post.title }}</div>
				<div class="card-text">{{ post.content }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import { ref } from 'vue'

	export default {
		name: 'Post',
		setup() {
			const posts = ref([]);
			axios.get('/api/post').then(({ data }) => {
				console.log(data);
				posts.value = data;
			});

			return {
				posts
			}
		}
	}
</script>

<style scoped>

</style>