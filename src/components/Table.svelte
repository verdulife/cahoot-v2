<script lang="ts">
	let { title, tasks } = $props();
</script>

<section class="rounded-lg border border-gray-800 p-4">
	<header class="flex items-center justify-between">
		<h2 class="text-lg font-bold">{title}</h2>

		<button
			class="cursor-pointer rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 p-[2px] group"
		>
			<p class="rounded-full bg-gray-950 px-2 py-1 text-xs text-gray-100 group-hover:text-gray-950 group-hover:bg-transparent">AÑADIR TAREA</p>
		</button>
	</header>

	{#each tasks as task}
		<p>{task}</p>
	{:else}
		<p>No hay tareas pendientes</p>
	{/each}
</section>
