<script setup>
import { ref } from 'vue'

let isHovered = ref(false)
let isHoveredForNews = ref(false)
</script>

<template>
	<section id="navigationForMen">
		<div class="w-[1440px]">
			<div class=" flex flex-col mt-20 mx-auto items-center mb-20" @mouseenter="isHovered = true"
				@mouseleave="isHovered = false">
				<img width="200" class="mb-10" src="/images/Air Jordan .png">
				<div
					:class="isHovered ? 'text-gray-400  transition easy-in duration-500' : ' transition easy-out duration-500 text-xl'"
					class="font-light text-xl mb-10">
					<h2>Men</h2>
				</div>
				<ul class="flex font-sans items-center text-mb  gap-12">
					<RouterLink to="/events">
						<li class="font-semibold text-md cursor-pointer ">New Releases</li>
					</RouterLink>
					<RouterLink to="/community">
						<li class="font-semibold text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">Community
						</li>
					</RouterLink>
					<RouterLink to="/nike">
						<li class="font-semibold text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">
							Nike
						</li>
					</RouterLink>
					<RouterLink to="/jordan">
						<li class="font-semibold text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">
							Jordan
						</li>
					</RouterLink>
					<RouterLink to="/help">
						<li class="font-semibold text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">
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
				<div class="flex flex-col items-center">
					<p class="font-medium text-[15px]">Nike Violent Red</p>
				</div>
			</div>
		</div>
	</section>
</template>