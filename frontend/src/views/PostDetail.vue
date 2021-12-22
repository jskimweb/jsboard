<template>
	<div class="container mt-4">
		<div class="post-contents">
			<span>글번호 : {{ post.id }}</span>
			<p class="text-right m-0">작성일 : {{ post.createdAt }}</p>
			<h3>{{ post.title }}</h3>
			<p class="mt-3 mb-4">{{ post.content }}</p>
		</div>
		<div class="button-group d-flex justify-content-end mt-3">
			<button @click="clickEdit" class="btn btn-success mr-2">수정</button>
			<button @click="clickDelete" type="button" class="btn btn-danger mr-2">삭제</button>
			<button @click="clickList" type="button" class="btn btn-light">목록으로</button>
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
				router.push(`/edit/${route.params.id}`)
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
			const clickList = () => {
				router.push('/post')
			}

			return {
				post,
				clickEdit,
				clickDelete,
				clickList
			}
		}
	}
</script>

<style scoped>
	.post-contents {
		border-bottom: .1rem solid rgba(0, 0, 0, .125);
	}
</style>