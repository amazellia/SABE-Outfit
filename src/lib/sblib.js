import { apiPlugin, storyblokInit } from '@storyblok/svelte';
// 001 Import the environment variables
import { PUBLIC_ACCESS_TOKEN } from '$env/static/public';
import { PUBLIC_REGION } from '$env/static/public';

export async function useStoryblok(accessToken = '') {
	// 002 setting the access token (from environment variable)
	accessToken = accessToken === '' ? PUBLIC_ACCESS_TOKEN : accessToken;
	// 003 call storyblok init
	await storyblokInit({
		// 004 using the access token
		accessToken: accessToken,
		// 005 using the apiPlugin (for connecting with Stroyblok API)
		use: [apiPlugin],
		// 006 listing the needed components
		components: {
			feature: (await import('$lib/components/Feature.svelte')).default,
			grid: (await import('$lib/components/Grid.svelte')).default,
			page: (await import('$lib/components/Page.svelte')).default,
			teaser: (await import('$lib/components/Teaser.svelte')).default,
            hero: (await import('$lib/components/Hero.svelte')).default,
            project: (await import('$lib/components/Project.svelte')).default,
            'all-projects': (await import('$lib/components/AllProjects.svelte')).default,
            'project-highlights': (await import('$lib/components/ProjectHighlights.svelte')).default,
            'rich-text': (await import('$lib/components/Rich-Text.svelte')).default,
            'grid_item_report': (await import('$lib/components/GridReportItem.svelte')).default,
            'gallery': (await import('$lib/components/Gallery.svelte')).default,
		},
		// 007 setting some api options like https, cache and region
		apiOptions: {
			https: true,
			cache: {
				type: 'memory'
			},
			region: PUBLIC_REGION // "us" if your space is in US region
		}
	});
}