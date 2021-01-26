import { writable } from 'svelte/store';

export let isDarkMode;

if(typeof window !== "undefined") {
    isDarkMode = writable(localStorage.getItem("isDarkMode") || 1);
} else {
    isDarkMode = writable(1);
} // 0 follow OS, 1 light, 2 dark
