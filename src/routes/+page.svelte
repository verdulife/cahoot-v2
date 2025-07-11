<script lang="ts">
	import { type TaskType, TaskState } from '@/lib/types';
	import { mockTasks } from '@/lib/mock';
	import { COLUMNS } from '@/lib/consts';
	import Table from '@/components/Table.svelte';
	import Toolbar from '@/components/Toolbar.svelte';

	const tasks: Array<TaskType> = mockTasks;
	const groupedTasks = Object.groupBy(tasks, (task) => task.state);
</script>

<div class="flex size-full">
	<Toolbar />

	<main class="inline-flex size-full gap-4 p-4">
		<Table title={COLUMNS.BACKLOG} tasks={groupedTasks[TaskState.BACKLOG]} />
		<Table title={COLUMNS.THIS_WEEK} tasks={groupedTasks[TaskState.THIS_WEEK]} />
		<Table title={COLUMNS.TODAY} tasks={groupedTasks[TaskState.TODAY]} />
		<Table title={COLUMNS.DONE} tasks={groupedTasks[TaskState.DONE]} />
	</main>
</div>
