<script setup>
import { toRefs, ref } from 'vue';
import { RouterLink } from 'vue-router';

import SliderItemWomen from '@/components/SliderItemWomen.vue';

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
	<div class="w-full">
		<div class="flex justify-between items-center mb-4">

			<h2 class="font-extrabold ml-1.5 text-[25px] uppercase">Nike && Jordan Essentials For Women</h2>

			<div v-if="data.length > 0" class="flex items-center gap-3">
				<button v-if="currentSlide !== 0" @click="slideTo(false)"
					class="p-2  rounded-fullp-2 bg-[#E6E8E8] bg-opacity-20  hover:bg-[#CCD1D1] hover:bg-opacity-60 transition visible active:bg-opacity-100  hover:bg-opacity-25 rounded-full">
					<ChevronLeft :size="30" />
				</button>

				<button v-if="currentSlide !== 6" @click="slideTo(true)"
					class="p-2 bg-[#E6E8E8] bg-opacity-20  hover:bg-[#CCD1D1] hover:bg-opacity-60 transition active:bg-opacity-100  hover:bg-opacity-25 rounded-full">
					<ChevronRight :size="30" />
				</button>
			</div>
		</div>

		<Carousel ref="carousel" v-model="currentSlide" :items-to-show="3" :items-to-scroll="1" :transition="800"
			snapAlign="start">
			<Slide v-for="slide in data" :key="slide" class="flex items-baseline">
				<RouterLink to="/men">
					<SliderItemWomen :data="[
						{ category: 'Jordan Mid' },
						{ category: 'Jordan Easy' },
						{ category: 'Jordan Low' },
						{ category: 'Jordan 23' },
						{ category: 'Nike X-Force' },
						{ category: 'Nike Zoom' },
						{ category: 'Nike Pegasus-23' },
						{ category: 'Jordan for men' },
						{ category: 'Jordan for men' },
						{ category: 'Jordan for men' },
						{ category: 'Jordan for men' },
						{ category: 'Jordan for men' },
					]" :slide="slide" />
				</RouterLink>
			</Slide>
		</Carousel>
	</div>
</template>