<script setup>
import { toRefs, ref } from 'vue';

const props = defineProps({
	imageUrl: String,
	category: String,
})

</script>

<template>
	<RouterLink to="/shop">
		<div class="">
			<img width="500" class="h-[430px]" :src="imageUrl">
			<div>
				<h3 class="font-slight mt-3 text-[22px] ">{{ category }}</h3>
			</div>
		</div>
	</RouterLink>
</template>