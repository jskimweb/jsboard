<template>
	<div class="container mt-4">
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
				<button type="submit" class="btn btn-primary mr-2">작성</button>
				<button @click="$router.go(-1)" type="button" class="btn btn-secondary">취소</button>
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
					await createPost(postData.value)
						.then(router.push('/post'));
				} catch (err) {
					console.log(err)
				}
			}
		
			return {
				postData,
				submitForm
			}
		}
	}
</script>

<style scoped>

</style>