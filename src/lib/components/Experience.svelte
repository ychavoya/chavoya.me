<script>
	import Wip from '$lib/assets/Wip.svelte';
</script>

<section id="experience">
	<h1>Experience</h1>
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
	#experience {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
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
