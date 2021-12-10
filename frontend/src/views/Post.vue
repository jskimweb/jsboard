<template>
	<div class="container mt-4">
		<div v-for="post in posts" :key="post._id" class="card">
			<div class="card-body">
				<router-link :to="`/post/${post._id}`" class="card-title">{{ post.title }}</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import { useStore } from 'vuex'
	import { computed } from 'vue'

	export default {
		name: 'Post',
		setup() {
			const store = useStore();
			const posts = computed(() => {
				return store.getters.posts;
			});

			const getPosts = () => {
				axios.get('/api/post')
					.then(({ data }) => {
						console.log(data);
						store.state.posts = data;
					});
			}

			getPosts();

			return {
				posts,
				getPosts
			}
		}
	}
</script>

<style scoped>

</style>