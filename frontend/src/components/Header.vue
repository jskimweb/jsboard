<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link to="/" class="navbar-brand">JS Board</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
			aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div class="navbar-nav">
				<router-link to="/" class="nav-link active">Home <span class="sr-only">(current)</span></router-link>
				<router-link to="/post" class="nav-link">Post</router-link>
				<router-link to="/write" class="nav-link">Write</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<style scoped>

</style>