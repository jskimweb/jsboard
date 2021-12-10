<template>
	<div class="container mt-4">
		<form action="/api/post" method="POST">
			<div class="form-group">
				<label for="title">제목</label>
				<input type="text" class="form-control" name="title" :value="post.title">
			</div>
			<div class="form-group">
				<label for="content">내용</label>
				<textarea class="form-control" name="content" rows="5" :value="post.content"></textarea>
			</div>
			<button type="submit" class="btn btn-primary float-right">작성</button>
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
				axios.put(`/api/post/${route.params.id}`, { title: post.value.title, content: post.value.content })
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