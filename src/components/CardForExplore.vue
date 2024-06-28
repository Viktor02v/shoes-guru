<script setup>
import { toRefs, ref } from 'vue';

const props = defineProps({
	imageUrl: String,
	title: String,
})

let isHovered = ref(false)
</script>

<template>
	<div class="relative overflow-hidden w-full">
		<img @mouseenter="isHovered = true" @mouseleave="isHovered= false" :class="isHovered ? 'contrast-50 transition easy-in duration-200': 'contrast-100 transition easy-out duration-200'" class="relative rounded-md" :src="imageUrl">
		<span @mouseenter="isHovered = true" @mouseleave="isHovered= false" v-if="isHovered"  class="absolute top-[20%] left-[50%] font-semibold text-2xl text-white">Your text</span>
		<RouterLink to="collections">
			<button  @mouseenter="isHovered = true" @mouseleave="isHovered= false"
			:class="isHovered ? 'bg-white text-[#000000] transition easy-in duration-200':'transition easy-out duration-200'"
				class="absolute bottom-10 z-20 left-[40%]  rounded-full cursor-pointer transition easy-in duration-150 py-3 px-8 bg-transparent border hover:bg-white hover:text-black font-semibold text-[14px] text-white">
				Shop
			</button>
			</RouterLink>
			<h3 @mouseenter="isHovered = true" @mouseleave="isHovered= false" :class="isHovered ? 'opacity-100 transition easy-in duration-500 top-[0px] translate-y-[130px]' : 'opacity-30 transition easy-out duration-200 top-[-50px]'" class="absolute uppercase text-white  rotate-90 font-serif text-[50px] font-bold">Exclusive</h3>
			<h3 @mouseenter="isHovered = true" @mouseleave="isHovered= false" :class="isHovered ? 'opacity-100  transition easy-in duration-500 top-[0px] translate-x-[530px]' : 'opacity-30 transition easy-out duration-200 top-[-50px]'" class="absolute uppercase text-white rotate-0 top-[51%] font-serif left-[-320px] text-[50px] font-bold">Exclusive</h3>
			<div @mouseenter="isHovered = true" @mouseleave="isHovered= false"  :class="isHovered ? 'transition easy-in duration-500 translate-x-[700px]' : ''"  class="absolute bottom-0 z-10 left-0 h-40 w-[630px] left-[-700px] opacity-30 bg-white">

			</div>

		<RouterLink to="collections">

		</RouterLink>
	</div>
</template>