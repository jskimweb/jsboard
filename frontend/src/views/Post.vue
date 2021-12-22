<template>
	<div class="container mt-4 mb-4">
		<form @submit.prevent="submitForm" class="form-group d-flex mb-4">
				<input v-model="searchText" type="text" class="form-control" id="search" name="search" placeholder="검색어를 입력해주세요.">
				<button type="submit" class="btn btn-success ml-2" style="white-space: nowrap;">검색</button>
				<button @click="clickWrite" type="button" class="btn btn-primary ml-2" style="white-space: nowrap;">작성</button>
		</form>
		<div class="category mb-3 pt-1 pb-1">
			<span class="ml-2 text-align-center">글번호</span>
			<span class="ml-4">제목</span>
			<span class="float-right mr-5 pr-5">작성일</span>
		</div>
		<div v-for="post in posts" :key="post.id" class="card">
			<div class="card-body pt-2 pb-2">
				<span class="d-inline-block text-right mr-3" style="width: 1.5rem">{{ post.id }}</span>
				<router-link :to="`/post/${ post.id }`" class="card-title text-dark ml-3">{{ post.title }}</router-link>
				<span class="float-right">{{ post.createdAt }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import { computed, ref } from 'vue'
	import { useStore } from 'vuex'
	import router from '@/router/router'

	export default {
		name: 'Post',
		setup() {
			const store = useStore();
			const posts = computed(() => {
				return store.getters.posts
			});
			const searchText = ref('');

			const submitForm = async () => {
				await store.dispatch('SEARCH_POSTS', searchText.value)
					.then(router.push('/search'));
			}
			const clickWrite = () => {
				router.push('/write');
			}

			return {
				posts,
				searchText,
				submitForm,
				clickWrite
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