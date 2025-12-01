<script lang="ts">
	import skills from '\$lib/skills';
	import SkillComponent from '$lib/components/Skills/SkillComponent.svelte';
	import { CODE } from '$lib/constants';
</script>

<section id="skills">
	<div class="decoration-text" role="presentation">
		<code>{CODE}</code>
	</div>
	<div class="content">
		<h1>Skills</h1>
		{#each skills as skill (skill.title)}
			<SkillComponent {skill} />
		{/each}
	</div>
</section>
<div class="triangle"></div>

<style lang="scss">
	#skills {
		background-color: var(--primary-color);
		color: var(--background-light);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem 2rem 10rem;

		position: relative;
		.content {
			width: 100%;
			max-width: 1920px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2rem;
			z-index: 1;
		}
	}

	.decoration-text {
		overflow: hidden;
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;

		code {
			word-break: break-all;
			user-select: none;
			font-size: 4rem;
			color: var(--primary-text);
			opacity: 0.08;

			@media screen and (max-width: 1300px) {
				font-size: 3rem;
			}
			@media screen and (max-width: 800px) {
				font-size: 1.6rem;
			}
		}
	}
</style>
