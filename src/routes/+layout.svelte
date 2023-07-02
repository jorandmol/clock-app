<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<header class="bg-white flex flex-col gap-4 items-center justify-center sticky top-0">
	<div class="mt-5">
		LOL
	</div>
	<div class="tabs mb-5">
		<a href="/" class="tab tab-lg" class:tab-active={$page.url.pathname === '/'}>Home</a> 
		<a href="/operate" class="tab tab-lg" class:tab-active={$page.url.pathname === '/operate'}>Operate</a>
	  </div>
</header>

<main class="flex flex-grow items-center content-center justify-center pb-20">
	<slot />
</main>
