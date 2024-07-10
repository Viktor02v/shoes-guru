<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';

let isHovered = ref(false)
</script>

<template>
	<section id="navigationForWomen">
		<div class="relative w-[1440px] h-[100%]">
			<div
				class="sticky top-0 px-[683px] flex center z-30 hover:bg-opacity-100 transition  bg-opacity-20 bg-gradient-to-l from-white-100 to-gray-900 bg-gray-200">
				<RouterLink to="/">
					<button class="flex items-center align-center p-2">
						<ChevronLeft size="20" />
						<p class="font-light text-center">back</p>
					</button>
				</RouterLink>
			</div>

			<div class="w-[1440px] overflow-hidden">
				<div class=" flex flex-col relative  mt-20 w-full mx-auto items-center pb-20 "
					@mouseenter="isHovered = true">

					<div :class="isHovered ? ' transition duration-600' : 'absolute transition duration-600'"
						class=" flex items-center w-full justify-between px-20">
						<div
							:class="isHovered ? 'translate-x-[0px] transition duration-300 bg-opacity-50' : 'translate-x-[-1370px]  transition duration-300 bg-opacity-0'"
							class="absolute z-10 translate-y-[-30px] w-[1280px] bg-gradient-to-r from-orange-100 to-black-500 h-[180px] ">

						</div>
						<div
							:class="isHovered ? 'text-gray-400  translate-x-[590px] translate-y-[60px] transition easy-in duration-300' : 'translate-x-[-300px] translate-y-[-200px] transition easy-out duration-300 text-[20px]'"
							class="font-light z-20 text-[30px] mb-10">
							<h2>Women</h2>
						</div>

						<img
							:class="isHovered ? 'translate-x-[-538px] translate-y-[-30px] transition duration-300' : 'translate-x-[300px] translate-y-[-200px] transition duration-300'"
							width="200" class=" mb-10 translate-x-[0px] z-30" src="/images/Air Jordan .png">
					</div>

					<ul class="flex font-sans z-20 items-center text-mb  gap-9">
						<RouterLink to="/events">
							<li
								class="font-light hover:font-semibold hover:transition hover:duration-200 text-md cursor-pointer ">
								New Releases</li>
						</RouterLink>
						<RouterLink to="/community">
							<li
								class="font-light  hover:font-semibold hover:transition hover:duration-200 text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">
								Community
							</li>
						</RouterLink>
						<RouterLink to="/nike-men">
							<li
								class="font-light  hover:font-semibold hover:transition hover:duration-200 text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">
								Nike
							</li>
						</RouterLink>
						<RouterLink to="/jordan-men">
							<li
								class="font-light  hover:font-semibold hover:transition hover:duration-200 text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">
								Jordan
							</li>
						</RouterLink>
						<RouterLink to="/help">
							<li
								class="font-light  hover:font-semibold hover:transition hover:duration-200 text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">
								Help
							</li>
						</RouterLink>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>