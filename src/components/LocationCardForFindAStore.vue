<script setup>
import { toRefs, ref } from 'vue';
import { RouterLink } from 'vue-router';

import LocationCardItem from '@/components/LocationCardItem.vue';


const props = defineProps({
	data: Array,
})
const { data } = toRefs(props);
</script>

<template>
	<div class="flex flex-col w-full ">

		<LocationCardItem class="cursor-pointer" v-for="item in data" :key="item" :item="item"/>
	</div>
</template>