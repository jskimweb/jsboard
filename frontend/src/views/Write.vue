<template>
	<div class="container mt-4">
		<h4 class="text-center mb-3">새 게시글 작성</h4>
		<form @submit.prevent="submitForm">
			<div class="form-group">
				<label for="title">제목</label>
				<input v-model="postData.title" type="text" class="form-control" id="title" name="title">
			</div>
			<div class="form-group">
				<label for="content">내용</label>
				<textarea v-model="postData.content" class="form-control" id="content" name="content" rows="5"></textarea>
			</div>
			<div class="button-group d-flex justify-content-end">
				<button type="submit" class="btn btn-primary mr-2">확인</button>
				<button @click="clickCancel" type="button" class="btn btn-secondary">취소</button>
			</div>
		</form>
	</div>
</template>

<script>
	import { ref } from 'vue'
	import { createPost } from '@/api/api'
	import router from '@/router/router'

	export default {
		name: 'Write',
		setup() {
			const postData = ref({
				title: '',
				content: ''
			});

			const submitForm = async () => {
				try {
					if (postData.value.title.trim() == '' || postData.value.content.trim() == '') {
						alert('제목과 내용을 모두 입력해주세요.')
					} else {
						await createPost(postData.value)
							.then(router.push('/post'));
					}
				} catch (err) {
					console.log(err)
				}
			}
			const clickCancel = () => {
				router.push('/post')
			}
		
			return {
				postData,
				submitForm,
				clickCancel
			}
		}
	}
</script>

<style scoped>

</style>