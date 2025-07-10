<script>
	const { owner } = $props();
	const { name, color } = owner;
	const firstLeter = name.split('')[0];
</script>

<picture
	style="--avatar-color: {color}"
	class="bg-[var(--avatar-color)] flex size-5 items-center justify-center text-center rounded-full text-xs font-bold text-black"
	title={name}
>
	{firstLeter}
</picture>
