<template>
	<div class="container">
		<h1>5월 마지막주 영화 예매 순위</h1>
		<div v-for="(item, index) in movies" :key="index" class="item">
			<span class="rank">{{ item.id }}</span>
			<img v-bind:src="item.poster" class="poster" />
			<strong class="tit">{{ item.name }}</strong>
			<span class="rate">예매율 {{ item.rate }}</span>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue'
	import axios from 'axios'

	export default {
		name: 'Home',
		setup() {
			const movies = ref([]);
			axios.get('/api/movies').then(({ data }) => {
				movies.value = data;
			});

			return {
				movies
			}
		}
	}
</script>

<style scoped>

</style>