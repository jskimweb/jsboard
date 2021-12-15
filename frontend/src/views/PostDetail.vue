<template>
	<div class="container mt-4">
		<div class="post-contents mb-3">
			<h3>{{ post.title }}</h3>
			<p class="mt-3 mb-4">{{ post.content }}</p>
		</div>
		<div class="button-group d-flex justify-content-end">
			<button @click="clickEdit" type="button" class="btn btn-primary mr-2">수정</button>
			<button @click="clickDelete" type="button" class="btn btn-secondary">삭제</button>
		</div>
	</div>
</template>

<script>
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	import { useRoute } from 'vue-router'
	import { deletePost } from '@/api/api'
	import router from '@/router/router'

	export default {
		name: 'PostDetail',
		setup() {
			const store = useStore();
			const route = useRoute();
			const post = computed(() => {
				return store.getters.post
			});

			const clickEdit = () => {
				router.push(`/edit/${route.params.id}`);
			}

			const clickDelete = async () => {
				try {
					const postId = route.params.id;
					await deletePost(postId)
						.then(router.push('/post'));
				} catch (err) {
					console.log(err)
				}
			}

			return {
				post,
				clickEdit,
				clickDelete
			}
		}
	}
</script>

<style scoped>
	.post-contents {
		border-bottom: .1rem solid rgba(0, 0, 0, .125);
	}
</style>