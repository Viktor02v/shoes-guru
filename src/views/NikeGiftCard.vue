<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import CardsCarousel from '@/components/CardsCarousel.vue';

let isHoveredList = ref(false)
</script>

<template>
	<section id="navigationForCard">
		<div class="relative">
			<div
				class="sticky top-0 px-[683px] flex center z-30 hover:bg-opacity-100 transition  bg-opacity-20 bg-gradient-to-l from-white-100 to-gray-900 bg-gray-200">
				<RouterLink to="/">
					<button class="flex items-center align-center p-2">
						<ChevronRight size="20" />
						<p class="font-light text-center">back</p>
					</button>
				</RouterLink>
			</div>

			<div class="w-full flex items-baseline px-20 mt-10 mb-20">
				<h2 class=" text-[25px] hover:text-gray-400 transition">
					Nike Gift Cards
				</h2>
				<ul class="flex font-bold text-[17px] items-center mx-auto text-mb  gap-9">
					<li class="hover:text-gray-400 transition">Mail a Gift Card</li>
					<li class="hover:text-gray-400 transition">Email A Gift Card</li>
					<li class="hover:text-gray-400 transition">Check your Balance</li>
					<li class="hover:text-gray-400 transition">Terms And Conditions</li>
				</ul>
			</div>
		</div>
	</section>

	<section id="bennerForCards">
		<div class="w-full px-20 mb-20 ">

			<div class="relative">

				<img class="" src="/images/icons/Nike-for-nikeCard-banner.png">

				<div class="flex items-center w-[360px] absolute top-[60px] left-[37px] flex-col">

					<h2 class="uppercase text-center font-black text-white text-[40px] font-serif">Warm Nights , Cool Gear
					</h2>

					<p class="text-white text-[20px] mb-5">The Nike Gift Card completes any look.</p>

					<p class="text-center text-white text-[30px]  mb-5">Balance: 0$</p>

					<div class="flex gap-3">
						<button class="rounded-full hover:bg-gray-300 transition  bg-white py-2 px-5">
							<p class="text-[15px] font-bold">Mail a Gift Card</p>
						</button>

						<button class="rounded-full hover:bg-gray-300 transition bg-white py-2 px-5">
							<p class="text-[15px]  font-bold">Email a Gift Card</p>
						</button>
					</div>
				</div>
			</div>
			<div>
				<p class="uppercase absolute right-0 top-0 font-black text-white text-[40px] font-serif">Exclusive</p>
			</div>
		</div>
	</section>

	<section id="cardsForCards">
		<div class="flex pl-20 mb-20 w-full">
			<CardsCarousel :data="[
				{ imgUrl: '/images/icons/Nike-card-for-cards.png', category: 'Nike Digital Gift Card ', description: 'Emailed in Approximately 2 Hours or Less' },
				{ imgUrl: '/images/icons/Nike-card-for-cards.png', category: 'Nike Gift Card', description: 'Mailed in a Mini Nike ShoesBox' },
				{ imgUrl: '/images/icons/Jordan-card-for-cards.png', category: 'Nike Gift Card ', description: 'Mailed in a Mini Nike ShoesBox' },
				{ imgUrl: '/images/icons/Jordan-card-for-cards.png', category: 'Nike Digital Gift Card ', description: 'Emailed in Approximately 2 Hours or Less' },
			]" />
		</div>
	</section>

	<section id="infoBlockForCards">
		<div class="w-full px-20 mb-20 ">

			<div class="w-full relative">

				<img width="1380" src="/images/icons/infoBlock-for-cards.jpeg">

				<div class="flex w-[700px] items-center absolute top-[60px] left-[37px] flex-col">

					<h2 class="uppercase  font-black text-black text-[40px] font-serif">LOOKING FOR A CORPORATE
						GIFT CARD OPTION?
					</h2>

					<p class="text-white text-[20px] mb-5">For more information on placing larger gift card orders, reach out
						to
						giftcards@nike.com via email.</p>
				</div>
			</div>
		</div>
	</section>

	<section id="dropListForCards">
		<div class="flex flex-col w-full px-20  ">
			<div :class="isHoveredList ? 'mb-20' : 'mb-0'"
				class="mx-auto relative flex aligh-top  overflow-none  gap-[90px]">
				<div @mouseenter="isHoveredList = true" @mouseleave="isHoveredList = false">
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

				<div>
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
				<div @mouseenter="isHoveredList = true" @mouseleave="isHoveredList = false"
					:class="isHoveredList ? 'translate-y-[200px] transition duration-200' : 'transition duration-200'"
					class="absolute z-20 bottom-[0px] w-full  h-[200px] bg-white">
					<div @mouseenter="isHoveredList = true" @mouseleave="isHoveredList = false"
						class="w-full mt-10 border-b">
					</div>
				</div>
			</div>
		</div>
	</section>
</template>