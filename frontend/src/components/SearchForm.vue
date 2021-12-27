<template>
	<form @submit.prevent="submitForm" class="form-group d-flex mb-3">
		<input v-model="searchText" type="text" class="form-control" id="search" name="search" placeholder="검색어를 입력해주세요.">
		<button type="submit" class="btn btn-success ml-2" style="white-space: nowrap;">
			<i class="bi bi-search"></i>
		</button>
		<button @click="clickWrite" type="button" class="btn btn-primary ml-2" style="white-space: nowrap;">
			<i class="bi bi-pencil-square"></i>
		</button>
	</form>
</template>

<script>
	import { ref } from 'vue'
	import { useStore } from 'vuex'
	import router from '@/router/router'

	export default {
		name: 'SearchForm',
		setup() {
			const store = useStore();
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

			return {
				searchText,
				submitForm,
				clickWrite
			}
		}
	}
</script>

<style scoped>

</style>