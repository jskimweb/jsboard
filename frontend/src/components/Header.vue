<template>
	<div class="container">
		<nav class="navbar navbar-expand-lg">
			<router-link to="/" class="navbar-brand">JS Board</router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<router-link to="/post" class="nav-link">Post</router-link>
					<router-link to="/write" class="nav-link">Write</router-link>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<style scoped>
	.navbar {
		border-bottom: .1rem solid rgba(0, 0, 0, .125);
	}

	.navbar .navbar-brand {
		color: #000;
	}
</style>