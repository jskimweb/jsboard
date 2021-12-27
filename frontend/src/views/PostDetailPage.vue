<template>
	<div>
		<div class="container mt-4">
			<PostContents></PostContents>
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
	import PostContents from '@/components/PostContents'
	import DeleteModal from '@/components/DeleteModal'
	import { ref } from 'vue'
	import { useRoute } from 'vue-router'
	import router from '@/router/router'

	export default {
		name: 'PostDetailPage',
		components: {
			PostContents,
			DeleteModal
		},
		setup() {
			const route = useRoute();
			const modalStatus = ref(false);

			const clickEdit = () => {
				router.push(`/edit/${route.params.id}`)
			}
			const clickList = () => {
				router.push('/post')
			}

			return {
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