<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({ category: String, slide: Object });

</script>

<template>
	<div class="relative w-full">
		<img width="350" class="aspect-square" :src="slide.imgUrl">
		<RouterLink to="/men">
			<div
				class="mt-4 absolute bottom-10 w-[350px] text-center mx-auto text-center text-white z-20 text-[26px] uppercase font-mono font-black">
				<div class="text-center">
					{{ slide.category }}
				</div>
			</div>
		</RouterLink>
	</div>
</template>