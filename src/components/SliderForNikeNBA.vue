<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({ category: String, slide: Object, description: String, discountPrice: String, price: String });

</script>

<template>
	<div class="">
		<div class="">
			<img width="415" class="aspect-square" :src="slide.imgUrl">
			<RouterLink to="/men">
				<div class="mt-4 text-left">
					<h3 class="text-[16px] font-semibold">{{ slide.category }}</h3>
					<p class="font-light text-gray-500">{{ slide.description }}</p>

					<div class="mt-2">
						<p v-if="slide.discountPrice" class="">
							${{ slide.discountPrice }}
						</p>
						<p class="" :class="slide.discountPrice ? 'line-through text-gray-500' : ''">
							${{ slide.price }}
						</p>
					</div>
				</div>
			</RouterLink>
		</div>
	</div>
</template>