import { apiPlugin, storyblokInit, RichTextSchema } from '@storyblok/svelte';
// 001 Import the environment variables
import { PUBLIC_ACCESS_TOKEN } from '$env/static/public';
import { PUBLIC_REGION } from '$env/static/public';

import cloneDeep from "clone-deep";
const mySchema = cloneDeep(RichTextSchema); // you can make a copy of the default RichTextSchema
// ... and edit the nodes and marks, or add your own.
// Check the base RichTextSchema source here https://github.com/storyblok/storyblok-js-client/blob/master/source/schema.js

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
            grid_item_report: (await import('$lib/components/GridReportItem.svelte')).default,
            gallery: (await import('$lib/components/Gallery.svelte')).default,
		},
		// 007 setting some api options like https, cache and region
		apiOptions: {
			https: true,
			cache: {
				type: 'memory'
			},
			region: PUBLIC_REGION // "us" if your space is in US region
		},
		richText: {
			schema: mySchema,
			resolver: (component, blok) => {
			  switch (component) {
				case "gallery":
					if (blok.type == "carousel" || blok.type == undefined) {
						const images = blok.images.map((item, i, img) => {
							const previousItem = i > 0 ? img[i - 1] : null;
							const nextItem = i < img.length - 1 ? img[i + 1] : null;
						
							const prev = previousItem
								? `<a href="#${previousItem.id}" class="btn btn-circle">❮</a>`
								: `<a href="#" class="btn btn-circle bg-[#94a3b8]">❮</a>`;
							
							const next = nextItem
								? `<a href="#${nextItem.id}" class="btn btn-circle">❯</a>`
								: `<a class="btn btn-circle hover:bg-sky-700 bg-[#94a3b8]">❯</a>`;
						
							return `<div id="${item.id}" class="carousel-item relative w-full h-full">
								<img src="${item.filename}" alt="${item.alt}" class="w-full h-auto object-cover"/>
								<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
									${prev}
									${next}
								</div>
							</div>`;
						});
						const galleries = images.join('');
	
						return `
						<div class="carousel w-full">
							${galleries}
						</div>`
					};

					if (blok.type = "sponsors") {
							const images = blok.images.map((item) => {
								return ` 
								<div id="${item.id}" class="w-full p-2">
								<img src="${item.filename}" alt="${item.alt}" class="w-full h-auto object-cover"/>
								</div>`;
							});
							const galleries = images.join('');
		
							return `
							<div class="carousel w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    						${galleries}
							</div>`
					};
				case "video":
					return null
				default:
				  return "Resolver not defined";
			  }
			},
		},
	});
}