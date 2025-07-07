<script lang="ts">
	import TaskCard from '@/components/TaskCard.svelte';

	let { title, tasks } = $props();
</script>

<section class="flex flex-col gap-4 rounded-lg border border-gray-800 p-4">
	<header class="flex items-center justify-between">
		<h2 class="text-lg font-bold">{title}</h2>

		<button
			class="group cursor-pointer rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 p-[2px]"
		>
			<p
				class="rounded-full bg-gray-950 px-2 py-1 text-xs text-gray-100 group-hover:bg-transparent group-hover:text-gray-950"
			>
				AÑADIR TAREA
			</p>
		</button>
	</header>

	{#each tasks as task}
		<TaskCard {task} />
	{:else}
		<div class="flex flex-col items-center justify-center text-center flex-1">
			<p>No hay tareas pendientes</p>
		</div>
	{/each}
</section>
