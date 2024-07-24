<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import BenefitsCarouselForMembership from '@/components/BenefitsCarouselForMembership.vue';
import PrevilegesCarouselForMembership from '@/components/PrevilegesCarouselForMembership.vue';

let clickToRead1 = ref(false)
let clickToRead2 = ref(false)
let clickToRead3 = ref(false)
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
		<div class="flex flex-col pl-20 mb-40 w-full">
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
		<div class="flex flex-col pl-20 mb-[300px] w-full">
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

	<section id="miniBannerForMembership">
		<div class="w-[1440px] overflow-hidden gap-[270px] text-white flex items-center bg-[#F90000] h-[30px] mb-60">
			<div class="flex ml-[-140px] items-center">
				<img width="70px" src="/public/images/swoosh-nike-logo.png">
				<p class="font-serif text-[20px]">Membership</p>
			</div>
			<div class="flex items-center">
				<img width="70px" src="/public/images/swoosh-nike-logo.png">
				<p class="font-serif text-[20px]">Membership</p>
			</div>
			<div class="flex items-center">
				<img width="70px" src="/public/images/swoosh-nike-logo.png">
				<p class="font-serif text-[20px]">Membership</p>
			</div>
			<div class="flex items-center">
				<img width="70px" src="/public/images/swoosh-nike-logo.png">
				<p class="font-serif text-[20px]">Membership</p>
			</div>
			<div class="flex items-center">
				<img width="70px" src="/public/images/swoosh-nike-logo.png">
				<p class="font-serif text-[20px]">Membership</p>
			</div>
		</div>
	</section>

	<section id="connectForMembership">
		<div class="w-full flex flex-col mb-60 px-20">
			<h2 class="font-normal text-[25px] hover:text-gray-600 transition duration-200 ">Connect Through Membership
			</h2>

			<div class="w-full flex items-center px-10 justify-between mt-40">
				<RouterLink to="/community">
					<div class="flex w-[200px] text-center flex-col items-center">
						<div class="p-1 mb-10  bg-white shadow shadow-xl rounded-md">
							<img width="60" src="/public/images/swoosh-nike-logo.png">
						</div>
						<h3 class="text-[20px] mb-3">
							Nike App
						</h3>
						<p class="mb-6">
							Keep up daily with the best of Nike, personalized for you.
						</p>
						<p class="text-[17px] underline">Explore</p>
					</div>
				</RouterLink>

				<RouterLink to="/community">
					<div class="flex w-[200px] text-center flex-col items-center">
						<div class="p-1 mb-10  bg-white shadow shadow-xl rounded-md">
							<img width="60" src="/public/images/swoosh-nike-logo.png">
						</div>
						<h3 class="text-[20px] mb-3">
							Nike Run Club
						</h3>
						<p class="mb-6">
							Run with us in the Nike Run Club App.
						</p>
						<p class="text-[17px] underline">Explore</p>
					</div>
				</RouterLink>

				<RouterLink to="/community">
					<div class="flex w-[200px] text-center flex-col items-center">
						<div class="p-1 mb-10  bg-white shadow shadow-xl rounded-md">
							<img width="60" src="/public/images/swoosh-nike-logo.png">
						</div>
						<h3 class="text-[20px] mb-3">
							Nike Training Club
						</h3>
						<p class="mb-6">
							Move with the best in the Nike Training Club App.
						</p>
						<p class="text-[17px] underline">Explore</p>
					</div>
				</RouterLink>

				<RouterLink to="/community">
					<div class="flex w-[200px] text-center flex-col items-center">
						<div class="p-1 mb-10  bg-white shadow shadow-xl rounded-md">
							<img width="60" src="/public/images/swoosh-nike-logo.png">
						</div>
						<h3 class="text-[20px] mb-3">
							SNKRS
						</h3>
						<p class="mb-6">
							Find the freshest drops in the SNKRS App.
						</p>
						<p class="text-[17px] underline">Explore</p>
					</div>
				</RouterLink>
			</div>
		</div>
	</section>

	<section id="questionsForMembership">
		<div class="w-[1440px] px-20">
			<h2 class="font-normal text-[25px] hover:text-gray-600 transition duration-200 mb-20">Frequently Asked
				Questions
			</h2>
			<div class="w-full flex-col">
				<div class="flex relative justify-between transition duration-200 mb-10"
					:class="clickToRead1 ? 'mb-[150px] transition duration-200' : 'mb-10 transition duration-200'"
					@click="clickToRead1 = !clickToRead1">
					<div class="flex cursor-pointer flex-col text-[20px]">
						What is Nike Membership?
						<p class="text-[20px] mt-8">
							Nike Membership is access to the very best of Nike through any of our apps, exclusive products, and
							Member-only experiences. Nike Members also enjoy free shipping on orders of $50 or more, 60-day
							Wear Test, and receipt-less returns. It is free and easy to join.<RouterLink to="/profile"> <span class="underline font-medium"> Sign Up</span></RouterLink>.
						</p>
					</div>
					<ChevronDown size="30" class="cursor-pointer"
						:class="clickToRead1 ? 'rotate-180 transition duration-200' : 'transition duration-200'" />
					<div class="absolute top-[40px] w-full overflow-hidden bg-white h-[100px]  "
						:class="clickToRead1 ? 'translate-y-[100px] transition duration-400' : 'transition duration-400'">
						<div class="w-full mt-[70px] border-gray-300 border-b">
						</div>
					</div>
				</div>

				<div class="flex relative justify-between transition duration-200 mb-10"
					:class="clickToRead2 ? 'mb-[150px] transition duration-200' : 'mb-10 transition duration-200'"
					@click="clickToRead2 = !clickToRead2">
					<div class="flex cursor-pointer flex-col text-[20px]">
						Am I a Nike Member?
						<p class="text-[20px] mt-8">
							Maybe! If you have ever logged into a Nike app, then yes, yes you are. Welcome back! If not, let us change that.<RouterLink to="/profile"> <span class="underline font-medium"> Sign Up</span></RouterLink>.
						</p>
					</div>
					<ChevronDown size="30" class="cursor-pointer"
						:class="clickToRead2 ? 'rotate-180 transition duration-200' : 'transition duration-200'" />
					<div class="absolute top-[40px] w-full overflow-hidden bg-white h-[100px]  "
						:class="clickToRead2 ? 'translate-y-[100px] transition duration-400' : 'transition duration-400'">
						<div class="w-full mt-[70px] border-gray-300 border-b">
						</div>
					</div>
				</div>

				<div class="flex relative justify-between transition duration-200 mb-20"
					:class="clickToRead3 ? 'mb-[150px] transition duration-200' : ' transition duration-200'"
					@click="clickToRead3 = !clickToRead3">
					<div class="flex cursor-pointer flex-col text-[20px]">
						Is Nike Membership free?
						<p class="text-[20px] mt-8">
							100% yes. Members enjoy all the benefits of Nike Membership at no cost, because once you are in, we got you. Zero money gets you access to all of it.<RouterLink to="/profile"> <span class="underline font-medium"> Sign Up</span></RouterLink>.
						</p>
					</div>
					<ChevronDown size="30" class="cursor-pointer"
						:class="clickToRead3 ? 'rotate-180 transition duration-200' : 'transition duration-200'" />
					<div class="absolute top-[40px] w-full overflow-hidden bg-white h-[100px]  "
						:class="clickToRead3 ? 'translate-y-[100px] transition duration-400' : 'transition duration-400'">
						<div class="w-full mt-[70px] border-gray-300 border-b">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="membershipBannerForMembership">
		<div class="w-[1440px] mb-40">
			<div class="flex items-center justify-center h-[400px] border-b border-gray-300 w-[1440px]">
				<img width="90" src="/public/images/swoosh-nike-logo.png" alt="">
				<h3 class="font-serif  text-[30px]">Membership</h3>
			</div>
		</div>
	</section>
</template>