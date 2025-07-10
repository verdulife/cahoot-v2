<script lang="ts">
	import TaskCard from '@/components/TaskCard.svelte';

	let { title, tasks } = $props();
</script>

<section class="flex flex-1 flex-col rounded-lg border border-gray-800 bg-gray-900">
	<header class="flex items-center justify-between p-4">
		<h2 class="text-lg font-bold">{title}</h2>

		<button
			class="group cursor-pointer rounded-full bg-conic from-emerald-300 via-violet-700 to-emerald-300 p-[2px]"
		>
			<p
				class="rounded-full bg-gray-950 px-2 py-1 text-xs font-bold text-gray-100 group-hover:bg-transparent group-hover:text-gray-950"
			>
				AÑADIR TAREA
			</p>
		</button>
	</header>

	<div id="scroller" class="flex flex-1 flex-col gap-2 overflow-y-auto p-4 pt-0 pr-2">
		{#each tasks as task}
			<TaskCard {task} />
		{:else}
			<div class="flex flex-col items-center justify-center text-center flex-1">
				<p>No hay tareas pendientes</p>
			</div>
		{/each}
	</div>
</section>

<style>
	#scroller {
		scrollbar-width: thin;
		scrollbar-color: #1e2939 transparent;
	}
</style>
