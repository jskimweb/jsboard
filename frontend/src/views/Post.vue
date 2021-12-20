<template>
	<div class="container mt-4 mb-4">
		<form @submit.prevent="submitForm" class="form-group d-flex mb-4">
				<input v-model="searchText" type="text" class="form-control" id="search" name="search">
				<button type="submit" class="btn btn-success ml-2" style="white-space: nowrap;">검색</button>
				<button @click="clickWrite" type="button" class="btn btn-primary ml-2" style="white-space: nowrap;">작성</button>
		</form>
		<div v-for="post in posts" :key="post._id" class="card">
			<div class="card-body">
				<router-link :to="`/post/${post._id}`" class="card-title">{{ post.title }}</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import { computed, ref } from 'vue'
	import { useStore } from 'vuex'
	import router from '@/router/router'
	import axios from 'axios'

	export default {
		name: 'Post',
		setup() {
			const store = useStore();
			const posts = computed(() => {
				return store.getters.posts
			});
			const searchText = ref('');

			const submitForm = async () => {
				const { data } = await axios.post('/api/search', { title: searchText.value });
				await store.commit('SET_POSTS', data);
				router.push('/search');
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

</style>