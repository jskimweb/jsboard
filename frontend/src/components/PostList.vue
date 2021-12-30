<template>
	<div>
		<div class="category d-flex justify-content-between pt-1 pb-2">
			<span class="text-align-center ml-2" style="white-space: no-wrap">글번호</span>
			<span class="mr-auto ml-2">제목</span>
			<span class="float-right mr-4 pr-3">작성일</span>
		</div>
		<div v-for="(post, index) in posts" :key="post.id" class="card">
			<router-link :to="`/post/${ post.id }`" class="card-body d-flex justify-content-between pt-2 pb-2">
				<span class="post-id d-inline-block text-dark text-right">{{ post.id }}</span>
				<span class="card-title text-dark mr-auto mb-0 ml-3">{{ post.title }}</span>
				<span class="float-right text-dark ml-3">{{ timestamp[index] }}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	import { computed, watchEffect } from 'vue'
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

			watchEffect(() => {
				for (let i = 0; i < posts.value.length; i++) {
					timestamp[i] = dayjs(posts.value[i].timestamp).format('YYYY.MM.DD.');
				}
			});

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
		white-space: nowrap;
	}

	.card-title {
		font-weight: 500;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>