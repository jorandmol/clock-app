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
					<input id="day" name="day" type="text" class="input input-bordered" />
				</div>
				<div class="form-control">
					<label class="label" for="month">
						<span class="label-text">Months</span>
					</label>
					<input id="month" name="month" type="text" class="input input-bordered" />
				</div>
				<div class="form-control">
					<label class="label" for="year">
						<span class="label-text">Years</span>
					</label>
					<input id="year" name="year" type="text" class="input input-bordered" />
				</div>
			</div>
			<div class="grid grid-cols-3 gap-1">
				<div class="form-control">
					<label class="label" for="hours">
						<span class="label-text">Hours</span>
					</label>
					<input id="hours" name="hours" type="text" class="input input-bordered" />
				</div>
				<div class="form-control">
					<label class="label" for="hours">
						<span class="label-text">Hours</span>
					</label>
					<input id="hours" name="hours" type="text" class="input input-bordered" />
				</div>
				<div class="form-control">
					<label class="label" for="seconds">
						<span class="label-text">Seconds</span>
					</label>
					<input id="seconds" name="seconds" type="text" class="input input-bordered" />
				</div>
			</div>
		</div>
	</div>
	<div class="flex h-10 lg:h-80 justify-center content-center">
		<div class="my-auto card rounded bg-secondary text-white py-1 px-3">
			<span class="font-bold text-4xl">=</span>
		</div>
	</div>
	<div class="lg:h-80 lg:col-span-3 bg-primary text-white">
		{#if finalTime}
			<Clock
				currentTime={finalTime}
				timezone={$currentZone.timezone}
				locale={$currentZone.locale}
			/>
		{/if}
	</div>
</div>
