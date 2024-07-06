<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import ClassicCarousel from '@/components/ClassicCarousel.vue';
import CardEssentialsForMen from '@/components/CardEssentialsForMen.vue';

let isHovered = ref(false)
let isHoveredForNews = ref(false)
let isHoveredForExplore = ref(false)
let isHoveredForExploreFirstCard = ref(false)
let isHoveredForExploreSecondCard = ref(false)
let categorieHover = ref(false)

</script>

<template>

	<section id="navigationForMen">
		<div class="relative w-[1440px] h-[100%]">
			<div
				class="sticky top-0 px-[683px] flex center z-30 hover:bg-opacity-100 transition  bg-opacity-20 bg-gradient-to-l from-white-100 to-gray-900 bg-gray-200">
				<RouterLink to="/">
					<button class="flex items-center align-center p-2">
						<ChevronRight size="20" />
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
							class="absolute z-10 translate-y-[-30px] w-[1280px] bg-gradient-to-r from-gray-100 to-black-500 h-[180px] ">

						</div>
						<div
							:class="isHovered ? 'text-gray-400  translate-x-[610px] translate-y-[60px] transition easy-in duration-300' : 'translate-x-[-300px] translate-y-[-200px] transition easy-out duration-300 text-[20px]'"
							class="font-light z-20 text-[30px] mb-10">
							<h2>Men</h2>
						</div>

						<img
							:class="isHovered ? 'translate-x-[-540px] translate-y-[-30px] transition duration-300' : 'translate-x-[300px] translate-y-[-200px] transition duration-300'"
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

	<section id="news">
		<div class=" mb-40">
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
						<p class="font-light text-center text-[18px]">Run with the violence burning in your hearth towards the
							goal.
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

	<section id="explore-sport">
		<div class="flex flex-col gap-7 px-20 mb-40 ">
			<h2 class="font-extrabold text-[25px] uppercase">Explore Sport</h2>
			<div class=" w-full overflow-hidden">
				<div class="relative flex flex-col w-[1280px] h-[740px]">
					<div class=" flex absolute left-0 gap-10 z-20 top-0  w-1/2 flex-col items-center"
						@mouseenter="isHoveredForExploreFirstCard = true" @mouseleave="isHoveredForExploreFirstCard = false">
						<img src="/images/icons/Basketball-for-explore-sport.png">
						<button :class="isHoveredForExploreFirstCard ? ' bg-white opacity-100' : 'opacity-30'"
							class="absolute  bottom-10 rounded-full mt-[20px] transition easy-in duration-150  font-semibold text-[14px] py-2 px-6 border bg-transparent text-black">
							Shop
						</button>
					</div>

					<div class=" flex absolute right-0 z-20 top-0 gap-10  w-1/2 h-1/1   flex-col items-center"
						@mouseenter="isHoveredForExploreSecondCard = true"
						@mouseleave="isHoveredForExploreSecondCard = false">
						<img src="/images/icons/Soccer-for-explore-sport.png">
						<button :class="isHoveredForExploreSecondCard ? ' bg-white opacity-100' : 'opacity-30'"
							class="absolute bottom-10 rounded-full  mt-[20px] transition easy-in duration-150 font-semibold text-[14px] py-2 px-6 border bg-transparent text-black">
							Shop
						</button>
					</div>

					<div
						class="relative bg-opacity-20 hover:bg-opacity-100 transition bg-gradient-to-r from-red-900 to-blue-900 z-10 w-full mt-[638px] h-[100px]">
						<div :class="isHoveredForExplore ? 'translate-x-[5px]' : ''"
							class="flex flex-col overflow-hidden  transition font-serif text-[20px] w-full text-white mt-[36px] items-center"
							@mouseenter="isHoveredForExplore = true" @mouseleave="isHoveredForExplore = false">
							<div class="flex items-center">
								<h3>Explore for more</h3>
								<ChevronRight :class="isHoveredForExplore ? 'translate-x-[5px]' : ''" />
								<RouterLink to="/collections">
									<div :class="isHoveredForExplore ? 'translate-x-[5px] text-white' : 'text-[#CCD1D1]'"
										href="">Go</div>
								</RouterLink>
							</div>
							<div
								:class="isHoveredForExplore ? 'transition bg-gradient-to-l from-red-500 to-blue-500 translate-x-[94px] opacity-100 easy-in duration-500' : 'opacity-0 bg-white'"
								class="w-[30px] translate-x-[-100px] h-[2px] rounded-full bg-white">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="classic-carousel-1">
		<div class="mb-40">
			<ClassicCarousel :data="[
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'DUNK' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'BLAZER' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'AIR MAX' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'Jordan 23' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'AIR JORDAN 1' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'Nike Zoom-92' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'Nike Zoom' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'AIR FORCE 1' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'DUNK' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'BLAZER' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'AIR MAX' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'JORDAN 23' },
			]" />
		</div>
	</section>

	<section id="essentials-for-men">
		<div class="px-20 mb-40 ">
			<h2 class="font-extrabold mb-7 text-[25px] tracking-wide	 uppercase">Essentials For Men </h2>
			<div class="flex items-center gap-3 w-full">
				<CardEssentialsForMen class="hover:translate-y-[-20px] transition" :category="'Clothing'"
					imageUrl="/images/icons/Clothing-for-men.png" />
				<CardEssentialsForMen class="hover:translate-y-[-20px] transition" :category="'Shoes'"
					imageUrl="/images/icons/Shoes-for-men.png" />
				<CardEssentialsForMen class="hover:translate-y-[-20px] transition" :category="'Accessories'"
					imageUrl="/images/icons/Accessories-for-men.png" />
			</div>
		</div>
	</section>

	<section class="classic-carousel-2">
		<div class="mb-40">
			<ClassicCarousel :data="[
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'DUNK' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'BLAZER' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'AIR MAX' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'Jordan 23' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'AIR JORDAN 1' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'Nike Zoom-92' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'Nike Zoom' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'AIR FORCE 1' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'DUNK' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'BLAZER' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'AIR MAX' },
				{ imgUrl: '/images/icons/Shoes-for-men.png', category: 'JORDAN 23' },
			]" />
		</div>
	</section>

	<section id="dropListForMen">
		<div class="flex flex-col w-full px-20 mb-20 ">
			<div @mouseenter="categorieHover = true" @mouseleave="categorieHover = false"
				class="mx-auto relative flex aligh-top  overflow-none  gap-[90px]">
				<div class="">
					<h3 class="font-extrabold mb-8 text-[20px] tracking-wide	 uppercase">Jordan Shoes</h3>
					<ul class="flex flex-col  items-center">
						<RouterLink to="Collections">
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Air Jordan - "Italian Stallion"</li>
							<li class="text-[16px] mb-4  font-semibold text-gray-400">Air Jordan - "Gotta Be the Shoes"</li>
							<li class="text-[16px] mb-4  font-semibold text-gray-400">Air Jordan VIII - "Strap In"</li>
							<li class="text-[16px] mb-4  font-semibold text-gray-400">Air Jordan IX - "Perfect Harmony"</li>
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Air Jordan X - "The Legacy Continues"
							</li>
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Air Jordan X - "The Legacy Continues"
							</li>
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Air Jordan X - "The Legacy Continues"
							</li>
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Air Jordan X - "The Legacy Continues"
							</li>
						</RouterLink>
					</ul>
				</div>

				<div class="">
					<h3 class="font-extrabold mb-8 text-[20px] tracking-wide	 uppercase">Nike Shoes</h3>
					<ul class="flex flex-col items-center">
						<RouterLink to="Collections">
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Nike Cortez Textile</li>
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Nike AirForce 1'07</li>
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Nike G.T Cut Cross</li>
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Nike Wearallday</li>
						</RouterLink>
					</ul>
				</div>

				<div class="">
					<h3 class="font-extrabold mb-8 text-[20px] tracking-wide	 uppercase">Callab Jordan <span
							class="text-[25px]"> && </span>Nike Shoes</h3>
					<ul class="flex flex-col items-center">
						<RouterLink to="Collections">
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Nike Dunk Low Retro</li>
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Nike Dunk Low Retro</li>
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Nike Dunk Low Retro</li>
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Nike Dunk Low Retro</li>
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Air Jordan 1 Mid</li>
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Air Jordan 1 Low "White Toe"</li>
							<li class="text-[16px] mb-4 font-semibold text-gray-400">Air Jordan 6 Retro "Cool Grey"</li>
							<li class="text-[16px] font-semibold text-gray-400">Air Jordan 2 Retro OG "Chicago"
							</li>
						</RouterLink>
					</ul>
				</div>
			</div>
			<div @mouseenter="categorieHover = true" @mouseleave="categorieHover = false"
				:class="categorieHover ? 'translate-y-[200px] transition duration-200' : 'transition duration-200'"
				class="absolute z-20 bottom-20 w-[1280px]  h-[200px] bg-white">
				<div @mouseenter="categorieHover = true" @mouseleave="categorieHover = false" class="w-full mt-10 border-b">
				</div>
			</div>
		</div>
	</section>
</template>