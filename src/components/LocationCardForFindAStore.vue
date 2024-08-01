<script setup>
import { toRefs, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

import LocationCardItem from '@/components/LocationCardItem.vue';

const items = [
	{
		name: 'Store 1',
		state: 'State 1',
		city: 'City 1',
		street: 'Street 1',
		status: 'Open',
		closesAt: '18:00'
	},
	{
		name: 'Store 2',
		state: 'State 2',
		city: 'City 2',
		street: 'Street 2',
		status: 'Open',
	},

	{
		name: 'Store 3',
		state: 'State 3',
		city: 'City 3',
		street: 'Street 3',
		status: 'Open',
	},
	{
		name: 'Store 2',
		state: 'State 2',
		city: 'City 2',
		street: 'Street 2',
		status: 'Open',
	},
	{
		name: 'Store 2',
		state: 'State 2',
		city: 'City 2',
		street: 'Street 2',
		status: 'Open',
	}

]

// const props = defineProps({
// 	items: {
// 		type: Array,
// 		required: true
// 	},

// })
// const { items } = toRefs(props);

const searchFilter = ref('');

const filteredItems = computed(() => {
	if (searchFilter.value !== '') {
		return items.filter((item => item.name.includes(searchFilter.value) || item.status.includes(searchFilter.value)))
	}
	return items
})

const handleSearch = (search) => {
	searchFilter.value = search;

}

</script>

<template>
	<div class="flex flex-col w-full ">
		<LocationCardItem class="cursor-pointer" v-for="item in filteredItems" :key="item" :item="item" />
	</div>
</template>