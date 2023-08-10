<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	export let data;
	onMount(() => {
		if (data.story) {
			const resolveRelations = ['project-highlights.projects'];
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory), {
				resolveRelations: resolveRelations
			});
		}
	});
</script>
 
<svelte:head>
	<title>{data.story.name}</title>
</svelte:head>
{#key data}
	<div>
	<Header header={data.header} logo={data.logo} />
		{#if data.story}
			<StoryblokComponent blok={data.story.content} />
		{/if}
	<Footer footer={data.footer} logo={data.logo} />
	</div>
{/key}