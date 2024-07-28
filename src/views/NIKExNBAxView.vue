<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import Play from 'vue-material-design-icons/Play.vue';
</script>

<template>
	<section id="navigationForNIKExNBA">
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
					<h2 class="font-normal text-[25px] hover:text-gray-600 transition duration-200 ">NIke X NBA</h2>
				</div>

				<div class="flex w-full pr-20 justify-center">
					<ul class="flex font-sans z-20 items-center text-[16px]  gap-9">
						<RouterLink to="/profile">
							<li class="font-medium hover:text-gray-500 transition duration-200  cursor-pointer ">
								Become a Nike x NBA ID Member</li>
						</RouterLink>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section id="watch&BecomeAMemberForNIKExNBA">
		<div class="px-20 w-[1440px] mb-40">
			<div
				class="bg-[url('/images/icons/Become-a-member-for-NIkeXNBA.png')] bg-local mb-20 bg-center w-full relative  h-[600px] ">
				<div class="flex flex-col mx-auto text-white items-center">
					<RouterLink to="/videos">
						<button type="button"
							class="px-4 absolute left-10 bottom-10 bg-white font-medium text-black rounded-full py-2">
							<div class="flex items-center gap-1">
								<p>Watch</p>
								<Play />
							</div>
						</button>
					</RouterLink>
				</div>
			</div>

			<div class=" ml-40 flex gap-20 flex-col">
				<div class="flex flex-col  gap-4 w-[700px]">
					<p class="font-medium text-[17px]">
						Air Time
					</p>

					<h3 class="font-normal text-[30px]">
						Whatch NBA Games the Nike Way
					</h3>

					<p class="font-light">
						We have partnered with the NBA to launch Air Time : live streamed NBA games taking fandom beyond the
						court and into the backetball culture.
					</p>

					<p class="font-light">
						Air Time returned on March 7th as we celebrated Devin Booker's first signature shoe, the Book 1. We
						Watched the Phoenix Suns take down the TorontoPaptors with our hosts, Alexis Morgan, Kenny Beecham,
						and Jamiersen Green live from Nike's NYHQ and tapped in with Coach John Calipari, Shawn Marion, and
						Book 1 Designer, Benjamin Lee. We talked all things Book and capped it off with a limited Book 1
						'Mirage V0-2' restock where tuned-in Nike x NBA ID Members had a head start on the drop.
					</p>
				</div>

				<div class="flex flex-col items-start  gap-4 w-[700px]">
					<p class="font-medium text-[17px]">
						Get Access
					</p>

					<h3 class="font-normal text-[30px]">
						Become a Nike x NBA ID Member
					</h3>

					<p class="font-light">
						Link your Nike and NBA ID Memberships to become a Nike x NBA ID Member. You'll get free access to Air
						Time and a free preview of League Pass on the select game days, plus exclusive Nike x NBA ID benefits
						as they drop all seasons long. Avaliable to stream in the US only. Local blackout restrictions apply.
					</p>

					<button type="button" class="px-4 bg-black font-medium text-white rounded-full py-2">
						<p class="text-[15px]">Link Accounts</p>
					</button>
				</div>
			</div>
		</div>
	</section>
</template>