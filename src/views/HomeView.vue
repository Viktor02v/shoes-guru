<script setup>
import { ref } from 'vue';

import Banner from '@/components/Banner.vue';
import NewLine from '@/components/NewLine.vue';
import CardForVideo from '@/components/CardForVideo.vue';
import CardForCollectionSection from '@/components/CardForCollectionSection.vue';
import NikeCarousel from '@/components/NikeCarousel.vue';

import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'

let isHover = ref(false)

</script>

<template>
	<div>

		<section id="BannerSection">
			<div>
				<RouterLink to="/events">
					<Banner />
				</RouterLink>
			</div>
		</section>

		<section id="AddibleNavigation">
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
					<RouterLink to="/profile">
						<li class="font-semibold text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">
							Help
						</li>
					</RouterLink>
				</ul>
			</div>
		</section>

		<section id="NewLine">
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

		<section id="VideoPlay">
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

		<section id="CollectionForFam">
			<div class="px-20 mb-40 ">
				<h3 class="font-extrabold mb-7 text-[25px] tracking-wide	 uppercase">Nike for the entire fam </h3>
				<div class="flex items-center gap-2 w-full">
					<CardForCollectionSection :category="'Nike Men'" imageUrl="/images/icons/For-men-collection.png" />
					<CardForCollectionSection :category="'Nike Women'" imageUrl="/images/icons/For-women-collection.png" />
					<CardForCollectionSection :category="'Nike Children'"
						imageUrl="/images/icons/For-children-collection.png" />
				</div>
			</div>
		</section>

		<section id="NikeCarousel">
			<div class="mb-40 px-20">
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
			</div>
		</section>
	</div>
</template>
