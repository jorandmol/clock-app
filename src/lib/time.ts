import { readable } from 'svelte/store';

export const currentTime = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
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