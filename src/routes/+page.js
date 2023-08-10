
import { useStoryblokApi } from '@storyblok/svelte';
import { useStoryblok } from '$lib/sblib';
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load() {
	await useStoryblok();

	let storyblokApi = await useStoryblokApi();
	const resolveRelations = ['project-highlights.projects']
	const dataStory = await storyblokApi.get('cdn/stories/home', {
		version: 'draft',
		resolve_relations: resolveRelations,

	});

	const dataConfig = await storyblokApi.get('cdn/stories/config/', {
		version: 'draft',
		resolve_links: 'url'
	  });

	return {
		story: dataStory.data.story,
		header: dataConfig.data.story.content.header_menu,
		logo: dataConfig.data.story.content.logo,
		footer: dataConfig.data.story.content
	};
}