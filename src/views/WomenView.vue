<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';

let isHovered = ref(false)
let isHoveredForExploreFirstCard = ref(false)
let isHoveredForExploreSecondCard = ref(false)
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
							class="absolute z-10 translate-y-[-30px] w-[1280px] bg-gradient-to-r from-orange-400 to-black-500 h-[180px] ">

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

	<section id="newsForWomen">
		<div class=" mb-40">
			<div class="flex items-ceter gap-[90px] flex-col" @mouseenter="isHoveredForNews = true"
				@mouseleave="isHoveredForNews = false">
				<div :class="isHoveredForNews ? 'shadow-inner shadow-2xl' : ''"
					class="bg-[url('/images/icons/Nike-news-for-women.png')] bg-local bg-center  h-[700px]">
				</div>
				<RouterLink to="/nike-orange-sunset">
					<div class="flex flex-col w-[500px] mx-auto wrap items-center">
						<p :class="isHoveredForNews ? 'text-gray-500 transition easy-in duration-200' : 'transition easy-out duration-200'"
							class="font-medium text-[15px]">Nike Orange Sunset</p>
						<h2 class="font-sans font-black mb-3 w-[500px] text-center uppercase text-[60px]">
							WIN ON AIR
						</h2>
						<p class="font-light text-center text-[18px]">Meet the next generation of Nike Air <span
								class="font-medium text-[18px]"> "Nike Orange Sunset"</span> . Engineered to the exact
							specifications of championship athletes.</p>
						<div class="flex gap-5">
							<RouterLink to="/shop">
								<button
									class="rounded-full mt-[20px] transition easy-in duration-150 hover:bg-opacity-80 font-semibold text-[14px] py-2 px-6 bg-black text-white">
									Experience Air
								</button>
							</RouterLink>
							<button
								class="rounded-full mt-[20px] transition easy-in duration-150 hover:bg-opacity-80 font-semibold text-[14px] py-2 px-6 bg-black text-white">
								Shop Air
							</button>
						</div>
					</div>
				</RouterLink>
			</div>
		</div>
	</section>

	<section id="explore-sport-for-women">
		<div class="flex flex-col gap-7 w-full mb-40 ">
			<h2 class="font-extrabold pl-20 text-[25px] uppercase">Explore Sport</h2>
			<div class=" w-full overflow-hidden">
				<div class="relative flex flex-col w-full h-[740px]">
					<div class=" flex absolute left-0 gap-10 z-20 top-0  w-1/2 flex-col items-center"
						@mouseenter="isHoveredForExploreFirstCard = true" @mouseleave="isHoveredForExploreFirstCard = false">
						<img src="/images/icons/Running-for-explore-sport-women.png">
						<div class="absolute flex flex-col items-center bottom-10">
							<h3 class="font-light text-white text-[25px]">Running</h3>
							<button :class="isHoveredForExploreFirstCard ? ' bg-white opacity-100' : 'opacity-30'"
								class=" rounded-full mt-[20px] transition easy-in duration-150  font-semibold text-[14px] py-2 px-6 border bg-transparent text-black">
								Shop
							</button>
						</div>
					</div>

					<div class=" flex absolute right-0 z-20 top-0 gap-10  w-1/2 h-1/1   flex-col items-center"
						@mouseenter="isHoveredForExploreSecondCard = true"
						@mouseleave="isHoveredForExploreSecondCard = false">
						<img src="/images/icons/Basketball-for-explore-sport-women.png">
						<div class="absolute flex flex-col items-center bottom-10">
							<h3 class="text-white font-light  text-[25px]">Basketball</h3>
							<button :class="isHoveredForExploreSecondCard ? ' bg-white opacity-100' : 'opacity-30'"
								class=" rounded-full  mt-[20px] transition easy-in duration-150 font-semibold text-[14px] py-2 px-6 border bg-transparent text-black">
								Shop
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>