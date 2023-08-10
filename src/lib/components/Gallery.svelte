 
<script>
    import { storyblokEditable } from '@storyblok/svelte';
    export let blok;
    let images = [];
    blok.images.map((img) =>
    images.push( 
        {
        original: img.filename,
        thumbnail:img.filename,
        originalAlt: img.alt,
        }
  ))
</script>
<div use:storyblokEditable={blok}>
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div class="-m-1 flex flex-wrap md:-m-2">
            {#each images as img}
            <div class="flex w-1/3 flex-wrap">
            <img
            src="{img.filename}/m/1600x0"
            alt={img.alt}
            />
            </div>
            {/each}
        </div>
    </div>
</div>