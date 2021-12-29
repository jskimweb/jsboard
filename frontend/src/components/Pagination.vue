<template>
	<ul class="pagination justify-content-center mt-4">
		<li :class="{'disabled': currentPage === 1}" class="page-item" style="cursor: pointer">
			<span @click="movePage(currentPage - 1)" class="page-link">
				<span aria-hidden="true">&laquo;</span>
			</span>
		</li>
		<li v-for="(page, index) in totalPages" :key="index" :class="{'active': currentPage === index + 1}" class="page-item" style="cursor: pointer">
			<span @click="movePage(index + 1)" class="page-link">{{ index + 1 }}</span>
		</li>
		<li :class="{'disabled': currentPage === totalPages}" class="page-item" style="cursor: pointer">
			<span @click="movePage(currentPage + 1)" class="page-link">
				<span aria-hidden="true">&raquo;</span>
			</span>
		</li>
	</ul>
</template>

<script>
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	
	export default {
		name: 'Pagination',
		setup() {
			const store = useStore();
			const currentPage = computed(() => {
				return store.state.currentPage
			});
			const totalPages = computed(() => {
				return store.state.totalPages
			});

			const movePage = async page => {
				store.state.currentPage = page;
				await store.commit('startSpinner');
				await store.dispatch('GET_POSTS', store.state.currentPage).then(() => {
					store.commit('endSpinner')
				});
			}

			return {
				currentPage,
				totalPages,
				movePage
			}
		}
	}
</script>

<style scoped>

	.page-link {
		color: #343a40;
		border: .1rem solid rgba(0, 0, 0, .5);
	}

	.page-link:hover {
		background-color: rgba(0, 0, 0, .1);
		border-color: #343a40;
	}

	.page-item.active .page-link {
		background-color: #343a40;
		border-color: #343a40;
	}

	.page-item.disabled .page-link {
		border-color: rgba(0, 0, 0, .5);
	}
</style>