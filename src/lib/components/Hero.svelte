<script>
	import Linkedin from '$lib/assets/Linkedin.svelte';
	import Mail from '$lib/assets/Mail.svelte';
	import Github from '$lib/assets/Github.svelte';
	import Orbit from '$lib/components/Orbit.svelte';
	import Credly from '$lib/assets/Credly.svelte';
</script>

<section class="hero">
	<div class="left-side">
		<div>
			<h1>Yael Chavoya</h1>
			<h2>Full Stack Software Developer</h2>
		</div>
		<div class="links">
			<a href="https://github.com/ychavoya" target="_blank">
				<Github />
			</a>
			<a href="https://linkedin.com/in/yael-chavoya" target="_blank">
				<Linkedin />
			</a>
			<a href="mailto:yael@chavoya.me" target="_blank">
				<Mail />
			</a>
			<a href="https://www.credly.com/users/yael-chavoya" target="_blank" style="scale: 1.5"
				><Credly /></a
			>
		</div>
		<p class="description">
			Hello! I am Yael, a passionate Full-Stack Software Developer with a diverse set of <a
				href="#skills">skills</a
			>
			and <a href="#experience">expertise</a>. I have developed and deployed mission-critical
			systems and strategic <a href="#open-source">open source projects</a>. I have mentored and
			collaborated with developers from across the globe. I am an avid and quick
			<a href="#certifications">learner</a>, with a drive to constantly improve. I believe in the
			importance of being open-minded, organized and receptive to feedback.
		</p>
	</div>
	<div class="right-side">
		<Orbit />
	</div>
</section>

<style lang="scss">
	@mixin header {
		font-family: 'Kodchasan', sans-serif;
		font-weight: 700;
		line-height: 1;
		margin-bottom: 0.8rem;
	}

	h1 {
		@include header;
		font-size: 6rem;
		color: var(--primary-text);
		@media screen and (max-width: 800px) {
			font-size: 4rem;
		}
	}

	h2 {
		@include header;
		font-size: 2rem;
	}

	.hero {
		display: flex;
		flex-direction: row;

		@media screen and (max-width: 800px) {
			flex-direction: column;
		}
	}

	.left-side {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 2rem;
		gap: 2rem;
	}

	.right-side {
		height: 100vh;
		width: 100vh;
		max-width: 60%;
		@media screen and (max-width: 800px) {
			height: 100vw;
			width: 100vw;
			max-width: 100%;
		}
		background-color: var(--primary-light);
		overflow: hidden;
	}

	.links {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;

		a {
			height: 3.5rem;
			width: 3.5rem;

			:global(svg path) {
				fill: var(--primary-text);
				transition: fill 0.2s ease-in-out;
			}

			&:hover :global(svg path) {
				fill: var(--primary-color);
			}
		}
	}
</style>
