<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({ imageUrl: String })

</script>

<template>
	<RouterLink to="/men">
		<div class="bg-white p-5 rounded-md">
			<img width="200" :src="imageUrl">
		</div>
	</RouterLink>
</template>
