<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<header class="h-30 bg-white flex flex-col gap-4 items-center justify-center sticky top-0">
	<div class="mt-5">
		<svg viewBox="0 0 24 24" class="h-20 w-20" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.35 15.57C16.21 15.81 15.96 15.94 15.7 15.94C15.57 15.94 15.44 15.91 15.32 15.83L12.22 13.98C11.45 13.52 10.88 12.51 10.88 11.62V7.52C10.88 7.11 11.22 6.77 11.63 6.77C12.04 6.77 12.38 7.11 12.38 7.52V11.62C12.38 11.98 12.68 12.51 12.99 12.69L16.09 14.54C16.45 14.75 16.57 15.21 16.35 15.57Z" fill="#057aff"></path>
		</svg>
	</div>
	<div class="tabs tabs-boxed mb-5">
		<a href="/" class="tab tab-lg" class:tab-active={$page.url.pathname === '/'}>Home</a> 
		<a href="/operate" class="tab tab-lg" class:tab-active={$page.url.pathname === '/operate'}>Operate</a>
	  </div>
</header>

<main class="h-50 flex flex-grow items-center content-center justify-center">
	<slot />
</main>

<footer class="h-20 flex content-center items-center justify-center bg-gray-100">
	<p class="text-center">Made by <a href="https://github.com/jorandmol" class="text-primary no-underline font-bold">@jorandmol</a></p>
</footer>