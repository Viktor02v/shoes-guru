<script setup>
import { ref } from 'vue';

import Banner from '@/components/Banner.vue';
import NewLine from '@/components/NewLine.vue';
import CardForVideo from '@/components/CardForVideo.vue';

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

		<section id="videoPlay">
			<div class="w-full mt-[-70px] mb-20 px-20">
				<div class="flex flex-col gap-2 items-center relative">
					<div v-auto-animate class="relative" >
						<video width="1200" src="/public/videos/Video for videoSection.mp4" class=" watch rounded-md z-0"
							autoplay muted loop @mouseenter="isHover = true" @mouseleave="isHover = false">
						</video>

						<div  v-if="isHover" class="absolute flex items-end gap-2 right-2 bottom-2" v-animate>
							<CardForVideo imageUrl="/public/images/Air Jordan .png" />
							<CardForVideo imageUrl="/public/images/swoosh-nike-logo.png" />
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
	</div>
</template>
