<script lang="ts">
	import type { Skill } from '$lib/skills';

	const { skill }: { skill: Skill } = $props();
</script>

<div class="card">
	{#if skill.icon}
		<img src={skill.icon} alt={skill.title} />
	{/if}
	<div class="content">
		<h2 class="title">{skill.title}</h2>
		<span class="description">{skill.description}</span>
	</div>
</div>

<style lang="scss">
	.card {
		padding: 1.2rem;
		background-color: var(--primary-text);
		border-radius: 0.6rem;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;

		img {
			width: 4rem;
			user-select: none;
		}

		.content {
			font-family: 'Lato', sans-serif;
		}
	}
</style>
