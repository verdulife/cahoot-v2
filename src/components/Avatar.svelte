<script>
	const { owner } = $props();
	const firstLeter = owner.split('')[0];
</script>

<picture
	class="flex size-6 items-center justify-center rounded-full bg-conic from-emerald-300 via-violet-700 to-emerald-300 text-xs font-bold text-black"
	title={owner}
>
	{firstLeter}
</picture>
