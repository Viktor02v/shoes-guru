<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRight from 'vue-material-design-icons/ChevronLeft.vue';

let isHovered = ref(false)
let isHoveredForNews = ref(false)
</script>

<template>


	<section id="navigationForMen">
		<div class="absolute px-[683px]  flex center z-30 hover:bg-opacity-100   bg-opacity-20 bg-gradient-to-r from-gray-100 to-gray-300 bg-gray-200">
			<RouterLink to="/">
				<button class="flex items-center align-center p-2">
					<ChevronRight size="20" />
					<p class="font-light text-center">back</p>
				</button>
			</RouterLink>

		
		</div>

		<div class="w-[1440px] overflow-hidden">
			<div class=" flex flex-col relative  mt-20 w-full mx-auto items-center pb-20 " @mouseenter="isHovered = true"
				@mouseleave="isHovered = false">

				<div :class="isHovered ? ' transition duration-600' : 'absolute transition duration-600'"
					class=" flex items-center w-full justify-between px-20">
					<div
						:class="isHovered ? 'translate-x-[0px] transition duration-300 bg-opacity-50' : 'translate-x-[-1370px]  transition duration-300 bg-opacity-0'"
						class="absolute z-10 translate-y-[-30px] w-[1280px] bg-gradient-to-r from-gray-100 to-black-500 h-[180px] ">

					</div>
					<div
						:class="isHovered ? 'text-gray-400  translate-x-[610px] translate-y-[60px] transition easy-in duration-300' : 'translate-x-[-300px] translate-y-[-200px] transition easy-out duration-300 text-[20px]'"
						class="font-light z-20 text-[30px] mb-10">
						<h2>Men</h2>
					</div>

					<img
						:class="isHovered ? 'translate-x-[-540px] translate-y-[-30px] transition duration-300' : 'translate-x-[300px] translate-y-[-200px] transition duration-300'"
						width="200" class=" mb-10 translate-x-[300px] z-20" src="/images/Air Jordan .png">
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
	</section>

	<section id="news">
		<div class="mx-20 mb-20">
			<div class="flex items-ceter gap-10 flex-col" @mouseenter="isHoveredForNews = true"
				@mouseleave="isHoveredForNews = false">
				<div :class="isHoveredForNews ? 'shadow-inner shadow-2xl' : ''"
					class="bg-[url('/images/icons/Nike-news-vampire-red.png')] bg-local bg-bottom  h-[600px]">
				</div>
				<RouterLink to="/nike-violent-red">
					<div class="flex flex-col w-[500px] mx-auto wrap items-center">
						<p :class="isHoveredForNews ? 'text-gray-500 transition easy-in duration-200' : 'transition easy-out duration-200'"
							class="font-medium text-[15px]">Nike Violent Red</p>
						<h2 class="font-sans font-black mb-3 w-[500px] text-center uppercase text-[60px]">
							Don't waste your blood
						</h2>
						<p class="font-light text-center text-[18px]">Run with the violence in your hearth towards the goal.
							Make it real
							with the <span class="font-medium text-[18px]"> Nike Violent Red</span> </p>
						<RouterLink to="/shop">
							<button
								class="rounded-full mt-[20px] transition easy-in duration-150 hover:bg-opacity-80 font-semibold text-[14px] py-2 px-6 bg-black text-white">
								Shop
							</button>
						</RouterLink>
					</div>
				</RouterLink>

			</div>
		</div>
	</section>
</template>