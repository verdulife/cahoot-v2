<script>
	import { formatTime } from '@/lib/utils';
	import Avatar from '@/components/Avatar.svelte';

	let { task } = $props();
</script>

<article class="flex gap-1 rounded-lg bg-gray-800 p-2 transition-colors hover:bg-gray-700">
	<Avatar owner={task.owner} />

	<div class="flex w-full flex-col">
		<h3>{task.description}</h3>

		<footer class="flex w-full items-center justify-between">
			<p>{task.client}</p>
			<p>{formatTime(task.timeout)}</p>
		</footer>
	</div>
</article>
