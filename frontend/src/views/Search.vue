<template>
	<div class="container mt-4">
		<h4 class="text-center mb-3">검색 결과</h4>
		<div v-for="post in posts" :key="post._id" class="card">
			<div class="card-body">
				<router-link :to="`/post/${post._id}`" class="card-title">{{ post.title }}</router-link>
			</div>
		</div>
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

<style>

</style>