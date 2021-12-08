<template>
	<div class="container mt-5">
		<form action="/write" method="POST">
			<div class="form-group">
				<label for="title">제목</label>
				<input type="text" class="form-control" id="title">
			</div>
			<div class="form-group">
				<label for="content">내용</label>
				<textarea type="text" class="form-control" id="content" rows="5"></textarea>
			</div>
			<button type="submit" class="btn btn-primary">작성</button>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'Write'
	}
</script>

<style scoped>

</style>