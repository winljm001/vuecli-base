<template>
	<div id="home">
		主页
		<router-view></router-view>
		<navBar></navBar>
	</div>
</template>
<script>
	import navBar from "../../components/common/navbar.vue"
	export default {
		data() {
			return {
			}
		},
		mounted() {},
		computed: {
			
		},
		methods: {
			
		},
		components: {
			navBar
		}
	}
</script>
<style scoped>
	
</style>