<template>
	<div>
		<div class="container mt-4">
			<div class="post-contents">
				<div class="d-flex justify-content-between mb-3">
					<span>글번호 : {{ post.id }}</span>
					<span>작성일 : {{ post.createdAt }}</span>
				</div>
				<h3>{{ post.title }}</h3>
				<p class="mt-3 mb-4">{{ post.content }}</p>
			</div>
			<div class="button-group d-flex justify-content-end mt-3">
				<button @click="clickEdit" class="btn btn-success mr-2">수정</button>
				<button @click="modalStatus = true" type="button" class="btn btn-danger mr-2">삭제</button>
				<button @click="clickList" type="button" class="btn btn-light">목록으로</button>
			</div>
		</div>
		<DeleteModal @closeModal="modalStatus = false" v-if="modalStatus"></DeleteModal>
	</div>
</template>

<script>
	import { computed, ref } from 'vue'
	import { useStore } from 'vuex'
	import { useRoute } from 'vue-router'
	import router from '@/router/router'
	import DeleteModal from '@/components/DeleteModal'

	export default {
		name: 'PostDetail',
		components: {
			DeleteModal
		},
		setup() {
			const store = useStore();
			const route = useRoute();
			const post = computed(() => {
				return store.getters.post
			});
			const modalStatus = ref(false);

			const clickEdit = () => {
				router.push(`/edit/${route.params.id}`)
			}
			const clickList = () => {
				router.push('/post')
			}

			return {
				post,
				modalStatus,
				clickEdit,
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