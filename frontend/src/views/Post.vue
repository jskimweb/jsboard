<template>
	<div class="container mt-3 mb-4">
		<form @submit.prevent="submitForm" class="form-group d-flex mb-3">
			<input v-model="searchText" type="text" class="form-control" id="search" name="search" placeholder="검색어를 입력해주세요.">
			<button type="submit" class="btn btn-success ml-2" style="white-space: nowrap;">
				<i class="bi bi-search"></i>
			</button>
			<button @click="clickWrite" type="button" class="btn btn-primary ml-2" style="white-space: nowrap;">
				<i class="bi bi-pencil-square"></i>
			</button>
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
		<ul class="pagination justify-content-center mt-3">
			<li :class="{'disabled': currentPage === 1}" class="page-item" style="cursor: pointer">
				<span @click="movePage(currentPage - 1)" class="page-link">
					<span aria-hidden="true">&laquo;</span>
				</span>
			</li>
			<li v-for="(page, index) in totalPages" :key="index" :class="{'active': currentPage === index + 1}" class="page-item" style="cursor: pointer">
				<span @click="movePage(index + 1)" class="page-link">{{ index + 1 }}</span>
			</li>
			<li :class="{'disabled': currentPage === totalPages}" class="page-item" style="cursor: pointer">
				<span @click="movePage(currentPage + 1)" class="page-link">
					<span aria-hidden="true">&raquo;</span>
				</span>
			</li>
		</ul>
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
			const currentPage = computed(() => {
				return store.state.currentPage
			});
			const totalPages = computed(() => {
				return store.state.totalPages
			});
			const searchText = ref('');

			const submitForm = async () => {
				if (searchText.value.trim() == '') {
					alert('검색어를 입력해주세요.')
				} else {
					await store.dispatch('SEARCH_POSTS', searchText.value)
						.then(router.push('/search'));
				}
			}
			const clickWrite = () => {
				router.push('/write');
			}
			const movePage = async page => {
				store.state.currentPage = page;
				await store.commit('startSpinner');
				await store.dispatch('GET_POSTS', store.state.currentPage).then(() => {
					store.commit('endSpinner')
				});
			}

			return {
				posts,
				currentPage,
				totalPages,
				searchText,
				submitForm,
				clickWrite,
				movePage
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