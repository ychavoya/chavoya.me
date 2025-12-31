<script lang="ts">
	import type { Experience } from '$lib/experience';

	const { item }: { item: Experience } = $props();
</script>

<div class="item">
	<h2>
		{item.title}
	</h2>
	<h3>{item.company} <span class="period">({item.period})</span></h3>
	<ul>
		{#each item.description as line}
			<li>{line}</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.item {
		margin-bottom: 2rem;
		width: 100%;
		@media screen and (max-width: 1200px) {
			text-align: center;
		}
	}
	h2 {
		font-family: 'Kodchasan', sans-serif;
		color: var(--primary-text);
		font-size: 1.8rem;
	}
	h3 {
		font-family: 'Lato', sans-serif;
		font-size: 1.3rem;
		& span {
			font-weight: normal;
			font-size: 1.1rem;
		}
	}

	ul {
		padding-inline-start: 0;
		text-align: left;
	}

	li {
		font-family: 'Lato', sans-serif;
		font-size: 1.2rem;
		list-style: square;
		line-height: 1.5rem;
	}
</style>
