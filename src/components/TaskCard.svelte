<script>
  let { task } = $props();
</script>

<article class="flex flex-col gap-1 rounded-lg border border-gray-800 p-2 hover:bg-gray-900 transition-colors">
  <p>{task.client}</p>
  <h3>{task.description}</h3>
  <p>{task.owner}</p>
</article>