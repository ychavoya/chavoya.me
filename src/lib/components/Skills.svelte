<script>
	import Wip from '$lib/assets/Wip.svelte';
</script>

<section id="skills">
	<h1>Skills</h1>
	<div class="wip">
		<Wip />
		<p>Oops, I am still working on this part 😅.</p>
		<p>
			In the meantime, you can check this out on my <a href="https://linkedin.com/in/yael-chavoya"
				>LinkedIn</a
			>
		</p>
	</div>
</section>

<style lang="scss">
	#skills {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--primary-color);
		color: var(--background-light);
		padding: 2rem;
		gap: 2rem;

		h1 {
			font-family: 'Kodchasan', sans-serif;
			font-weight: 700;
			line-height: 1;
			margin-bottom: 0.8rem;
			font-size: 3rem;
		}

		a {
			color: var(--background-light);
			&:hover {
				color: var(--primary-light);
			}
		}
	}

	.wip {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		:global(svg) {
			width: 25rem;
			height: auto;
			margin-bottom: 2rem;
		}
	}
</style>
