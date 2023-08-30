<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;

	onMount(() => {
		if (data.story) {
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
		}
	});
</script>
<svelte:head>
	<title>out(fit)</title>
</svelte:head>
<div>
	<Header header={data.header} logo={data.logo} />
	<StoryblokComponent blok={data.story.content} />
	<Footer footer={data.footer} logo={data.logo} />
</div>