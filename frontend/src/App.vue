<template>
  <div>
		<Header></Header>
    <router-view></router-view>
    <Spinner></Spinner>
  </div>
</template>

<script>
	import Header from '@/components/Header'
  import Spinner from '@/components/Spinner'

  export default {
    name: 'App',
		components: {
			Header,
      Spinner
		}
  }
</script>

<style>

</style>