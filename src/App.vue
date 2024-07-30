<script setup>
import { ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router'
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import Bell from 'vue-material-design-icons/Bell.vue';
import Magnify from 'vue-material-design-icons/Magnify.vue';
import Cart from 'vue-material-design-icons/Cart.vue'
import Earth from 'vue-material-design-icons/Earth.vue'


let toggleProfile = ref(false);
let toggleStatus = ref(false);
let isHover = ref(false);


var lastScrollTop = 0;
let scrolling = ref(false);

window.addEventListener("scroll", function () {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		scrolling.value = true;
	}
	else {
		scrolling.value = false;
	}
	lastScrollTop = scrollTop;

})

</script>

<template>
	<div class="flex flex-col h-screen  ">
		<nav
			:class="scrolling ? '-translate-y-[74px] transition  duration-600' : 'transition  duration-600'"
			id="TopNav" @mouseenter="isHover = true" @mouseleave="isHover = false">
			<div class="relative z-40 flex items-center justify-between w-[100%] h-[74px]">
				<div :class="isHover ? 'bg-[#F1F1F1]  transition easy-in' : 'bg-[#F4F6F6] transition easy-out'"
					class="fixed bg-[#F4F6F6] flex items-center  w-[100%] h-[74px] justify-between px-20">
					<div class="flex items-center ">
						<RouterLink to="/">
							<img width="80" src="/images/Air Jordan .png">
						</RouterLink>

						<div class="w-full ml-3">
							<h1 class="font-semibold text-xl">Shoes Guru</h1>
							<p class="font-light text-gray-500 text-sm ">Become a guru in the world of shoes</p>
						</div>
					</div>

					<div class="flex items-center">
						<ul class="flex items-center  gap-12">
							<RouterLink to="/man">
								<li class=" text-md cursor-pointer ">For men</li>
							</RouterLink>
							<RouterLink to="/woman">
								<li class=" text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">For women
								</li>
							</RouterLink>
							<RouterLink to="/children">
								<li class="text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">For
									children
								</li>
							</RouterLink>
						</ul>
					</div>

					<div class="flex items-center  hover:bg-[#CCD1D1] transition hover:bg-opacity-15  border rounded-full ">
						<Magnify
							class=" rounded-full bg-[#CCD1D1]  hover:bg-opacity-60 bg-opacity-10 transition hover:bg-[#CCD1D1] p-2" />
						<input type="text" placeholder="Search..."
							class="p-1 bg-transparent outline-none  font-[300] placeholder-[#BEBEC7] text-black  max-w-[200px]">
					</div>

					<div class="flex items-center gap-1">
						<RouterLink to="/favorites">
							<div
								class="rounded-full p-2 hover:bg-[#CCD1D1] transition active:bg-opacity-100  hover:bg-opacity-25">
								<HeartOutline :size="25" />
							</div>
						</RouterLink>
						<RouterLink to="/community">
							<div
								class=" rounded-full p-1 hover:bg-[#CCD1D1] p-2 transition easy-in active:bg-opacity-100 hover:bg-opacity-25">
								<Bell :size="25" />
							</div>
						</RouterLink>

						<button @click="toggleProfile = !toggleProfile"
							:class="toggleProfile ? 'bg-black' : 'bg-white' && !toggleStatus ? 'bg-white' : 'bg-black'"
							class="rounded-full flex w-[100px] bg-[#CCD1D1]  active:bg-opacity-90  hover:bg-[#CCD1D1] transition  hover:bg-opacity-50 items-center gap-1 p-2">
							<img width="25" class="rounded-full border "
								src="https://yt3.ggpht.com/yti/ANjgQV-BsgP7VzRhrVOhoR9oluzj_l7hWizBLiYQpd6u703zSuU=s108-c-k-c0x00ffffff-no-rj"
								alt="">
							<RouterLink to="/profile">
								<button class=" absolute top-[30px] font-semibold text-[10px]">
									<div class="pl-1">
										<div v-if="!toggleProfile && !toggleStatus">
											SINGED
										</div>
										<div class="text-white" v-if="!toggleProfile && toggleStatus">
											LOGED
										</div>
										<div class="text-[#EC7063]" v-if="toggleStatus && toggleProfile">
											LOGED
										</div>
										<div v-else-if="toggleProfile" class="text-[#58D68D]">
											SINGED
										</div>
									</div>
								</button>
							</RouterLink>
						</button>

						<span class="absolute z-30 text-center border w-[100px] py-3 px-4 right-[135px] bg-white top-[65px]"
							v-if="toggleProfile">
							<ul class="text-[14px] text-gray font-seminold">
								<RouterLink to="/profile">
									<li class="pb-1 border-b border-b-black">Profile</li>
								</RouterLink>
								<li v-if="toggleStatus" @click="toggleStatus = !toggleStatus" class="mt-1 cursor-pointer">Sing
									In
								</li>
								<li v-else @click="toggleStatus = !toggleStatus" class="mt-1 cursor-pointer">Log out</li>
							</ul>
						</span>

						<RouterLink to="/cart">
							<div
								class="ml-3 rounded-full p-1 hover:bg-[#CCD1D1] p-2 transition easy-in active:bg-opacity-100 hover:bg-opacity-25">
								<Cart />
							</div>
						</RouterLink>
					</div>
				</div>
			</div>
		</nav>

		<main>
			<div class="relative flex flex-col ">
				<RouterView />
			</div>
		</main>

		<footer>
			<div class="absolute z-30 px-20  w-full">
				<div class="flex items-baseline mb-20 justify-between">
					<div class="flex align-baseline gap-[130px]">
						<div class="flex flex-col items-start">
							<h3 class="font-medium text-[15px] mb-8">Resources</h3>
							<ul class="text-[14px] font-medium text-gray-500  gap-3 flex flex-col">
								<RouterLink to="/gift-card">
									<li>Gift Cards</li>
								</RouterLink>
								<RouterLink to="/find-a-store">
								<li>Find a Store</li>
								</RouterLink>
								<RouterLink to="/membership">
									<li>Become a Member</li>
								</RouterLink>
								<RouterLink to="/nike-nba">
									<li>NIKE x NBA</li>
								</RouterLink>
								<li>Nike Journal</li>
								<li>Site Feedback</li>
							</ul>
						</div>
						<div class="flex flex-col items-start">
							<h3 class="font-medium text-[15px] mb-8">Help</h3>
							<ul class="text-[14px] gap-3 font-medium text-gray-500 flex flex-col">
								<li>Get Help</li>
								<li>Order tatus</li>
								<li>Shipping and Delivery</li>
								<li>Returns</li>
								<li>Order Cancellation</li>
								<li>Payment Options</li>
								<li>Gift Card Balance</li>
								<li>Contact Us</li>
							</ul>
						</div>
						<div class="flex flex-col items-start">
							<h3 class="font-medium text-[15px] mb-8">Company</h3>
							<ul class="text-[14px] gap-3 font-medium text-gray-500 flex flex-col">
								<li>About Us</li>
								<li>News</li>
								<li>Careers</li>
								<li>Investors</li>
								<li>Purpose</li>
								<li>Sustainabillity</li>
							</ul>
						</div>
						<div class="flex flex-col items-start">
							<h3 class="font-medium text-[15px] mb-8">Promotions & Discount</h3>
							<ul class="text-[14px] gap-3 font-medium text-gray-500 flex flex-col">
								<li>Student</li>
								<li>Military</li>
								<li>Teacher</li>
								<li>First Responders & Medical Professionals</li>
								<li>Birthay</li>
							</ul>
						</div>
					</div>
					<div class="flex gap-2  items-center">
						<Earth class="cursor-pointer" fillColor="#ABB2B9" size="20" />
						<button type="button">
							<p class="text-[14px]  font-medium text-gray-500">English</p>
						</button>
					</div>
				</div>

				<div class="flex items-center mb-20">
					<ul class=" flex items-center gap-7 text-[14px] font-medium text-gray-500">
						<li class="hover:text-black">© 2024 Nike, Inc. All Rights Reserved</li>
						<RouterLink to="/guides">
							<li class="hover:text-black">Guides</li>
						</RouterLink>
						<RouterLink to="/sale-terms">
							<li class="hover:text-black">Terms of Sale</li>
						</RouterLink>
						<RouterLink to="/use-terms">
							<li class="hover:text-black">Terms of Use</li>
						</RouterLink>
						<RouterLink to="/privacy-policy">
							<li class="hover:text-black">Nike Privacy Policy</li>
						</RouterLink>
						<RouterLink to="/privacy-choices">
							<li class="hover:text-black">Your Privacy Choices</li>
						</RouterLink>
						<RouterLink to="/ca">
							<li class="hover:text-black">CA Supply Chains Act</li>
						</RouterLink>
					</ul>
				</div>
			</div>
		</footer>
	</div>
</template>