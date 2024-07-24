<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Bus from 'vue-material-design-icons/Bus.vue';
import BriefcaseClock from 'vue-material-design-icons/BriefcaseClock.vue';
import Calendar from 'vue-material-design-icons/Calendar.vue';
import ListBox from 'vue-material-design-icons/ListBox.vue';
import Comment from 'vue-material-design-icons/Comment.vue';

const props = defineProps({ category: String, slide: Object, description: String, });

</script>

<template>
	<div class="flex">
		<div class="text-black w-[300px] flex flex-col items-start left-10 bottom-[45px] items-center">
			<Bus size="70" fillColor="#F95A00" v-if="slide.category === 'Free Shipping'" />
			<BriefcaseClock size="70" fillColor="#F95A00" v-if="slide.category === 'Wear Test'" />
			<Calendar size="70" fillColor="#F95A00" v-if="slide.category === 'Member Experiences'" />
			<ListBox size="70" fillColor="#F95A00" v-if="slide.category === 'Receiptless Returns'" />
			<Comment size="70" fillColor="#F95A00" v-if="slide.category === 'Nike Experts'" />
			<h3 class="text-[27px] mt-3 mb-1 ">{{ slide.category }}</h3>
			<p class=" text-[17px] font-light">{{ slide.description }}</p>
		</div>
	</div>
</template>