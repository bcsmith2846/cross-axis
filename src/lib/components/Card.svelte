<script lang="ts">
	import { onMount } from 'svelte';
	export let title: string;
	export let body: string;
	export const UUID = crypto.randomUUID();

	let currLeft = 0,
		currTop = 0,
		dragging = false;

	onMount(() => {
		let target = document.getElementById(UUID) as HTMLDivElement | null;
		if (target) {
			currLeft = target.clientLeft;
			currTop = target.clientTop;
		}
		return () => {
			currLeft = 0;
			currTop = 0;
		};
	});

	async function doDragStart(e: MouseEvent) {
		let target = e.currentTarget as HTMLDivElement | null;
		if (target) {
			dragging = true;
		}
	}
	async function doDrag(e: MouseEvent) {
		let target = e.currentTarget as HTMLDivElement | null;
		let delX = e.movementX;
		let delY = e.movementY;

		if (target && dragging) {
			let width = target.parentElement?.clientWidth ?? Number.POSITIVE_INFINITY;
			let height = target.parentElement?.clientHeight ?? Number.POSITIVE_INFINITY;
			let leftReq = currLeft + delX;
			let topReq = currTop + delY;
			currLeft =
				leftReq >= 0
					? leftReq + target.clientWidth <= width
						? leftReq
						: width - target.clientWidth
					: 0;
			currTop =
				topReq >= 0
					? topReq + target.clientHeight <= height
						? topReq
						: height - target.clientHeight
					: 0;
			target.style.top = currTop + 'px';
			target.style.left = currLeft + 'px';
		}
	}
	async function doDragEnd(e: MouseEvent) {
		let target = e.currentTarget as HTMLDivElement;
		if (target) {
			dragging = false;

			target.style.top = currTop + 'px';
			target.style.left = currLeft + 'px';
		}
	}
	async function doWindowResize(e: Event) {
		let target = document.getElementById(UUID) as HTMLDivElement;
		if (target) {
			let width = target.parentElement?.clientWidth ?? Number.POSITIVE_INFINITY;
			let height = target.parentElement?.clientHeight ?? Number.POSITIVE_INFINITY;
			let leftReq = currLeft;
			let topReq = currTop;
			currLeft =
				leftReq >= 0
					? leftReq + target.clientWidth <= width
						? leftReq
						: width - target.clientWidth
					: 0;
			currTop =
				topReq >= 0
					? topReq + target.clientHeight <= height
						? topReq
						: height - target.clientHeight
					: 0;
			target.style.top = currTop + 'px';
			target.style.left = currLeft + 'px';
		}
	}
</script>

<svelte:window on:resize={doWindowResize} />

<div
	id={UUID}
	role="presentation"
	on:mousedown|preventDefault={doDragStart}
	on:mousemove={doDrag}
	on:mouseup={doDragEnd}
	on:mouseleave={doDragEnd}
	class="card project-card w-96 card-bordered card-normal bg-secondary hover:bg-secondary-focus text-secondary-content hover:text-secondary-content-focus shadow-xl"
>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{body}</p>
		<p>X cord: {currLeft}, Y cord: {currTop}</p>
	</div>
</div>
