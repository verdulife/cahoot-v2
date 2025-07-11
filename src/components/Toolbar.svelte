<script lang="ts">
	import { WindowState } from '@/lib/stores';
	import { WindowStates } from '@/lib/types';

	function start() {
		window.resizeTo(screen.width / 4, screen.height);
		$WindowState = WindowStates.DAY;
	}
</script>

<aside class="flex items-center p-4 pr-0">
	<section
		class="flex h-1/4 w-10 flex-col justify-center items-center gap-2 rounded-full border border-gray-900 bg-gray-900/50"
	>
		<button onclick={start}> + </button>
	</section>
</aside>
