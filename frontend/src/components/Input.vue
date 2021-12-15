<template>
	<div class="form-group">
		<label for="title">제목</label>
		<input :value=inputTitle @input="onInput" type="text" class="form-control" name="title">
	</div>
</template>

<script>
	export default {
		name: 'Input',
		props: ['inputTitle'],
		setup(props, { emit }) {
			const onInput = (event) => {
				emit('update:inputTitle', event.target.value);
			}

			return {
				onInput
			}
		}
	}
</script>

<style scoped>

</style>