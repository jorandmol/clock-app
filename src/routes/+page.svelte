<script lang="ts">
	import { currentTime, formatDate, formatTime } from '../lib/time';

	let isHour12: boolean = false;
	let locale: string = 'es-ES';
	let timezone: string = 'Europe/Madrid';

	interface City {
		flag: string;
		name: string;
		locale: string;
		timezone: string;
	}

    // Move to a call to the server
	let cities: City[] = [
		{ flag: '🇪🇸', name: 'Sevilla', locale: 'es-ES', timezone: 'Europe/Madrid' },
		{ flag: '🇵🇹', name: 'Lisboa', locale: 'pt-PT', timezone: 'Europe/Lisbon' },
		{ flag: '🇮🇹', name: 'Roma', locale: 'it-IT', timezone: 'Europe/Rome' },
		{ flag: '🇧🇷', name: 'Sao Paulo', locale: 'pt-BR', timezone: 'America/Sao_Paulo' },
		{ flag: '🇲🇽', name: 'México D.F.', locale: 'es-MX', timezone: 'America/Mexico_City' },
		{ flag: '🇺🇸', name: 'New York', locale: 'en-US', timezone: 'America/New_York' }
	];

	function changeCity(city: City) {
		locale = city.locale;
		timezone = city.timezone;
	}

</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
	<div class="card h-80 bg-primary text-white">
		<div class="card-body">
			<div class="card-title h-full flex flex-col items-center content-center justify-between">
				<h2 class="w-full text-lg text-left">{formatDate($currentTime, locale, timezone)}</h2>
				<h1 class="w-full text-7xl text-center">
					{formatTime($currentTime, locale, timezone, isHour12)}
				</h1>
				<div class="w-full flex justify-end">
					<button
						class="btn btn-white text-primary btn-square"
						on:click={() => (isHour12 = !isHour12)}
					>
						{isHour12 ? '12h' : '24h'}
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="card h-80 bg-info text-secondary">
		<div class="card-body">
			<h2 class="card-title">Choose a city...</h2>
			<div class="grid grid-cols-3 gap-3">
				{#each cities as city}
					<button
						class="btn btn-square p-2 btn-white border-secondary hover:btn-secondary hover:border-white w-full flex flex-row"
						on:click={() => changeCity(city)}
						class:btn-secondary={city.locale === locale}
						class:border-white={city.locale === locale}
					>
						<span>{city.flag}</span>
						<span>{city.name}</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>
