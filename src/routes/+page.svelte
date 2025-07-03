<script lang="ts">
	import Table from '@/components/Table.svelte';

	const tasks: Array<Object> = [];
</script>

<main class="grid flex-1 grid-cols-4 gap-4 p-6">
	<Table title="Backlog">
		
	</Table>

	<Table title="Esta semana">
		{#each tasks as task}
			<p>{task}</p>
		{:else}
			<p>No hay tareas pendientes</p>
		{/each}
	</Table>

	<Table title="Para hoy">
		{#each tasks as task}
			<p>{task}</p>
		{:else}
			<p>No hay tareas pendientes</p>
		{/each}
	</Table>

	<Table title="Hecho">
		{#each tasks as task}
			<p>{task}</p>
		{:else}
			<p>No hay tareas pendientes</p>
		{/each}
	</Table>
</main>
