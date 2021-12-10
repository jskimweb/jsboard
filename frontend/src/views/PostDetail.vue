<template>
	<div class="container mt-4">
		<h3>{{ post.title }}</h3>
		<p>{{ post.content }}</p>
		<button @click="deleteOnePost" type="button" class="btn btn-danger float-right ml-2">삭제</button>
		<button @click="$router.push(`/edit/${$route.params.id}`)" type="button" class="btn btn-secondary float-right">수정</button>
	</div>
</template>

<script>
	import axios from 'axios'
	import { useRoute } from 'vue-router'
	import { useStore } from 'vuex'
	import { computed } from 'vue'
	import router from '@/router/router'

	export default {
		name: 'PostDetail',
		setup() {
			const route = useRoute();
			const store = useStore();
			const post = computed(() => {
				return store.getters.post
			});

			const getOnePost = async () => {
				await axios.get(`/api/post/${route.params.id}`)
					.then(({ data }) => {
						console.log(data);
						store.state.post = data;
					});
			}

			const deleteOnePost = async () => {
				await axios.delete(`/api/post/${route.params.id}`)
					.then(router.push('/post'));
			}

			getOnePost();

			return {
				post,
				getOnePost,
				deleteOnePost
			}
		}
	}
</script>

<style scoped>

</style>