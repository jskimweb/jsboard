<template>
	<div class="post-contents">
		<div class="d-flex justify-content-between mb-3">
			<span>글번호 : {{ post.id }}</span>
			<span>작성일 : {{ post.createdAt }}</span>
		</div>
		<h3>{{ post.title }}</h3>
		<p class="mt-3 mb-4">{{ post.content }}</p>
	</div>
</template>

<script>
	import { computed } from 'vue'
	import { useStore } from 'vuex'

	export default {
		name: 'PostContents',
		setup() {
			const store = useStore();
			const post = computed(() => {
				return store.getters.post
			});

			return {
				post
			}
		}
	}
</script>

<style>

</style>