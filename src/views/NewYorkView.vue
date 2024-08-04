<script setup>
import { ref, toRefs } from 'vue';
import { RouterLink } from 'vue-router';
import NewYorkCardItem from '@/components/NewYorkCardItem.vue';

import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';

const stores = ref([
	{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '10:00 PM' },
	{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '10:00 PM' },
	{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Closed', closesAt: '8:00 PM' },
])


</script>

<template>
	<div class="relative w-[1440px] mb-20  px-20">

		<section id="navigationForNewYork">
			<div class="absolute text-[12px] items-center  flex top-20 left-20 ">
				<RouterLink to="/find-a-store">
					<span class="underline ">Store Directory</span>
				</RouterLink>
				<ChevronRight fillColor="#303333" :size="20" />
				<p>New York</p>
			</div>
		</section>

		<section id="storesForNewYork">
			<div class="w-full mt-[110px]">
				<div class="flex mb-20 flex-col items-center">
					<h2 class="text-[25px]">Find a Store</h2>
					<div class="underline text-[16px] ">Show Map</div>
				</div>

				<div class="grid gap-10 grid-cols-4 ">
					<NewYorkCardItem :store="store" v-for="store in stores" :key="store" />
				</div>
			</div>
		</section>



	</div>

</template>