<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import Play from 'vue-material-design-icons/Play.vue';
</script>

<template>
	<section id="navigationForNikeNBA">
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

	<section id="watch&BecomeMemberForNikeNBA">
		<div class="px-20 w-[1440px] mb-10">
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

					<RouterLink to="/profile">
						<button type="button" class="px-4 bg-black font-medium text-white rounded-full py-2">
							<p class="text-[15px]">Link Accounts</p>
						</button>
					</RouterLink>

				</div>
			</div>
		</div>
	</section>


	<section id="airTimeForNikeNBA">
		<div class="px-20 w-[1440px] mb-10">
			<h2 class="font-normal text-[25px] mb-5">Air Time</h2>
			<div
				class="bg-[url('/images/icons/Air-time-for-Nike-NBA.png')] bg-local mb-20 bg-center w-full relative  h-[600px] ">
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

			<div class=" ml-40 flex gap-20 flex-col w-[700px]">

				<div class="flex flex-col items-start  gap-4 ">

					<h3 class="font-normal text-[30px]">
						Air Time Rewind
					</h3>

					<p class="font-light">
						Our first Air Time tipped on November 28th as we watched the Boston Celtics defeat the Chicago Bulls
						in In-Season Tournament Group Play. We celebrated the Nike NBA 2023-24 City Edition Jerseys with
						special guests froom the Nike Family : Tyrese Haliburton, Napheesa Collier, Vince Carter, Dawn Staley,
						and Deon Point. In addition to free access to the Air Time, Nike x NBA ID Members get exclussive
						access to product, content, and experiences.
					</p>

					<RouterLink to="/profile">
						<button type="button" class="px-4 bg-black font-medium text-white rounded-full py-2">
							<p class="text-[15px]">Become a Nike x NBA ID Member</p>
						</button>
					</RouterLink>
				</div>
			</div>
		</div>
	</section>

	<section id="gameAppForNikeNBA">
		<div class="px-20 h-full mb-20 w-[1440px]">

			<div class="flex gap-3 mb-20 items-center">
				<div class="relative w-full ">
					<img class="hover:brightness-50 transition duration-200"
						src="/images/icons/Nike-NBA-player-one-for-NIke-NBA.png" alt="">
					<div class="absolute top-0 left-0">
						<div class="flex gap-3">
							<img width="80" src="/images/nba-logo.png" alt="">
							<img width="80" src="/images/swoosh-nike-logo.png" alt="">
						</div>
					</div>
					<div class="absolute w-[500px] text-white left-12 bottom-10">
						<h3 class="font-normal text-[30px]">Going Beyond the Game</h3>
						<p class="font-light">We are bringing the conversation on basketball culture to the live action of NBA
							games with the
							athletes, gear, and stories that have shaped our love for hoops. Check up with our hosts, Alexis
							Morgan, Kenny Beecham, and Jamiersen Green alongside special guests and voices from across the Nike
							Basketball universe as they drop in-game announcements, products, and more.</p>
					</div>
				</div>

				<div class="relative w-full ">
					<img class="hover:brightness-50 transition duration-200"
						src="/images/icons/Nike-NBA-player-two-for-NIke-NBA.png" alt="">
					<div class="absolute top-0 left-0">
						<div class="flex gap-3">
							<img width="80" src="/images/nba-logo.png" alt="">
							<img width="80" src="/images/swoosh-nike-logo.png" alt="">
						</div>
					</div>
					<div class="absolute w-[500px] text-white left-12 bottom-10">
						<h3 class="font-normal text-[30px]">NBA is the Home of Air Time</h3>
						<p class="font-light">Download the NBA app and get free access to Air Time and League Pass on select
							game days after becoming a Nike x NBA ID Member.</p>

						<button class="bg-white mt-5 font-medium text-black rounded-full px-4 py-2">
							<p>Download NBA App</p>
						</button>
					</div>
				</div>
			</div>

			<div class="flex flex-col gap-[80px] items-center  ">
				<img width="120" class="p-2 bg-white shadow shadow-inner  shadow-xl rounded-[30%]"
					src="/images/swoosh-nike-logo.png" alt="">

				<div class="flex flex-col items-center gap-4 w-[650px]">
					<h3 class="font-normal text-[30px]">Don't Miss a Moment</h3>

					<p class="font-light text-center">
						Download the Nike App to make sure you catch all the latest Nike x NBA ID Memeber benefits.
					</p>

					<button class="bg-black mt-5 font-medium text-white rounded-full px-4 py-2">
						<p class="text-[15px]">Download Nike App</p>
					</button>
				</div>
			</div>
		</div>
	</section>
</template>