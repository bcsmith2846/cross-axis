<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<div class="board">
	<div class="axis top-1/2 h-0 w-full ring ring-1 ring-neutral absolute" />
	<div class="axis left-1/2 h-full w-0 ring ring-1 ring-neutral absolute" />
	<Card
		title="Title String"
		body="This the cord's body text. The card's body text can be of a longer length and it will be handled appropriately. Does this card handle the body text well or not? Can you tell me?"
	/>
</div>

<style>
	.board {
		width: 100%;
		height: 100%;
	}
</style>
