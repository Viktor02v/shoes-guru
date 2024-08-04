<script setup>
import { ref, onMounted } from 'vue';

import SearchForFindAStore from '@/components/SearchForFindAStore.vue'
import LocationCardForFindAStore from '@/components/LocationCardForFindAStore.vue'

import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';


const stores = ref([
	[
		'New York',
		[{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },]
	],
	[
		'Warsaw',
		[{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '10:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '10:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Closed', closesAt: '8:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Closed', closesAt: '8:00 PM' },

		]
	],
	[
		'New York',
		[{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },]
	],
	[
		'Warsaw',
		[{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '10:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '10:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Closed', closesAt: '8:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Closed', closesAt: '8:00 PM' },]
	],
	[
		'New York',
		[{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },]
	],
	[
		'Warsaw',
		[{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '10:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '10:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Closed', closesAt: '8:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Closed', closesAt: '8:00 PM' },]
	],
	[
		'New York',
		[{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },]
	],
	[
		'Warsaw',
		[{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '10:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '10:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Closed', closesAt: '8:00 PM' },
		{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Closed', closesAt: '8:00 PM' },]
	],
])

const map = ref(null)

onMounted(() => {
	new window.google.maps.Map(map.value, {
		center: { lat: 56.946, lng: 24.105 },
		zoom: 15
	})
})

const goToStores = ref(false)


const filters = ref({
	sortBy: '',
	searchString: '',
})

const handleSort = (value) => {
	filters.value.sortBy = value
}

const handleSearch = (value) => {
	filters.value.searchString = value
}

</script>

<template>
	<div :class="goToStores ? 'opacity-50 ' : 'opacity-100'" class="relative px-20 border-b mb-10 w-[1440px]">

		<section id="sideBarForFindAStore">
			<div class="h-[350px]">
				<div class="absolute top-0 left-0 h-full w-[500px] bodrer border-r bg-white">
					<div class=" mt-10 flex flex-col ">
						<h2 class="mx-10 font-normal text-[24px] mb-10">Find A Nike Store</h2>
						<SearchForFindAStore @sortBy="handleSort" @search="handleSearch" />

						<div class="flex flex-col overflow-scroll h-[350px] border-b w-full">
							<LocationCardForFindAStore :filters="filters" />
						</div>

						<div @click="goToStores = !goToStores" class="w-full mx-10 mt-5 font-medium underline cursor-pointer">
							View All Stores
						</div>

					</div>
				</div>
			</div>
		</section>

		<section id="storeDirectory">
			<div v-if="goToStores"
				class="absolute z-20 rounded-md flex items-center  top-[25px] shadow-2xl left-0 h-[calc(1000px-350px)] bg-white w-[1420px]">
				<div class="px-20">
					<h2 class="underline  font-normal text-[24px]">All Stores</h2>
					<div @click="goToStores = !goToStores" class="mt-5 mx-5">
						<button>
							<ChevronLeft fillColor="#000000" :size="30" />
						</button>
					</div>
				</div>

				<div class="ml-40">
					<div v-for="store in stores" :key="store" class="w-full">
						<RouterLink :to="`/stores/${store[0].toLowerCase().replace(' ', '-', '%20')}`">
							<div class="mx-10 text-[24px] text-black my-5">{{ store[0] }} ({{ store[1].length }})</div>
						</RouterLink>
					</div>
				</div>

				<div class="">
					<div v-for="store in stores" :key="store" class="w-full">
						<RouterLink :to="`/stores/${store[0].toLowerCase().replace(' ', '-', '%20')}`">
							<div class="mx-10 text-[24px] text-black my-5">{{ store[0] }} ({{ store[1].length }})</div>
						</RouterLink>
					</div>
				</div>

				<div class="">
					<div v-for="store in stores" :key="store" class="w-full">
						<RouterLink :to="`/stores/${store[0].toLowerCase().replace(' ', '-', '%20')}`">
							<div class="mx-10 text-[24px] text-black my-5">{{ store[0] }} ({{ store[1].length }})</div>
						</RouterLink>
					</div>
				</div>

				<div class="">
					<div v-for="store in stores" :key="store" class="w-full">
						<RouterLink :to="`/stores/${store[0].toLowerCase().replace(' ', '-', '%20')}`">
							<div class="mx-10 text-[24px] text-black my-5">{{ store[0] }} ({{ store[1].length }})</div>
						</RouterLink>
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