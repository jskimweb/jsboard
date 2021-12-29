<template>
	<div>
		<div class="category pt-1 pb-2">
			<span class="ml-2 text-align-center" style="white-space: no-wrap">글번호</span>
			<span class="ml-4">제목</span>
			<span class="float-right mr-5 pr-4">작성일</span>
		</div>
		<div v-for="(post, index) in posts" :key="post.id" class="card">
			<router-link :to="`/post/${ post.id }`" class="card-body pt-2 pb-2">
				<span class="post-id d-inline-block text-dark text-right mr-3">{{ post.id }}</span>
				<span class="card-title text-dark ml-3">{{ post.title }}</span>
				<span class="float-right text-dark">{{ timestamp[index] }}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	import dayjs from 'dayjs'

	export default {
		name: 'PostList',
		setup() {
			const store = useStore();
			const posts = computed(() => {
				return store.getters.posts
			});
			let timestamp = [];
			
			for (let i = 0; i < posts.value.length; i++) {
				timestamp[i] = dayjs(posts.value[i].timestamp).format('YYYY.MM.DD. hh:mm A');
			}

			return {
				posts,
				timestamp
			}
		}
	}
</script>

<style scoped>
	.category {
    border-bottom: 0.1rem solid rgba(0,0,0,.5);
	}

	.card {
		border: none;
		border-bottom: .1rem solid rgba(0,0,0,.25);
		border-radius: 0;
	}

	.card:last-child {
    border-bottom: 0.1rem solid rgba(0,0,0,.5);
	}

	.post-id {
		width: 1.5rem;
		white-space: nowrap;
	}

	.card-title {
		font-weight: 500;
	}
</style>