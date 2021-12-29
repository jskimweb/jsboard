<template>
	<div class="post-contents">
		<div class="header d-flex justify-content-between pb-3 mb-3">
			<span>글번호 : {{ post.id }}</span>
			<span>{{ timestamp }}</span>
		</div>
		<h3 class="pt-3 pb-3">{{ post.title }}</h3>
		<p v-html="postContent" class="mt-3 mb-4"></p>
	</div>
</template>

<script>
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	import dayjs from 'dayjs'

	export default {
		name: 'PostContents',
		setup() {
			const store = useStore();
			const post = computed(() => {
				return store.getters.post
			});
			const timestamp = dayjs(post.value.timestamp).format('YYYY.MM.DD. hh:mm A');
			const postContent = post.value.content.replaceAll(/(\n|\r\n)/g, '<br>');

			return {
				post,
				timestamp,
				postContent
			}
		}
	}
</script>

<style scoped>
	.header {
		border-bottom: 0.1rem solid rgba(0,0,0,.5);
	}
</style>