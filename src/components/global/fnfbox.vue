<template>
	<section id="cuponcodea">
		<div id="cuponcode" class="shadow">
			<h2>Friends and Family Discount!</h2>
			<p class="py-5 my-5">$199 a year,unlimited files and unlimited users</p>

			<input type="submit" class="btn btn-blockc" value="Register">

		</div>
	</section>
</template>

<script>
	export default {
	 
	}
</script>


<style scoped>

   @import './../../cssm/var.css';
   @import './../../cssm/btn.css';

	#cuponcodea{
		position: relative;
		text-align: center;
		#cuponcode{
			padding: 40px;
			margin: auto;
			p{
				color: $mainc;
				font-weight: 600;
			}
		}
	}
</style>