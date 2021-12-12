<template>
	<div class="container mt-4">
		<form @submit.prevent="updateOnePost">
			<div class="form-group">
				<label for="title">제목</label>
				<input v-model="inputTitle" type="text" class="form-control" name="title">
			</div>
			<div class="form-group">
				<label for="content">내용</label>
				<textarea v-model="inputContent" class="form-control" name="content" rows="5"></textarea>
			</div>
			<button class="btn btn-primary float-right">수정</button>
		</form>
	</div>
</template>

<script>
	import axios from 'axios'
	import { useStore } from 'vuex'
	import { useRoute } from 'vue-router'
	import { computed, ref } from 'vue'
	import router from '@/router/router'

	export default {
		name: 'Edit',
		setup() {
			const store = useStore();
			const route = useRoute();
			const post = computed(() => {
				return store.getters.post
			});
			const inputTitle = ref('');
			const inputContent = ref('');

			const updateOnePost = async () => {
				await axios.put(`/api/post/${route.params.id}`, { title: inputTitle.value, content: inputContent.value })
					.then(router.push(`/post`));
			}

			return {
				post,
				inputTitle,
				inputContent,
				updateOnePost
			}
		}
	}
</script>

<style scoped>

</style>