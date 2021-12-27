<template>
	<div class="container mt-4">
		<h4 class="text-center mb-3">새 게시글 작성</h4>
		<PostWriteForm></PostWriteForm>
	</div>
</template>

<script>
	import PostWriteForm from '@/components/PostWriteForm'

	export default {
		name: 'WritePage',
		components: {
			PostWriteForm
		}
	}
</script>

<style scoped>

</style>