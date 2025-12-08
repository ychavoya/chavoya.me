<script lang="ts">
	import { onMount } from 'svelte';
	import profile from '$lib/assets/profile.jpeg';
	import reactSvg from '$lib/assets/skills/react.svg';
	import javaSvg from '$lib/assets/skills/java.svg';
	import kubernetesSvg from '$lib/assets/skills/kubernetes.svg';
	import kafkaSvg from '$lib/assets/skills/kafka.svg';
	import gitSvg from '$lib/assets/skills/git.svg';
	import springSvg from '$lib/assets/skills/spring.svg';
	import pythonSvg from '$lib/assets/skills/python.svg';
	import javascriptSvg from '$lib/assets/skills/javascript.svg';

	const ORBIT_DURATION = 40;
	const PARALLAX_STRENGTH = 5;
	const skills = [
		reactSvg,
		javaSvg,
		kubernetesSvg,
		kafkaSvg,
		gitSvg,
		springSvg,
		pythonSvg,
		javascriptSvg
	];

	const coords = $state({ x: 0, y: 0 });

	function parallax(event: MouseEvent) {
		coords.x = (event.clientX / window.innerWidth) * PARALLAX_STRENGTH * -1;
		coords.y = (event.clientY / window.innerHeight) * PARALLAX_STRENGTH * -1;
	}

	onMount(() => {
		document?.addEventListener('mousemove', parallax);
		return () => {
			document.removeEventListener('mousemove', parallax);
		};
	});
</script>

<div class="orbit">
	<img
		class="profile"
		src={profile}
		alt="Yael Chavoya"
		style="translate: {coords.x}px {coords.y}px"
	/>
	{#each skills as svg, index (index)}
		<img
			class="satellite"
			src={svg}
			alt="logo"
			role="presentation"
			style="animation-delay: -{(ORBIT_DURATION / skills.length) *
				index}s; animation-duration: {ORBIT_DURATION}s"
		/>
	{/each}
</div>

<style lang="scss">
	:root {
		--profile-z: 5;
	}

	@property --theta {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: true;
	}
	@property --z {
		syntax: '<integer>';
		initial-value: 0;
		inherits: true;
	}

	@keyframes orbit-around {
		0% {
			--theta: 0deg;
			transform: rotate(-5deg);
			--z: var(--profile-z);
		}
		25% {
			--z: 10;
		}
		50% {
			--z: 5var (--profile-z);
			transform: rotate(5deg);
		}
		75% {
			--z: 1;
		}
		100% {
			--theta: 360deg;
			transform: rotate(-5deg);
			--z: var(--profile-z);
		}
	}

	@keyframes profile {
		from {
			transform: rotate(-10deg);
		}
		to {
			transform: rotate(10deg);
		}
	}

	.orbit {
		display: grid;
		place-items: center;
		height: 100%;
		width: 100%;
		max-width: 1000px;
	}

	.profile {
		width: 20rem;
		border-radius: 50%;
		border: 8px solid var(--accent);
		z-index: var(--profile-z);
		animation: profile 20s alternate linear infinite;
		grid-area: 1/1;
		user-select: none;
	}

	.satellite {
		--x-offset: 19rem;
		--y-offset: 8rem;
		width: 6rem;
		--x: calc(var(--x-offset) * cos(var(--theta)));
		--y: calc(var(--y-offset) * sin(var(--theta)));
		translate: var(--x) var(--y);
		scale: calc(1 + 0.2 * sin(var(--theta)));
		z-index: var(--z);
		animation: orbit-around linear infinite;
		grid-area: 1/1;
		user-select: none;
	}

	@media screen and (max-width: 1300px) {
		.profile {
			width: 14rem;
		}
		.satellite {
			--x-offset: 13rem;
			--y-offset: 6rem;

			width: 5rem;
		}
	}
	@media screen and (max-width: 800px) {
		.profile {
			width: 14rem;
		}
		.satellite {
			--x-offset: 12rem;
			--y-offset: 4rem;
			width: 4rem;
		}
	}
	@media screen and (max-width: 500px) {
		.profile {
			width: 10rem;
		}
		.satellite {
			--x-offset: 9rem;
			--y-offset: 4rem;
			width: 3rem;
		}
	}
</style>
