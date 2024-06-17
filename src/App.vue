<script setup>
import { ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router'
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import Bell from 'vue-material-design-icons/Bell.vue';
import Magnify from 'vue-material-design-icons/Magnify.vue';


let toggleProfile = ref(false);
let toggleStatus = ref(false);

</script>

<template>
	<div id="TopNav" class="relative   flex items-center justify-between w-[100%] h-[74px]  px-30">
		<div class="fixed  bg-[#F8F9F9] flex items-center justify-between w-[100%] h-[74px]  ">
			<div class="flex ml-10 items-center ">
				<RouterLink to="/">
					<img width="170"  src="/images/orcaShoes logo.png">
				</RouterLink>

				<div class="w-full">
					<h1 class="font-semibold text-xl">Orca Shoes</h1>
					<p class="font-light text-gray-500 text-sm ">Shoesland</p>
				</div>
			</div>

			<div class="flex items-center   ">
				<ul class="flex items-center w-full gap-12">
					<RouterLink to="/man">
						<li class="font-semibold text-md cursor-pointer ">FOR MEN</li>
					</RouterLink>
					<RouterLink to="/woman">
						<li class="font-semibold text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">FOR WOMEN</li>
					</RouterLink>
					<RouterLink to="/children">
						<li class="font-semibold text-md border-l border-l-[#32323D] pl-[35px] cursor-pointer ">FOR CHILDREN
						</li>
					</RouterLink>
				</ul>
			</div>

			<div class="flex items-center  hover:bg-[#CCD1D1] transition hover:bg-opacity-15  border rounded-full ">
				<Magnify class=" rounded-full bg-[#CCD1D1]  hover:bg-opacity-60 bg-opacity-10 transition hover:bg-[#CCD1D1] p-2" />
				<input type="text" placeholder="Search..."
					class="p-1 bg-transparent outline-none  font-[300] placeholder-[#BEBEC7] text-black  max-w-[200px]">
			</div>

			<div class="flex items-center mr-10 gap-5">
				<div class="rounded-full p-2 hover:bg-[#CCD1D1] transition active:bg-opacity-100  hover:bg-opacity-25">
					<HeartOutline :size="25" />
				</div>
				<div
					class=" rounded-full p-1 hover:bg-[#CCD1D1] p-2 transition easy-in active:bg-opacity-100 hover:bg-opacity-25">
					<Bell :size="25" />
				</div>

				<button @click="toggleProfile = !toggleProfile"  :class="toggleProfile ? 'bg-black' : 'bg-white' && !toggleStatus ? 'bg-white' : 'bg-black'"
					class="rounded-full flex w-[100px] bg-[#CCD1D1]  active:bg-opacity-90  hover:bg-[#CCD1D1] transition  hover:bg-opacity-50 items-center gap-1 p-2 bg">
					<img width="25" class="rounded-full border "
						src="https://yt3.ggpht.com/yti/ANjgQV-BsgP7VzRhrVOhoR9oluzj_l7hWizBLiYQpd6u703zSuU=s88-c-k-c0x00ffffff-no-rj"
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

				<span class="absolute z-10 text-center border w-[100px] py-3 px-4 right-10 bg-white top-[60px]"
					v-if="toggleProfile">
					<ul class="text-[14px] text-gray font-seminold">
						<RouterLink to="/profile">
							<li class="pb-1 border-b border-b-black">Profile</li>
						</RouterLink>
						<li v-if="toggleStatus" @click="toggleStatus = !toggleStatus" class="mt-1 cursor-pointer">Sing In</li>
						<li v-else @click="toggleStatus = !toggleStatus" class="mt-1 cursor-pointer">Log out</li>
					</ul>
				</span>

			</div>
		</div>
	</div>

	<div class="relative flex justify-between w-[100%] px-20 ">
		<RouterView />
	</div>
</template>-