<template>
	<div class="row">
		<div class="col-3 offset-1">
			<div class="py-5">Subcription</div>


			<div class="py-5">Billing Information</div>


			<div class="py-5">Receipts & Invoices</div>
		</div>
		<div class="col-8">
			<div class="py-5">
				<h6>Subscription Type: </h6><p>Business Plan</p><br>
				<h6>Subscription Charge: </h6><p>99.99$/month</p>
			</div>


			<div class="py-3">
				<h6>Subscription Type: <p>Business Plan</p></h6><br>
				<h6>Subscription Charge: <p>99.99$/month</p></h6>
			</div>


			<div class="py-5">
				<a href="" class="btn btn-success">View</a>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'mainprofile',
	   
	}
</script>

<style>
   .btn-success{
   	background: #76C45F!important;
   }
	h6{
		display: inline-block;
	}
	p{
		display: inline-block;
	}
</style>