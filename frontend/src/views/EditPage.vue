<template>
	<div class="container mt-4">
		<h4 class="text-center mb-3">게시글 수정</h4>
		<PostEditForm></PostEditForm>
	</div>
</template>

<script>
	import PostEditForm from '@/components/PostEditForm'

	export default {
		name: 'EditPage',
		components: {
			PostEditForm
		}
	}
</script>

<style scoped>

</style>