<template>
	<b-nav vertical>
	  <b-nav-item :active="$router.name=='business-dash'" :to="{name:'business-dash'}">Dashboard</b-nav-item>
	  <b-nav-item :active="$router.name=='company-files'" :to="{name:'company-files'}">Company Files</b-nav-item>
	  <b-nav-item :active="$router.name=='send-request'" :to="{name:'send-request'}">Send Request</b-nav-item>
	  <b-nav-item :active="$router.name=='team'" :to="{name:'team'}">Team</b-nav-item>
	</b-nav>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {

			}
		},
		computed: {
			
		}
	}
</script>

<style type="text/css">
	.active {
		color: brown;
		font-weight: bold;
	}
</style>