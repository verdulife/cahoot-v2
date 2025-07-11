<script lang="ts">
	import '@fontsource-variable/inter';
	import '@/app.css';

	import { metadata } from '@/lib/metadata';
	import { onMount } from 'svelte';

	let { children } = $props();
	const { name, title, description, image, url } = metadata;

	onMount(() => {
		window.resizeTo(screen.width, screen.height);
		 //TODO: add custom event to resize automatically the window
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="apple-mobile-web-app-title" content={name} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={name} />
	<meta property="og:title" content={title} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
	<meta property="og:description" content={description} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:image:alt" content={title} />

	<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": {url},
      "alternateName": {name}
    }
	</script>
</svelte:head>

{@render children()}
