<script setup>
import { ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router'

let isHover = ref(false);
</script>

<template>
	<div class="w-[1280px] h-[550px] relative overflow-hidden" @mouseenter="isHover = true"
		@mouseleave="isHover = false">
		<div
			:class="isHover ? 'transition ease-in duration-150 bg-opacity-10' : 'transition ease-out duration-150 bg-opacity-0'"
			class="absolute w-full h-full bg-black rounded-md">
			<img width="550" class="absolute  rounded-l-md left-0" src="/images/icons/Jordan for NewLine Red.png">
			<img width="300" class="absolute top-[25%] left-[38.3%] " src="/images/Air Jordan .png">
			<img width="550" class="absolute rounded-r-md right-0" src="/images/icons/Jordan For NewLine Black.png">

			<div class="absolute bottom-[4%] left-[48.5%] flex gap-1 items-center">
				<button class="rounded-full border border-[2px] active:border-black bg-white active:bg-white p-1">
				</button>

				<button class="rounded-full border border-[2px] active:border-black bg-black active:bg-white  p-1">
				</button>

				<button class="rounded-full border border-[2px] active:border-black bg-black active:bg-white  p-1">
				</button>
			</div>
		</div>
	</div>
</template>