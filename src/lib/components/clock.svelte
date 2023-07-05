<script lang="ts">
    import { formatDate, formatTime } from '$lib/time';

    export let locale: string;
    export let timezone: string;
    export let currentTime: Date;

    let isHour12: boolean = false;
</script>
    
<div class="card h-80 bg-primary text-white">
    <div class="card-body">
        <div class="card-title h-full flex flex-col items-center content-center justify-between">
            <h2 class="w-full text-lg text-left">{formatDate(currentTime, locale, timezone)}</h2>
            <h1 class="w-full text-7xl text-center">
                {formatTime(currentTime, locale, timezone, isHour12)}
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