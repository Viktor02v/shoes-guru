<script setup>
import { ref, toRefs, defineProps } from 'vue';



const props = defineProps({ store: Object });
const { store } = toRefs(props);

</script>

<template>
	<div class="flex w-[600px] flex-col">
		<img width="300" class="h-[200px] rounded-md object-bottom object-cover"
			src="/images/icons/Nike-decor-for-find-a-store-warsaw.png" alt="">
		<div class="flex flex-col ">
			<h3 class="text-[16px]">{{ store.name }}</h3>
			<p class="text-gray-500 text-[16px] ">{{ store.state }}</p>
			<p class="text-gray-500 text-[16px]">{{ store.city }}, {{ store.street }}</p>
			<div class="flex items-center">
				<p :class="store.status === 'Open' ? 'text-green-500' : 'text-red-500'" class="text-[16px]">{{
					store.status }}
				</p>
				<div class="w-[3px] h-[3px] rounded-medium bg-gray-500 mx-2"></div>
				<p class=" text-[16px] text-gray-500">Closes At {{ store.closesAt }}</p>
			</div>
		</div>
	</div>
</template>