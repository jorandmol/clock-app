<script lang="ts">
	import { currentTime, currentZone } from '$lib/time';
	import Clock from '$lib/components/clock.svelte';
	import type { City } from '../models/city';

    // Move to a call to the server
	let cities: City[] = [
		{ flag: '🇪🇸', name: 'Sevilla', locale: 'es-ES', timezone: 'Europe/Madrid' },
		{ flag: '🇵🇹', name: 'Lisboa', locale: 'pt-PT', timezone: 'Europe/Lisbon' },
		{ flag: '🇮🇹', name: 'Roma', locale: 'it-IT', timezone: 'Europe/Rome' },
		{ flag: '🇧🇷', name: 'Sao Paulo', locale: 'pt-BR', timezone: 'America/Sao_Paulo' },
		{ flag: '🇲🇽', name: 'México D.F.', locale: 'es-MX', timezone: 'America/Mexico_City' },
		{ flag: '🇺🇸', name: 'New York', locale: 'en-US', timezone: 'America/New_York' }
	];

	$: date = new Date($currentTime);

</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
	<Clock timezone={$currentZone.timezone} locale={$currentZone.locale} currentTime={date}/>
	<div class="card h-80 bg-info text-secondary">
		<div class="card-body">
			<h2 class="card-title">Choose a city...</h2>
			<div class="grid grid-cols-3 gap-3">
				{#each cities as city}
					<button
						class="btn btn-square p-2 btn-white border-secondary hover:btn-secondary hover:border-white w-full flex flex-row"
						on:click={() => currentZone.set(city)}
						class:btn-secondary={city.locale === $currentZone.locale}
						class:border-white={city.locale === $currentZone.locale}
					>
						<span>{city.flag}</span>
						<span>{city.name}</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>
