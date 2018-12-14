<template>
	<section id="cuponcodea">
		<div id="cuponcode" class="shadow">
			<h2>Hello and welcome!</h2>
			<p class="pt-4">we are here to save the planet together! One company at time, one user at a time toward a paperless environment. Enter the promotional code to get amazing discounts.</p>
			<div class="row mt-5">
				<div class="col-7">
					<div class="form-group">
						<input type="text" class="form-control form-controlc">
					</div>
				</div>
				<div class="col-54">
					<input type="submit" class="btn btn-blockc" value="Enter code">
				</div>
			</div>
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
		min-height: 400px;
		position: relative;
		#cuponcode{
			background: $mainc4!important;
			padding: 40px;
			margin: auto;
			p{
				color: $mainc;
				font-weight: 600;
			}
		}
	}
</style>