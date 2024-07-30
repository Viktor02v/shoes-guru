<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
	item: Object,
})
</script>

<template>
	<div class=" flex flex-col py-5 px-10 border-b border-gray-300 w-full">
		<h3 class="text-[16px]">{{ item.name }}</h3>
		<p class="text-gray-500 text-[16px] ">{{ item.state }}</p>
		<p class="text-gray-500 text-[16px]">{{ item.city }}, {{ item.street }}</p>
		<div class="flex items-center">
			<p class="text-red-500 text-[16px]">{{ item.status }}</p>
			<div class="w-[3px] h-[3px] rounded-medium bg-gray-500 mx-2"></div>
			<p class=" text-[16px] text-gray-500">Closes At {{ item.closesAt }}</p>
		</div>
	</div>
</template>