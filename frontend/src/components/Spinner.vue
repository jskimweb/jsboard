<template>
	<div v-if="loading" class="spinner">
		<button class="btn btn-primary" type="button" disabled>
			<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
			Loading...
		</button>
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
	.spinner {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, .5);
		z-index: 10;
	}

	.spinner button {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		opacity: 1;
	}
</style>