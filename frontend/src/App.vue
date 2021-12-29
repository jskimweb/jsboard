<template>
  <div class="mb-5">
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
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  input {
    border: .1rem solid rgba(0, 0, 0, .5) !important;
  }
  
  textarea {
    border: .1rem solid rgba(0, 0, 0, .5) !important;
  }
  
  a:hover {
    text-decoration: rgba(0, 0, 0, .5) underline;
  }
</style>