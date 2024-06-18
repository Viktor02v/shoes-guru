<script setup>
import Banner from '@/components/Banner.vue';
</script>

<template>
	<div>

		<section id="BannerSection">
			<div>
				<RouterLink to="/events">
					<Banner/>
				</RouterLink>
			</div>
		</section>
		<div class="mt-10"></div>

		<section id="NewLine">
			<div class="px-20">
				<div class="text-center mb-20">
					<h2>New line is avalible <span>Now</span></h2>
					<p>Jordan 23</p>
				</div>
				<div class="relative w-full h-[600px]">
					<img width="550" class="absolute rounded-md left-0" src="/images/icons/Jordan for NewLine Red.png" alt="">
					<img width="300" class="absolute top-[25%] left-[38.3%] " src="/images/Air Jordan .png">
					<img width="550" class="absolute rounded-md right-0" src="/images/icons/Jordan For NewLine Black.png" alt="">
				</div>
			</div>
		</section>

	</div>
</template>
