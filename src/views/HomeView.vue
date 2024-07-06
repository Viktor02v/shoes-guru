<script setup>
import { ref } from 'vue';

import Banner from '@/components/Banner.vue';
import NewLine from '@/components/NewLine.vue';
import CardForVideo from '@/components/CardForVideo.vue';
import CardForCollectionSection from '@/components/CardForCollectionSection.vue';
import CardForExplore from '@/components/CardForExplore.vue';
import NikeCarousel from '@/components/NikeCarousel.vue';
import NikeCarouselWomen from '@/components/NikeCarouselWomen.vue';
import NikeCarouselChild from '@/components/NikeCarouselChild.vue';

import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'

let isHover = ref(false)

let categorieHover = ref(false)

</script>

<template>
	<div>
		<section id="bannerSection">
			<div>
				<RouterLink to="/events">
					<Banner />
				</RouterLink>
			</div>
		</section>

		<section id="addibleNavigation">
			<div class=" flex flex-col items-center mb-20 ">
				<img width="200" src="/images/swoosh-nike-logo.png">
				<ul class="flex font-sans items-center text-xl  gap-12">
					<RouterLink to="/events">
						<li class="font-semibold text-md cursor-pointer ">New Releases</li>
					</RouterLink>
					<RouterLink to="/community">
						<li class="font-semibold text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">Community
						</li>
					</RouterLink>
					<RouterLink to="/men">
						<li class="font-semibold text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">
							For Men
						</li>
					</RouterLink>
					<RouterLink to="/women">
						<li class="font-semibold text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">
							For Women
						</li>
					</RouterLink>
					<RouterLink to="/children">
						<li class="font-semibold text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">
							For Children
						</li>
					</RouterLink>
					<RouterLink to="/help">
						<li class="font-semibold text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">
							Help
						</li>
					</RouterLink>
				</ul>
			</div>
		</section>

		<section id="newLine">
			<div class="px-20 mb-40">
				<NewLine />
				<div class="text-center relative mt-[35px]">
					<h2 class="uppercase font-serif mb-2  text-[40px] font-semibold">New line's are avalible <span
							class="text-[42px]"><a href="">Now</a></span></h2>
					<p class="text-[25px] mb-6  font-sans">Jordan - 23</p>

					<button
						class="absolute left-[41%] top-[40%] bg-[#E6E8E8] bg-opacity-20 rounded-full p-2 hover:bg-[#CCD1D1] hover:bg-opacity-60 transition active:bg-opacity-100  hover:bg-opacity-25">
						<ChevronLeft fillColor="#303333" :size="25" />
					</button>

					<button
						class="absolute right-[41%] top-[40%] bg-[#E6E8E8] bg-opacity-20 rounded-full p-2 hover:bg-[#CCD1D1] hover:bg-opacity-60 transition active:bg-opacity-100  hover:bg-opacity-25">
						<ChevronRight fillColor="#303333" :size="25" />
					</button>

					<RouterLink to="/events">
						<button
							class="rounded-full transition easy-in duration-150 hover:bg-opacity-80 font-semibold text-[15px] py-3 px-9 bg-black text-white">
							Shop
						</button>
					</RouterLink>
				</div>
			</div>
		</section>

		<section id="videoPlay">
			<div class="w-full mt-[-70px] mb-40 px-20">
				<div class="flex flex-col gap-2 items-center relative">
					<div class="relative">
						<video width="1400" src="/videos/Video for videoSection.mp4" class=" watch rounded-md z-0" autoplay
							muted loop @mouseenter="isHover = true" @mouseleave="isHover = false">
						</video>

						<div v-if="isHover" @mouseenter="isHover = true" @mouseleave="isHover = false"
							class="absolute flex items-end gap-2 right-2 bottom-2">
							<CardForVideo imageUrl="/images/Air Jordan .png" />
							<CardForVideo imageUrl="/images/swoosh-nike-logo.png" />
						</div>
					</div>

					<h2 class="uppercase mt-[35px] font-serif text-[40px] font-semibold">For every day <span
							class="text-[45px]">&</span> for training</h2>
					<p class="font-serif text-[40px]">Choose yours</p>

					<RouterLink to="/men">
						<button
							class="rounded-full mt-[10px] transition easy-in duration-150 hover:bg-opacity-80 font-semibold text-[15px] py-3 px-9 bg-black text-white">
							Shop
						</button>
					</RouterLink>
				</div>
			</div>
		</section>

		<section id="collectionForFam">
			<div class="px-20 mb-40 ">
				<h2 class="font-extrabold mb-7 text-[25px] tracking-wide	 uppercase">Nike for the entire fam </h2>
				<div class="flex items-center gap-2 w-full">
					<CardForCollectionSection class="hover:translate-y-[-20px] transition"  :category="'Nike Men'" imageUrl="/images/icons/For-men-collection.png" />
					<CardForCollectionSection class="hover:translate-y-[-20px] transition" :category="'Nike Women'" imageUrl="/images/icons/For-women-collection.png" />
					<CardForCollectionSection class="hover:translate-y-[-20px] transition"  :category="'Nike Children'"
						imageUrl="/images/icons/For-children-collection.png" />
				</div>
			</div>
		</section>

		<section id="nikeCarousel">
			<div class="mb-40  px-20">
				<div class="flex flex-col gap-[60px]">
					<NikeCarousel :data="[
						{ imgUrl: '/images/carousel/nike-shoes-for-men-carousel.png', category: 'Jordan Mid' },
						{ imgUrl: '/images/carousel/nike-shoes-for-men-carousel.png', category: 'Jordan Easy' },
						{ imgUrl: '/images/carousel/nike-shoes-for-men-carousel.png', category: 'Jordan Low' },
						{ imgUrl: '/images/carousel/nike-shoes-for-men-carousel.png', category: 'Jordan 23' },
						{ imgUrl: '/images/carousel/nike-shoes-for-men-carousel.png', category: 'Nike Zoom' },
						{ imgUrl: '/images/carousel/nike-shoes-for-men-carousel.png', category: 'Nike Zoom-92' },
						{ imgUrl: '/images/carousel/nike-shoes-for-men-carousel.png', category: 'Nike Pegasus-1s' },
						{ imgUrl: '/images/carousel/nike-shoes-for-men-carousel.png', category: 'Nike & Jordan 1s' },
						{ imgUrl: '/images/carousel/nike-shoes-for-men-carousel.png', category: 'Jordan Retro-23' },
						{ imgUrl: '/images/carousel/nike-shoes-for-men-carousel.png', category: 'Jordan X-zero' },
						{ imgUrl: '/images/carousel/nike-shoes-for-men-carousel.png', category: 'Jordan Club23' },
						{ imgUrl: '/images/carousel/nike-shoes-for-men-carousel.png', category: 'Nike && Ambush' },
					]" />
					<NikeCarouselWomen :data="[
						{ imgUrl: '/images/carousel/nike-shoes-for-women-carousel.png', category: 'Jordan Mid' },
						{ imgUrl: '/images/carousel/nike-shoes-for-women-carousel.png', category: 'Jordan Easy' },
						{ imgUrl: '/images/carousel/nike-shoes-for-women-carousel.png', category: 'Jordan Low' },
						{ imgUrl: '/images/carousel/nike-shoes-for-women-carousel.png', category: 'Jordan 23' },
						{ imgUrl: '/images/carousel/nike-shoes-for-women-carousel.png', category: 'Nike Zoom' },
						{ imgUrl: '/images/carousel/nike-shoes-for-women-carousel.png', category: 'Nike Zoom-92' },
						{ imgUrl: '/images/carousel/nike-shoes-for-women-carousel.png', category: 'Nike Pegasus-1s' },
						{ imgUrl: '/images/carousel/nike-shoes-for-women-carousel.png', category: 'Nike & Jordan 1s' },
						{ imgUrl: '/images/carousel/nike-shoes-for-women-carousel.png', category: 'Jordan Retro-23' },
						{ imgUrl: '/images/carousel/nike-shoes-for-women-carousel.png', category: 'Jordan X-zero' },
						{ imgUrl: '/images/carousel/nike-shoes-for-women-carousel.png', category: 'Jordan Club23' },
						{ imgUrl: '/images/carousel/nike-shoes-for-women-carousel.png', category: 'Nike && Ambush' },
					]" />
					<NikeCarouselChild :data="[
						{ imgUrl: '/images/carousel/nike-shoes-for-children-carousel.png', category: 'Jordan Mid' },
						{ imgUrl: '/images/carousel/nike-shoes-for-children-carousel.png', category: 'Jordan Easy' },
						{ imgUrl: '/images/carousel/nike-shoes-for-children-carousel.png', category: 'Jordan Low' },
						{ imgUrl: '/images/carousel/nike-shoes-for-children-carousel.png', category: 'Jordan 23' },
						{ imgUrl: '/images/carousel/nike-shoes-for-children-carousel.png', category: 'Nike Zoom' },
						{ imgUrl: '/images/carousel/nike-shoes-for-children-carousel.png', category: 'Nike Zoom-92' },
						{ imgUrl: '/images/carousel/nike-shoes-for-children-carousel.png', category: 'Nike Pegasus-1s' },
						{ imgUrl: '/images/carousel/nike-shoes-for-children-carousel.png', category: 'Nike & Jordan 1s' },
						{ imgUrl: '/images/carousel/nike-shoes-for-children-carousel.png', category: 'Jordan Retro-23' },
						{ imgUrl: '/images/carousel/nike-shoes-for-children-carousel.png', category: 'Jordan X-zero' },
						{ imgUrl: '/images/carousel/nike-shoes-for-children-carousel.png', category: 'Jordan Club23' },
						{ imgUrl: '/images/carousel/nike-shoes-for-children-carousel.png', category: 'Nike && Ambush' },
					]" />
				</div>
			</div>
		</section>

		<section id="explore&&Collections">
			<div class="px-20 mb-40">
				<h2 class="uppercase mb-[30px] text-center font-serif text-[40px] font-semibold">Explore For More</h2>
				<div class="flex gap-5 w-full">
					<CardForExplore imageUrl="/images/icons/For-men-collection.png" :title="something" />
					<CardForExplore imageUrl="/images/icons/For-women-collection.png" :title="something" />
				</div>
			</div>
		</section>

		<section id="categories">
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
				<div @mouseenter="categorieHover = true" @mouseleave="categorieHover = false" :class="categorieHover ? 'translate-y-[200px] transition duration-200' : 'transition duration-200'" class="absolute z-20 bottom-20 w-[1280px]  h-[200px] bg-white">
					<div @mouseenter="categorieHover = true" @mouseleave="categorieHover = false"  class="w-full mt-10 border-b">
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
