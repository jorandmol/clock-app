<script lang="ts">
    let addOperation: boolean = true;

</script>

<div class="grid grid-cols-1 lg:grid-cols-12 gap-3">
	<div class="card lg:h-80 lg:col-start-2 lg:col-span-3 bg-info text-secondary">
		<div class="card-body h-full flex flex-col items-center content-center justify-between">
			<h2 class="card-title">Date</h2>
            <div class="grid grid-cols-3 gap-1">
                <div class="form-control">
                    <label class="label" for="day">
                        <span class="label-text">Day</span>
                    </label>
                    <input id="day" name="day" type="text" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label" for="month">
                        <span class="label-text">Month</span>
                    </label>
                    <input id="month" name="month" type="text" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label" for="year">
                        <span class="label-text">Year</span>
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
                    <label class="label" for="minutes">
                        <span class="label-text">Minutes</span>
                    </label>
                    <input id="minutes" name="minutes" type="text" class="input input-bordered" />
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
		<button class="my-auto btn btn-square btn-secondary hover:border-secondary" on:click={() => addOperation = !addOperation}>
            <span class="font-bold text-4xl">{addOperation ? '+' : '-'}</span>
        </button>
	</div>
    <div class="card lg:h-80 lg:col-span-2 bg-info text-secondary">
		<div class="card-body h-full flex flex-col items-center content-center justify-between">
			<h2 class="card-title">{addOperation ? 'Add' : 'Substract'}...</h2>
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
    <div class="card lg:h-80 lg:col-span-3 bg-primary text-white">
		<div class="card-body">
			<div class="card-title h-full flex flex-col items-center content-center justify-between">
				<h2 class="w-full text-lg text-left">02/07/2023</h2>
				<h1 class="w-full text-7xl text-center">18:31:23</h1>
				<div class="w-full flex justify-end">
					<label class="btn btn-square swap bg-white text-primary p-2">
						<input type="checkbox" />
						<div class="swap-on">12h</div>
						<div class="swap-off">24h</div>
					</label>
				</div>
			</div>
		</div>
	</div>
</div>