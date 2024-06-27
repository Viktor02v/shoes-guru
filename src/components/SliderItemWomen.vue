<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({ category: String, slide: Object });

</script>

<template>
	<div class="">
		<div class="">
			<img width="415" class="aspect-square" :src="slide.imgUrl">
			<RouterLink to="/men">
				<div class="mt-4 text-[16px] font-semibold text-left">
					{{ slide.category }}
				</div>
			</RouterLink>
		</div>
	</div>
</template>