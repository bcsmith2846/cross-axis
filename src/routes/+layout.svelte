<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import { Settings } from '$lib/store/settings';
	import { onMount } from 'svelte';
	import type { EventHandler } from 'svelte/elements';
	import { base } from '$app/paths';
	import { dev } from '$app/environment';

	let selectedTheme: string;
	let drawerCheckbox: HTMLInputElement;
	let routes: Array<{ rel: string; name: string }>;

	$: routes = [
		{ rel: dev ? '/' : base, name: 'home' },
		...$page.url.pathname
			.substring(dev ? 0 : base.length)
			.slice(1)
			.split(/\//)
			.map((i) => ({ rel: i, name: i }))
	];

	onMount(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if ('theme' in $Settings && $Settings.theme) {
			selectedTheme = $Settings.theme;
		} else if (
			!('theme' in $Settings) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			selectedTheme = 'dark';
		}
	});

	const doSelectTheme: EventHandler<Event, HTMLSelectElement> = async (val) => {
		$Settings.theme = val.currentTarget.value;
	};

	const doSidebarLink = async () => {
		drawerCheckbox.checked = !drawerCheckbox.checked;
	};
</script>

<svelte:head>
	<style>
		@font-face {
			font-family: 'mazer';
			src: url('fonts/mazer-regular.woff2') format('woff2'),
				url('fonts/mazer-regular.ttf') format('ttf');
			font-weight: normal;
			font-style: normal;
		}
		@font-face {
			font-family: 'mazer';
			src: url('fonts/mazer-bold.woff2') format('woff2'), url('fonts/mazer-bold.ttf') format('ttf');
			font-weight: bold;
			font-style: normal;
		}
		@font-face {
			font-family: 'mazer';
			src: url('fonts/mazer-italic.woff2') format('woff2'),
				url('fonts/mazer-italic.ttf') format('ttf');
			font-weight: normal;
			font-style: italic;
		}
		@font-face {
			font-family: 'mazer';
			src: url('fonts/mazer-book.woff2') format('woff2'), url('fonts/mazer-book.ttf') format('ttf');
			font-weight: 500;
			font-style: normal;
		}
		@font-face {
			font-family: 'mazer';
			src: url('fonts/mazer-bolditalic.woff2') format('woff2'),
				url('fonts/mazer-bolditalic.ttf') format('ttf');
			font-weight: bold;
			font-style: italic;
		}
		@font-face {
			font-family: 'mazer';
			src: url('fonts/mazer-bookitalic.woff2') format('woff2'),
				url('fonts/mazer-bookitalic.ttf') format('ttf');
			font-weight: 500;
			font-style: italic;
		}
		body {
			font-family: 'mazer';
			font-weight: 500;
			font-style: normal;
			overflow: hidden;
			overflow: -moz-hidden-unscrollable;
		}
	</style>
</svelte:head>
<div class="container w-screen h-screen flex flex-col justify-between" data-theme={selectedTheme}>
	<div class="drawer absolute h-full w-full">
		<input bind:this={drawerCheckbox} id="drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content h-full w-full flex flex-col">
			<div class="navbar flex flex-row bg-neutral text-neutral-content p-2 mb-1">
				<label for="drawer" class="btn btn-square btn-ghost drawer-button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-5 h-5 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
				<nav class="text-lg flex-1 mx-2 breadcrumbs">
					<ul>
						{#each routes as section}
							<li>
								<a href={section.rel}>
									{section.name}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
				<div class="flex-none flex flex-row self-center">
					<label class="self-center m-1 text-lg" for="themes">
						<p>Theme:</p>
					</label>
					<select
						id="themes"
						on:select={doSelectTheme}
						class="select self-center m-1 bg-neutral text-neutral-content select-info"
						bind:value={selectedTheme}
					>
						{#each $Settings.themes ?? [] as theme (theme)}
							<option class="text-lg">{theme}</option>
						{/each}
					</select>
				</div>
			</div>
			<main class="main container w-full h-full flex flex-col">
				<slot />
			</main>
			<footer
				class="footer flex flex-col text-sm items-center p4 p-2 text-neutral-content bg-neutral"
			>
				<aside>
					<p>
						{$Settings.copyrightNotice}
					</p>
				</aside>
			</footer>
		</div>
		<div class="drawer-side">
			<label for="drawer" aria-label="close sidebar" class="drawer-overlay" />
			<ul class="menu text-lg p-4 w-80 min-h-full bg-base-200 text-base-content">
				{#each $Settings.sidebarMenuItems as menuItem (menuItem.path)}
					<a href={menuItem.path} on:click={doSidebarLink} class="link m-2"
						><li>{menuItem.text}</li></a
					>
				{/each}
			</ul>
		</div>
	</div>
</div>
