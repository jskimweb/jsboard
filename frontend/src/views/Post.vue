<template>
	<div class="container mt-4">
		<div v-for="post in posts" :key="post._id" class="card">
			<div class="card-body">
				<router-link :to="`/post/${post._id}`" class="card-title">{{ post.title }}</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import { computed } from 'vue'
	import { useStore } from 'vuex'

	export default {
		name: 'Post',
		setup() {
			const store = useStore();
			const posts = computed(() => {
				return store.getters.posts;
			});

			return {
				posts
			}
		}
	}
</script>

<style scoped>

</style>