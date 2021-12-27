<template>
	<div class="container mt-3 mb-4">
		<SearchForm></SearchForm>
		<PostList></PostList>
		<Pagination></Pagination>
	</div>
</template>

<script>
	import PostList from '@/components/PostList'
	import SearchForm from '@/components/SearchForm'
	import Pagination from '@/components/Pagination'

	export default {
		name: 'PostPage',
		components: {
			PostList,
			SearchForm,
			Pagination
		}
	}
</script>

<style scoped>

</style>