<template>
	<div class="container">
		<nav class="navbar navbar-expand-lg justify-content-center ">
			<router-link to="/" class="navbar-brand m-0">JS Board</router-link>
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