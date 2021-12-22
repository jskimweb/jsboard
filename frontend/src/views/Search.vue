<template>
	<div class="container mt-4">
		<h4 class="text-center mb-3">검색 결과</h4>
		<div class="category mb-3 pt-1 pb-1">
			<span class="ml-2 text-align-center">글번호</span>
			<span class="ml-4">제목</span>
			<span class="float-right mr-5 pr-5">작성일</span>
		</div>
		<div v-for="post in posts" :key="post.id" class="card">
			<div class="card-body pt-2 pb-2">
				<span class="d-inline-block text-right mr-3" style="width: 1.5rem">{{ post.id }}</span>
				<router-link :to="`/post/${post.id}`" class="card-title text-dark ml-3">{{ post.title }}</router-link>
				<span class="float-right">{{ post.createdAt }}</span>
			</div>
		</div>
		<p v-if="posts == ''" class="text-center">검색 결과가 없습니다.</p>
		<div class="button-group d-flex justify-content-end mt-3">
			<button @click="clickList" type="button" class="btn btn-light">목록으로</button>
		</div>
	</div>
</template>

<script>
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	import router from '@/router/router'

	export default {
		name: 'Search',
		setup() {
			const store = useStore();
			const posts = computed(() => {
				return store.getters.posts
			});

			const clickList = () => {
				router.push('/post')
			}

			return {
				posts,
				clickList
			}
		}
	}
</script>

<style scoped>
	.category {
		border-top: .1rem solid rgba(0, 0, 0, .125);
		border-bottom: .1rem solid rgba(0, 0, 0, .125);
	}
</style>