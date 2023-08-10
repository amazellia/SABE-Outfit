 
<script>
    import { storyblokEditable, renderRichText } from '@storyblok/svelte';
    export let blok;
    $: resolvedRichText = renderRichText(blok.content);
</script>
<div use:storyblokEditable={blok}>
    <!-- <img
        src="{blok.image.filename}/m/1600x0"
        alt={blok.image.alt}
        class="w-full h-[360px] lg:h-[450px] object-cover"
    /> -->
    <div class="grid justify-items-center mx-auto mb-12">
        <h1 class="text-6xl text-[#ff0085] font-bold mt-12 mb-4 text-center">{blok.title}</h1>
        <h2 class="text-2xl text-[#1d243d] font-bold mb-4">
            {blok.subtitle}
        </h2>
        <div class="w-2/3 prose">{@html resolvedRichText}</div>
    </div>
</div>