<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import BenefitsCarouselForMembership from '@/components/BenefitsCarouselForMembership.vue';
import PrevilegesCarouselForMembership from '@/components/PrevilegesCarouselForMembership.vue';
</script>

<template>
	<section id="navigationForMembership">
		<div
			class="sticky top-0 px-[683px] flex center z-30 hover:bg-opacity-100 transition  bg-opacity-20 bg-gradient-to-l from-white-100 to-gray-900 bg-gray-200">
			<RouterLink to="/">
				<button class="flex items-center align-center p-2">
					<ChevronLeft size="20" />
					<p class="font-light w-full text-center">back</p>
				</button>
			</RouterLink>
		</div>

		<div class="w-[1440px] px-20">
			<div class="flex mt-20 pr-[100px] w-full mx-auto items-center pb-20 ">

				<div class="w-[240px]">
					<h2 class="font-normal text-[25px] hover:text-gray-600 transition duration-200 ">Nike Membership</h2>
				</div>

				<div class="flex w-full pr-20 justify-center">
					<ul class="flex font-sans z-20 items-center text-[17px]  gap-9">
						<RouterLink to="/profile">
							<li class="font-light hover:text-gray-500 transition duration-200  cursor-pointer ">
								Sing Up</li>
						</RouterLink>
						<RouterLink to="/shop">
							<li
								class="font-light hover:text-gray-500 transition duration-200  border-l border-l-[#32323D] pl-[35px] cursor-pointer ">
								Member Product
							</li>
						</RouterLink>
						<RouterLink to="/nike-men">
							<li
								class="font-light hover:text-gray-500 transition duration-200    border-l border-l-[#32323D] pl-[35px] cursor-pointer ">
								Explore The Nike
							</li>
						</RouterLink>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section id="newsForMembership">
		<div class="w-[1440px] mb-40">
			<div
				class="bg-[url('/images/icons/Banner-for-membership.png')] bg-local bg-center w-full  h-[600px]  items-center flex">
				<div class="flex flex-col mx-auto text-white items-center">

					<h2 class="font-serif font-black mb-3 text-center shadow shadow-xl w-[600px] uppercase text-[70px]">
						It's Better As a Member
					</h2>

					<p class="font-light mb-5">
						Move, Shop, Custumize and Celebrate as with the best of Nike.
					</p>

					<RouterLink to="/shop">
						<button type="button" class="px-4 bg-white font-medium text-black rounded-full py-2">
							<p>Sing Up</p>
						</button>
					</RouterLink>
				</div>
			</div>
		</div>
	</section>

	<section id="benefitsCarouselForMembership">
		<div class="flex flex-col pl-20 mb-20 w-full">
			<h2 class="font-normal text-[25px] hover:text-gray-600 transition duration-200 ">Member Benefits</h2>
			<BenefitsCarouselForMembership :data="[
				{ imgUrl: '/images/icons/Member-product-for-membership.png', category: 'Member Product ', description: 'Your Exclusive Access', buttonText: 'Shop', buttonUrl: '/shop' },
				{ imgUrl: '/images/icons/How-we-say-thank-you-for-membership.png', category: 'Member Revard', description: 'How We Say Thank You', buttonText: 'Celebrate', buttonUrl: '/community' },
				{ imgUrl: '/images/icons/Movement-for-membership.png', category: 'Sport And Wellness Apps', description: 'Movement Where You Are At', buttonText: 'Move', buttonUrl: '/shop' },
				{ imgUrl: '/images/icons/Customization-for-membership.png', category: 'Nike By You', description: 'Your Customization Service', buttonText: 'Customize', buttonUrl: '/gift-card' },
				{ imgUrl: '/images/icons/How-we-say-thank-you-for-membership.png', category: 'SNKRS', description: 'Your Ultimate Sneaker Community', buttonText: 'Explore', buttonUrl: '/shop' },
			]" />
		</div>
	</section>

	<section id="previlegesCarouselForMembership">
		<div class="flex flex-col pl-20 mb-20 w-full">
			<h2 class="font-normal text-[25px] hover:text-gray-600 transition duration-200 ">Members Also Get</h2>
			<PrevilegesCarouselForMembership :data="[
				{ imgUrl: '/images/icons/Member-product-for-membership.png', category: 'Free Shipping', description: 'Members score free delivery on every $50+ order.' },
				{ imgUrl: '/images/icons/How-we-say-thank-you-for-membership.png', category: 'Wear Test', description: 'Not sure? Try it for 60 days—return if it is not a fit.' },
				{ imgUrl: '/images/icons/Movement-for-membership.png', category: 'Receiptless Returns', description: 'Return or exchange receipt-free in-store or in the Nike App.' },
				{ imgUrl: '/images/icons/Customization-for-membership.png', category: 'Member Experiences', description: 'Join your community for live, Member-only events.' },
				{ imgUrl: '/images/icons/How-we-say-thank-you-for-membership.png', category: 'Nike Experts', description: 'Members can get sport and style advice from experts.' },
			]" />
		</div>
	</section>
</template>