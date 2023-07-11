import { readable, writable } from 'svelte/store';
import type { City } from '../models/city';

export const currentZone = writable<City>({ flag: '🇪🇸', name: 'Sevilla', locale: 'es-ES', timezone: 'Europe/Madrid' });

export const currentTime = readable(0, function start(set) {
	const interval = setInterval(() => {
		const now = new Date();
        const now_utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(),
                        now.getUTCDate(), now.getUTCHours(),
                        now.getUTCMinutes(), now.getUTCSeconds());
        set(now_utc);
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

export const formatTime = (date: Date, locale: string, timeZone: string, hour12: boolean) => {
    const withTimeZone = new Date(date.toLocaleString('UTC', { timeZone }));
    const formatter = new Intl.DateTimeFormat(locale, {
        hour12: hour12,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    });

    return formatter.format(withTimeZone);
}

export const formatDate = (date: Date, locale: string, timeZone: string) => {
    const withTimeZone = new Date(date.toLocaleString('UTC', { timeZone }));
    const formatter = new Intl.DateTimeFormat(locale, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    return formatter.format(withTimeZone);
}