<template>
	<div class="container mt-4">
		<form @submit.prevent="updatePost">
			<Input :inputTitle="postData.title" @update:inputTitle="postData.title = $event"></Input>
			<div class="form-group">
				<label for="content">내용</label>
				<textarea v-model="postData.content" class="form-control" name="content" rows="5"></textarea>
			</div>
			<div class="form-group d-flex justify-content-end">
				<button type="submit" class="btn btn-primary mr-2">수정</button>
				<button @click="$router.go(-1)" type="button" class="btn btn-secondary">취소</button>
			</div>
		</form>
	</div>
</template>

<script>
	import { computed, ref } from 'vue'
	import { useStore } from 'vuex'
	import { useRoute } from 'vue-router'
	import axios from 'axios'
	import router from '@/router/router'
	import Input from '@/components/Input'

	export default {
		name: 'Edit',
		setup() {
			const store = useStore();
			const route = useRoute();
			const post = computed(() => {
				return store.getters.post
			})
			const postData = ref({
				title: post.value.title,
				content: post.value.content
			});

			const updatePost = async () => {
				const postId = route.params.id;
				await axios.put(`/api/post/${postId}`, postData.value)
					.then(router.push('/post'));
			}

			return {
				post,
				postData,
				updatePost
			}
		},
		components: {
			Input
		}
	}
</script>

<style scoped>

</style>