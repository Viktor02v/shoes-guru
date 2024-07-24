<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({ category: String, slide: Object, description: String, buttonUrl: String, buttonText: String });

</script>

<template>
	<div class="relative flex">
		<img width="425" class="h-[500px]" :src="slide.imgUrl">
		<div class="absolute text-white flex flex-col items-start left-10 bottom-[45px]  text-left">
			<h3 class="text-[15px] font-medium mb-1">{{ slide.category }}</h3>
			<p class=" text-[25px] mb-5">{{ slide.description }}</p>
			<button
				class="rounded-full transition easy-in duration-150 hover:bg-gray-300 font-semibold text-[14px] py-2.5 px-6  bg-white text-black">
				<RouterLink v-if="slide.buttonUrl" :to="slide.buttonUrl">
					{{ slide.buttonText }}
				</RouterLink>
			</button>
		</div>
	</div>
</template>