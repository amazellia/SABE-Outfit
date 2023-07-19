<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import Header from '$lib/components/Header.svelte';
	
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
		
	<Header header={data.header} />
		{#if data.story}
			<StoryblokComponent blok={data.story.content} />
		{/if}
	</div>
{/key}