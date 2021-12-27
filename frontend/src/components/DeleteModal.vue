<template>
	<div class="modal" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">게시글 삭제</h5>
					<button @click="$emit('closeModal')" type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<p>정말로 삭제하시겠습니까?</p>
				</div>
				<div class="modal-footer">
					<button @click="clickDelete" type="button" class="btn btn-danger">삭제</button>
					<button @click="$emit('closeModal')" type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { useStore } from 'vuex'
	import { useRoute } from 'vue-router'
	import { deletePost } from '@/api/api'
	import router from '@/router/router'

	export default {
		name: 'DeleteModal',
		setup() {
			const store = useStore();
			const route = useRoute();
			
			const clickDelete = async () => {
				try {
					const postId = route.params.id;
					await deletePost(postId)
						.then(checkPosts())
						.then(router.push('/post'));
				} catch (err) {
					console.log(err)
				}
			}
			const checkPosts = () => {
				if (store.state.currentPage !== 1 && (store.state.totalPosts - 1) % store.state.limitPosts === 0) {
					store.state.currentPage -= 1;
				}
			}

			return {
				clickDelete,
				checkPosts
			}
		}
	}
</script>

<style scoped>
	.modal {
		display: block;
	}

	@media (max-width: 576px) {
		.modal-dialog {
			margin: 10%;
		}
	}
</style>