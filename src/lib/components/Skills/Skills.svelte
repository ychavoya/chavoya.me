<script lang="ts">
	import skills, { CATEGORIES, type Category } from '$lib/skills';
	import SkillComponent from '$lib/components/Skills/SkillComponent.svelte';
	import { CODE } from '$lib/constants';

	let selectedSkills = $state(skills);
	let activeCategory: Category | null = $state(null);

	const selectAll = () => {
		selectedSkills = skills;
		activeCategory = null;
	};

	const selectCategory = (category: Category) => {
		selectedSkills = skills.filter((s) => s.categories?.includes(category));
		activeCategory = category;
	};
</script>

<section id="skills">
	<div class="decoration-text" role="presentation">
		<code>{CODE}</code>
	</div>
	<div class="content">
		<h1>Skills</h1>
		<div class="filters">
			<button class:active={!activeCategory} onclick={selectAll}>All</button>
			{#each CATEGORIES as category (category)}
				<button onclick={() => selectCategory(category)} class:active={activeCategory === category}
					>{category}</button
				>
			{/each}
		</div>
		<div class="cards">
			{#each selectedSkills as skill (skill.title)}
				<SkillComponent {skill} />
			{/each}
		</div>
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

		@media screen and (max-width: 800px) {
			padding: 2rem 1rem 10rem;
		}

		.content {
			width: 100%;
			max-width: 1920px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2rem;
			z-index: 1;

			.filters {
				display: flex;
				flex-direction: row;
				background-color: rgba(#0a4200, 0.3);
				border-radius: 1rem;
				gap: 1rem;

				@media screen and (max-width: 800px) {
					gap: 0;
				}

				button {
					padding: 0.6rem 1.2rem;
					border-radius: 1rem;
					background-color: transparent;
					border: none;
					color: var(--background-light);
					font-size: 1.2rem;
					cursor: pointer;

					@media screen and (max-width: 800px) {
						padding: 0.6rem 0.8rem;
						font-size: 1rem;
					}

					&:hover {
						font-weight: bold;
					}

					&.active {
						background-color: var(--primary-text);
						font-weight: bold;
					}
				}
			}

			.cards {
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				gap: 1rem;

				@media screen and (max-width: 1300px) {
					grid-template-columns: repeat(2, 1fr);
				}
				@media screen and (max-width: 800px) {
					grid-template-columns: repeat(1, 1fr);
				}
			}
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
			opacity: 0.1;

			@media screen and (max-width: 1300px) {
				font-size: 3rem;
			}
			@media screen and (max-width: 800px) {
				font-size: 1.6rem;
			}
		}
	}
</style>
