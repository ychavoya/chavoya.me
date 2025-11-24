<script lang="ts">
	import skills from "\$lib/skills";
	import SkillComponent from '$lib/components/Skills/SkillComponent.svelte';
</script>

<section id="skills">
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
		padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

		.content {
			width: 100%;
			max-width: 1920px;
      display: flex;
      flex-direction: column;
      align-items: center;
			gap: 2rem;
		}

		a {
			color: var(--background-light);
			&:hover {
				color: var(--primary-light);
			}
		}
	}

	.triangle {
		width: 0;
		height: 0;
    border-style: solid;
    border-width: 8rem 50vw 0 50vw;
    border-color: var(--primary-color) transparent transparent transparent;
	}
</style>
