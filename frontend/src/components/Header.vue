<template>
	<nav class="navbar navbar-expand-lg justify-content-center">
		<router-link to="/" class="navbar-brand m-0 text-white">JS Board</router-link>
	</nav>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<style scoped>
	.navbar {
		background: linear-gradient(to right, #434343, #000000);
	}

	.navbar .navbar-brand {
		color: #000;
	}
</style>