<script lang="ts">
	import Clock from '$lib/components/clock.svelte';
	import { currentTime, currentZone } from '$lib/time';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { fade } from 'svelte/transition';

	let timeToString: string;
	let finalTime: Date;
	let addOperation: boolean = true;

	$: time = timeToString ? new Date(timeToString) : new Date();

	type OpDateElem = {
		value: number;
		toMilliseconds: number;
	}

	type OpDate = {
		years: OpDateElem;
		months: OpDateElem;
		days: OpDateElem;
		hours: OpDateElem;
		minutes: OpDateElem;
	}

	let opDate: OpDate = {
		years: { value: 0, toMilliseconds: 31556952000 },
		months: { value: 0, toMilliseconds: 2629800000 },
		days: { value: 0, toMilliseconds: 86400000 },
		hours: { value: 0, toMilliseconds: 3600000 },
		minutes: { value: 0, toMilliseconds: 60000 }
	}

	onMount(() => {
		finalTime = get(currentTime);
		const matches = get(currentTime)
			.toLocaleString('es-ES', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				hour12: false,
				timeZone: get(currentZone).timezone
			})
			.match(/(\d+)\/(\d+)\/(\d+), (\d+):(\d+)/);
		if (matches) {
			const [_, day, month, year, hour, minute] = matches;
			timeToString = `${year}-${month}-${day}T${hour}:${minute}`;
		}
	});

	function operate(): void {
		const timeToMilliseconds: number = time.getTime();
		
		let timeToOperate: number = 0;
		let k: keyof OpDate;
		for (k in opDate) {
			timeToOperate += (opDate[k].value ?? 0) * (opDate[k].toMilliseconds);	
		}

		const result = addOperation ? timeToMilliseconds + timeToOperate : timeToMilliseconds - timeToOperate;
		console.log(result);
		
		finalTime = new Date(result);
	}

</script>

<div class="grid grid-cols-1 lg:grid-cols-12 gap-3">
	<div class="card lg:h-80 lg:col-start-2 lg:col-span-3 bg-info text-secondary">
		<div class="card-body h-full flex flex-col items-center content-center justify-center">
			<h2 class="card-title">Date</h2>
			{#if time}
				<input
					id="time"
					name="time"
					type="datetime-local"
					class="input input-bordered"
					on:change={() => operate()}
					bind:value={timeToString}
				/>
			{/if}
		</div>
	</div>
	<div class="flex h-10 lg:h-80 justify-center content-center">
		<button
			class="my-auto btn btn-square btn-secondary hover:border-secondary"
			on:click={() => (addOperation = !addOperation)}
		>
			<span class="font-bold text-4xl">{addOperation ? '+' : '-'}</span>
		</button>
	</div>
	<div class="card lg:h-80 lg:col-span-2 bg-info text-secondary">
		<div class="card-body h-full flex flex-col items-center content-center justify-between">
			<h2 class="card-title" in:fade>
				{#if addOperation}
					<span in:fade>Add...</span>
				{:else}
					<span in:fade>Substract...</span>
				{/if}
			</h2>
			<div class="grid grid-cols-3 gap-1">
				<div class="form-control">
					<label class="label" for="day">
						<span class="label-text">Days</span>
					</label>
					<input
						id="day"
						name="day"
						type="number"
						min="0"
						step="1"
						class="input input-bordered"
						on:change={() => operate()}
						bind:value={opDate.days.value}
					/>
				</div>
				<div class="form-control">
					<label class="label" for="month">
						<span class="label-text">Months</span>
					</label>
					<input
						id="month"
						name="month"
						type="number"
						min="0"
						step="1"
						class="input input-bordered"
						on:change={() => operate()}
						bind:value={opDate.months.value}
					/>
				</div>
				<div class="form-control">
					<label class="label" for="year">
						<span class="label-text">Years</span>
					</label>
					<input
						id="year"
						name="year"
						type="number"
						min="0"
						step="1"
						class="input input-bordered"
						on:change={() => operate()}
						bind:value={opDate.years.value}
					/>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-1">
				<div class="form-control">
					<label class="label" for="hours">
						<span class="label-text">Hours</span>
					</label>
					<input
						id="hours"
						name="hours"
						type="number"
						min="0"
						step="1"
						class="input input-bordered"
						on:change={() => operate()}
						bind:value={opDate.hours.value}
					/>
				</div>
				<div class="form-control">
					<label class="label" for="minutes">
						<span class="label-text">Minutes</span>
					</label>
					<input
						id="minutes"
						name="minutes"
						type="number"
						min="0"
						step="1"
						class="input input-bordered"
						on:change={() => operate()}
						bind:value={opDate.minutes.value}
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="flex h-10 lg:h-80 justify-center content-center">
		<div class="my-auto card rounded bg-secondary text-white py-1 px-3">
			<span class="font-bold text-4xl">=</span>
		</div>
	</div>
	<div class="lg:h-80 lg:col-span-3 bg-primary text-white card">
		{#if finalTime}
			<Clock
				currentTime={finalTime}
				timezone={$currentZone.timezone}
				locale={$currentZone.locale}
				showSeconds={false}
			/>
		{/if}
	</div>
</div>
