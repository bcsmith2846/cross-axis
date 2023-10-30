import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { base } from '$app/paths';


interface SidebarMenuItem {
    path: string;
    text: string;
}

interface SettingsInterface {
    theme: string;
    themes: Array<string>;
    copyrightNotice?: string;
    sidebarMenuItems: Array<SidebarMenuItem>;
}
export const Settings: Writable<SettingsInterface> = writable<SettingsInterface>({
    sidebarMenuItems: [
        {
            path: base,
            text: 'Home',
        },
        {
            path: base + '/board',
            text: 'Planning Board'
        }
    ],
    theme: 'dracula',
    themes: [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
    ],
    copyrightNotice: 'Copyright 2023: Brenden Smith <brenden@brendensmith.net> - All Rights Reserved'
} as SettingsInterface);
