<script setup>
import { cloneVNode, ref } from 'vue';
import { RouterLink } from 'vue-router';
import Magnify from 'vue-material-design-icons/Magnify.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';

const emit = defineEmits(['search'])

const search = (e) => {
	emit('search', e.target.value);
	

}



let inputIsHovered = ref(false)

</script>

<template>
	<div class=" border-b flex flex-col ">
		<div class="mx-10">
			<div class="flex  relative items-center   transition   border border-[#000000]  rounded-md "
				@focus="inputIsHovered = true" @focusout="inputIsHovered = false">
				<Magnify class="bg-opacity-10 p-2" />
				<input @input="search" @focus="inputIsHovered = true" @focusout="inputIsHovered = false" type="text"
					:placeholder="inputIsHovered ? '' : 'Search Location'"
					class="py-4 bg-transparent outline-none font-[300] placeholder-[#BEBEC7] text-black  w-full">

				<span
					:class="inputIsHovered ? 'opacity-100 absolute -translate-y-[30px] -translate-x-[10px] left-[30px] transition duration-200' : 'opacity-0 absolute left-[30px]   transition duration-200 '"
					class="text-[13px] bg-white font-light">Location</span>
			</div>

			<div class="flex  mt-5 mb-4 w-full justify-between items-center">
				<p class="font-light text-[14px] text-gray-400">15 Stores Near You</p>

				<button class="flex border border-[2px] gap-1 rounded-full items-center py-1.5 px-6">
					<p class="font-medium">Filter</p>
					<ChevronDown />
				</button>
			</div>
		</div>
	</div>
</template>