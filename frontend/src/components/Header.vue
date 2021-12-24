<template>
	<div class="container">
		<nav class="navbar navbar-expand-lg justify-content-center">
			<router-link to="/" class="navbar-brand m-0 text-white">JS Board</router-link>
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
		background: linear-gradient(to right, #00B4DB, #0083B0);
	}

	.navbar .navbar-brand {
		color: #000;
	}
</style>