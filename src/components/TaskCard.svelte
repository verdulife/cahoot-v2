<script lang="ts">
	import type { SubtaskType } from '@/lib/types';
	import { formatTime } from '@/lib/utils';
	import Avatar from '@/components/Avatar.svelte';

	let { task } = $props();
	let subtasks: SubtaskType[] = $state(task.subtasks);

	function getDoneSubtasks(): number {
		return subtasks.filter((subtask) => subtask.done).length;
	}
</script>

<article class="flex flex-col gap-4 rounded-lg bg-gray-800 p-2">
	<header class="flex items-center gap-2">
		<Avatar owner={task.owner} />
		<h3>{task.description}</h3>
	</header>

	{#if task.subtasks.length > 0}
		<main>
			<details class="overflow-clip rounded-md bg-gray-700" name="subtasks">
				<summary class="flex items-center justify-between p-2 text-xs text-gray-900">
					<p>Subtareas</p>
					<p>{getDoneSubtasks()}/{subtasks.length}</p>
				</summary>

				<ul class="flex flex-col gap-2 border-t border-gray-800 p-2 text-sm text-gray-400">
					{#each subtasks as subtask}
						<li>
							<label class="flex items-center justify-between gap-1">
								<p class:line-through={subtask.done}>{subtask.description}</p>
								<input
									class="bg-gradient-500 accent-gray-500"
									type="checkbox"
									bind:checked={subtask.done}
								/>
							</label>
						</li>
					{/each}
				</ul>
			</details>
		</main>
	{/if}

	<footer class="flex w-full items-center justify-between text-xs text-gray-500">
		<p>{task.client}</p>
		<p>{formatTime(task.timeout)}</p>
	</footer>
</article>
