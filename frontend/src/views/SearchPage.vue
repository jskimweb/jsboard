<template>
	<div class="container mt-3">
		<h4 class="text-center mb-3">검색 결과</h4>
		<PostList></PostList>
		<p v-if="posts == ''" class="text-center">검색 결과가 없습니다.</p>
		<div class="button-group d-flex justify-content-end mt-3">
			<button @click="clickList" type="button" class="btn btn-light">목록으로</button>
		</div>
	</div>
</template>

<script>
	import PostList from '@/components/PostList'
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	import router from '@/router/router'

	export default {
		name: 'SearchPage',
		components: {
			PostList
		},
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