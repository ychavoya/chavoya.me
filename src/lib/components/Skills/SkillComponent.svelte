<script lang="ts">
	import type { Skill } from '$lib/skills';

	const { skill }: { skill: Skill } = $props();
</script>

<div>
	{skill.title}
</div>
