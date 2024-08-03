<script setup>
import { ref, onMounted } from 'vue';

import SearchForFindAStore from '@/components/SearchForFindAStore.vue'

import LocationCardForFindAStore from '@/components/LocationCardForFindAStore.vue'


const map = ref(null)

onMounted(() => {
	new window.google.maps.Map(map.value, {
		center: { lat: 56.946, lng: 24.105 },
		zoom: 15
	})
})

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
	<div class="relative px-20 border-b mb-10 w-[1440px]">

		<section id="sideBarForFindAStore">
			<div class="h-[350px]">
				<div class="absolute top-0 left-0 h-full w-[500px] bodrer border-r bg-white">
					<div class=" mt-10 flex flex-col ">
						<h2 class="mx-10 font-normal text-[24px] mb-10">Find A Nike Store</h2>
						<SearchForFindAStore @sortBy="handleSort" @search="handleSearch" />

						<div class="flex flex-col overflow-scroll h-[350px] border-b w-full">
							<LocationCardForFindAStore :filters="filters" />
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