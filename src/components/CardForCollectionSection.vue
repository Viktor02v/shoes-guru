<script setup>
import { toRefs, ref } from 'vue';

const props = defineProps({
	imageUrl: String,
	type: String,
})

</script>

<template>
	<div class="">
		<img width="500" class="h-[500px]" :src="imageUrl">
		<div>
			<h3 class="font-extrabold mt-3 text-[20px] tracking-wide	 uppercase">{{ type }}</h3>
			<RouterLink to="/shop">
				<button
					class="rounded-full mt-[20px] transition easy-in duration-150 hover:bg-opacity-80 font-semibold text-[14px] py-2 px-6 bg-black text-white">
					Shop
				</button>
			</RouterLink>
		</div>
	</div>
</template>