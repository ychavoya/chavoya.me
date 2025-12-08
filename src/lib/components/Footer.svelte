<script>
	import Github from '$lib/assets/Github.svelte';

	const year = new Date().getFullYear();
</script>

<footer>
	<p>© {year} &CenterDot; Yael Chavoya</p>
	<p>
		<a href="https://github.com/ychavoya/chavoya.me" target="_blank"><Github /> View source code</a>
	</p>
</footer>

<style lang="scss">
	footer {
		width: auto;
		background: var(--primary-text);
		color: var(--background-light);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding-inline: 2rem;
		padding-block: 3rem;

		@media screen and (max-width: 800px) {
			flex-direction: column;
		}

		a {
			color: var(--background-light);

			:global(svg) {
				width: 1.2rem;
			}

			:global(svg path) {
				fill: var(--background-light);
			}
			&:hover {
				color: var(--primary-light);

				:global(svg path) {
					fill: var(--primary-light);
				}
			}
		}
	}
</style>
