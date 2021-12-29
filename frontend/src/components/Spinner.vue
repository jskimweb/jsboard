<template>
	<div v-if="loading" class="spinner-area">
		<div class="spinner">
			<div class="spinner-grow" role="status"></div>
		</div>
	</div>
</template>

<script>
	import { computed } from 'vue'
	import store from '@/store/store'

	export default {
		name: 'Spinner',
		setup() {
			const loading = computed(() => {
				return store.getters.loadingStatus;
			});

			return {
				loading
			}
		}
	}
</script>

<style scoped>
	.spinner-area {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, .5);
		z-index: 10;
	}

	.spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
		display: flex;
    justify-content: center;
	}
</style>