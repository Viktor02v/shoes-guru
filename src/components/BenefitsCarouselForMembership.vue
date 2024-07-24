<script setup>
import { toRefs, ref } from 'vue';
import { RouterLink } from 'vue-router';

import SliderForBenefitsCarouselMembership from './SliderForBenefitsCarouselMembership.vue';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'


const props = defineProps({ data: Array, category: String });
const { data, category } = toRefs(props);

let currentSlide = ref(0);

const slideTo = (val) => {
	if (val && currentSlide.value <= 2) {
		let res = currentSlide.value + 1
		if (res <= 2) {
			currentSlide.value = currentSlide.value + 1
		} else if (res > 1) {
			currentSlide.value = 2
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
		<div class="flex justify-end items-center mb-4">

			<div v-if="data.length > 0" class="flex items-center pr-20 gap-3">
				<button
					:class="currentSlide !== 0 ? 'opacity-100 transition easy-in duration-1000 ' : 'opacity-20 transition easy-out duration-1000 '"
					@click="slideTo(false)" class=" p-2 bg-[#E6E8E8] hover:bg-[#AEB6BF] hover:bg-opacity-60  rounded-full">
					<ChevronLeft :size="currentSlide !== 0 ? '30' : '28'" class="transition easy-out duration-1000" />
				</button>

				<button
					:class="currentSlide !== 2 ? 'opacity-100  transition easy-in duration-1000' : 'opacity-20  transition easy-out duration-1000 '"
					@click="slideTo(true)"
					class="p-2 bg-[#E6E8E8] hover:bg-[#AEB6BF] hover:bg-opacity-60 transition rounded-full">
					<ChevronRight :size="currentSlide !== 2 ? '30' : '28'" class="transition easy-out duration-1000" />
				</button>
			</div>
		</div>

		<Carousel
			:class="currentSlide !== 0 ? 'pl-0 transition easy-out duration-200 ' : 'pl-5 transition easy-in duration-200 '" class="pr-10"
			ref="carousel" v-model="currentSlide" :items-to-show="3" :items-to-scroll="1" :transition="800"
			snapAlign="start">
			<Slide v-for="slide in data" :key="slide" class="flex items-baseline">
					<SliderForBenefitsCarouselMembership :slide="slide" />
			</Slide>
		</Carousel>
	</div>
</template>