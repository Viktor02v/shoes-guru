<script setup>

</script>

<template>
	<div id="Banner" class=" banner">
		Hey there
	</div>
</template>

<style>
.banner {
	--clr:maroon;
	width: 100%;
	height: 70px;
	background-color: black;
	display: flex;
	align-items: center;
	justify-content: start;
	font-size: 2.5rem;
}
.banner::before {
	content: "Easy Web Dew";
	color: white;
}
</style>