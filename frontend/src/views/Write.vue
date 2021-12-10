<template>
	<div class="container mt-4">
		<form action="/api/post" method="POST">
			<div class="form-group">
				<label for="title">제목</label>
				<input type="text" class="form-control" id="title" name="title" autofocus>
			</div>
			<div class="form-group">
				<label for="content">내용</label>
				<textarea class="form-control" id="content" name="content" rows="5"></textarea>
			</div>
			<button type="submit" class="btn btn-primary float-right">작성</button>
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