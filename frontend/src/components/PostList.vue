<template>
	<div>
		<div class="category mb-3 pt-1 pb-1">
			<span class="ml-2 text-align-center">글번호</span>
			<span class="ml-4">제목</span>
			<span class="float-right mr-5 pr-5">작성일</span>
		</div>
		<div v-for="post in posts" :key="post.id" class="card">
			<router-link :to="`/post/${ post.id }`" class="card-body pt-2 pb-2">
				<span class="d-inline-block text-dark text-right mr-3" style="width: 1.5rem">{{ post.id }}</span>
				<span class="card-title text-dark ml-3">{{ post.title }}</span>
				<span class="float-right text-dark">{{ post.createdAt }}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	import { computed } from 'vue'
	import { useStore } from 'vuex'

	export default {
		name: 'PostList',
		setup() {
			const store = useStore();
			const posts = computed(() => {
				return store.getters.posts
			});

			return {
				posts
			}
		}
	}
</script>

<style scoped>
	.category {
		border-top: 0.1rem solid rgba(0,0,0,.125);
    border-bottom: 0.1rem solid rgba(0,0,0,.125);
	}
</style>