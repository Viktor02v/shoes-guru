<script setup>
import { toRefs, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

import LocationCardItem from '@/components/LocationCardItem.vue';

const items = [
	{ name: 'Nike Store Riga Akropole (Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Open', closesAt: '9:00 PM' },
	{ name: 'Jordan Store Zlote Tarasy (Partnered)', state: 'Floor 0, Zlote Tarasy', street: 'ul. Zlote Tarasy', city: 'Warsaw, Poland', status: 'Open', closesAt: '10:00 PM' },
	{ name: 'Nike Store Riga Akropole (Not Partnered)', state: 'Mascavas iela 257', city: 'Riga, Latvia', street: 'LV-109, LV', status: 'Closed', closesAt: '9:00 PM' },
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
]

const props = defineProps({
	filters: {
		type: Object,
		required: true,
		default: () => ({
			searchString: '',
			sortBy: '',
		}),
	},
})
const { filters } = toRefs(props);

const filteredItems = computed(() => {
	// Convert search and sort terms to lowercase
	const searchTerm = filters.value.searchString.toLowerCase();
	const sortTerm = filters.value.sortBy.toLowerCase();

	// Filter items based on search and sort criteria
	return items.filter(item => {
		// Check if the item matches the search term
		const matchesSearch =
			item.name.toLowerCase().includes(searchTerm) ||
			item.city.toLowerCase().includes(searchTerm);

		// If it doesn't match the search term, exclude it
		if (!matchesSearch) return false;

		// Check if the item matches the sort term
		if (sortTerm === 'nike') {
			return item.name.toLowerCase().includes('nike');
		} else if (sortTerm === 'jordan') {
			return item.name.toLowerCase().includes('jordan');
		}

		// If no specific sort term, include the item
		return true;
	});
});


</script>

<template>
	<div class="flex flex-col w-full ">
		<LocationCardItem class="cursor-pointer" v-for="item in filteredItems" :key="item" :item="item" />
	</div>
</template>