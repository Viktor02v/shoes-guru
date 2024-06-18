<script setup>

</script>

<template>
	<div id="Banner" class=" w-[1440px] banner border-b border-gray-300">
	</div>
</template>

<style>
.banner {
	--ch: 17ch;
	--clr: black;
	width: 100%;
	height: 70px;
	color: transparent;
	font-family: serif;
	display: flex;
	background-color: rgb(243, 238, 238);
	align-items: center;
	justify-content: start;
	font-size: 2.5rem;
	text-shadow: 0 0px 1px var(--clr), 20ch 0px 1px var(--clr), 40ch 0px 1px var(--clr), 60ch 0px 1px var(--clr), 80ch 0px 1px var(--clr), 80ch 20px 1px var(--clr), 160ch -40px 1px var(--clr), 240ch 0px 1px var(--clr), 350ch -80px 1px var(--clr);
	animation: move 3s linear infinite;
}

.banner::before {
	content: "new line";
}

@keyframes move {
	to {
		text-shadow: -20ch 0 1px var(--clr), 0ch 0px 1px var(--clr), 20ch 0px 1px var(--clr), 40ch 0px 1px var(--clr), 60ch 0px 1px var(--clr);
	}
}
</style>