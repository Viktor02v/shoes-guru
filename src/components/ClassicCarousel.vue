<script setup>
import { toRefs, ref } from 'vue';
import { RouterLink } from 'vue-router';

import ClassicCarouselItem from '@/components/ClassicCarouselItem.vue';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'

const props = defineProps({ data: Array, category: String });
const { data, category } = toRefs(props);

let currentSlide = ref(0);

const slideTo = (val) => {
	if (val && currentSlide.value <= 7) {
		let res = currentSlide.value + 1
		if (res <= 12) {
			currentSlide.value = currentSlide.value + 1
		} else if (res > 12) {
			currentSlide.value = 12
		}
	} else if (!val) {
		let res = currentSlide.value - 1
		if (res > 0) {
			currentSlide.value = currentSlide.value - 1
		} else if (res < 1) {
			currentSlide.value = 0
		}
	}
}
</script>

<template>
	<div class="relative w-full">
		<div class="flex justify-between items-center">

			<h2 class="font-extrabold text-[25px] uppercase px-20 mb-7">Classics Spotlight</h2>

			<button :class="currentSlide !== 0 ? 'bg-opacity-100' : 'bg-opacity-20'" @click="slideTo(false)"
				class="p-2 absolute left-[70px] bottom-[145px] z-20  rounded-full bg-white">
				<ChevronLeft :size="25" />
			</button>

			
			<button :class="currentSlide !== 8 ? 'bg-opacity-100' : 'bg-opacity-20'" @click="slideTo(true)"
				class="p-2 absolute right-[70px] z-20 bottom-[145px] bg-white rounded-full">
				<ChevronRight :size="25" />
			</button>

		</div>

		<Carousel ref="carousel" class="z-10" v-model="currentSlide" :items-to-show="4" :items-to-scroll="1"
			:transition="400" snapAlign="center">
			<Slide v-for="slide in data" :key="slide">
				<RouterLink to="/men">
					<ClassicCarouselItem :data="[
						{ category: 'DUNK' },
						{ category: 'BLAZER' },
						{ category: 'AIR MAX' },
						{ category: 'Jordan 23' },
						{ category: 'AIR JORDAN 1' },
						{ category: 'Nike Zoom' },
						{ category: 'AIR FORCE 1' },
						{ category: 'DUNK' },
						{ category: 'BLAZER' },
						{ category: 'AIR MAX' },
						{ category: 'AIR JORDAN 1' },
						{ category: 'Nike Zoom' },
					]" :slide="slide" />
				</RouterLink>
			</Slide>
		</Carousel>
	</div>
</template>