 
<script>
    import { storyblokEditable, renderRichText } from '@storyblok/svelte';
    export let blok;
    $: resolvedRichText = renderRichText(blok.body);
</script>
<div use:storyblokEditable={blok}>
    <div class="grid justify-items-center mx-auto mb-12">
        <div class="w-2/3 rich_style prose">{@html resolvedRichText}</div>
    </div>
</div>

<style>
    :global(.rich_style ul) {
        list-style-type:disc;
        padding: 1rem;
    }

    :global(.rich_style ol) {
        list-style-type:lower-roman;
        padding: 1rem;
    }

    :global(p) {
        padding-bottom: 1rem;
    }

    :global(.rich_style h2) {
        padding-bottom: 1rem;
        color: #FF0085;
        font-weight:700;
    }
</style>