<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

import SearchForFindAStore from '@/components/SearchForFindAStore.vue'

import LocationCardForFindAStore from '@/components/LocationCardForFindAStore.vue'


const map = ref(null)

onMounted(() => {
	new window.google.maps.Map(map.value, {
		center: { lat: 56.946, lng: 24.105 },
		zoom: 15
	})
})



</script>

<template>
	<div class="relative px-20 border-b mb-10 w-[1440px]">

		<section id="sideBarForFindAStore">
			<div class="h-[350px]">
				<div class="absolute top-0 left-0 h-full w-[500px] bodrer border-r bg-white">
					<div class=" mt-10 flex flex-col ">
						<h2 class="mx-10 font-normal text-[24px] mb-10">Find A Nike Store</h2>
						<SearchForFindAStore  @search="handleSearch" />

						<div class="flex flex-col overflow-scroll h-[350px] border-b w-full">
							<LocationCardForFindAStore  :items="[
								{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
								{ name: 'Nike Store Riga Decropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
								{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
								{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
								{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
								{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
								{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
								{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
								{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
								{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
								{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
								{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
								{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
								{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
								{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
							]" />
						</div>

						<div class="w-full mx-10 mt-5 font-medium underline cursor-pointer">
							View All Stores
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="mapForFindAStore">
			<div class="h-[350px]">
				<div class="absolute top-0 bg-white h-full right-0 w-[940px]">
					<div ref="map" class="w-full h-full">
					</div>
				</div>
			</div>

		</section>
	</div>
</template>