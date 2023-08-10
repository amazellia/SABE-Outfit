 
<script>
    import { storyblokEditable} from '@storyblok/svelte';
    export let blok;
</script>
<div use:storyblokEditable={blok}>
    <a href={blok.File.filename}>
        <img
            src="{blok.cover_image?.filename}/m/600x0"
            alt={blok.cover_image?.alt}
            class="w-full h-48 xl:h-72 object-cover pointer-events-none"
        />
    </a>
    <div class="p-8">
        <h3 class="text-xl text-[#ff0085] font-bold mb-3">
            {blok.title}
        </h3>
        <p class="text-xxs">
            {blok.Description}
        </p>
    </div>
</div>