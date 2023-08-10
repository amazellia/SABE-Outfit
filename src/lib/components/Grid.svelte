<script>
  import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
 
  export let blok;
</script>
 
<!-- class: "place-items-center" -->
<div
  use:storyblokEditable={blok}
  class="container mx-auto grid md:grid-cols-3 gap-16" 
>
  {#each blok.columns as blok}
    <div class="flex-auto items-start px-6">
      <StoryblokComponent {blok} />
    </div>
  {/each}
</div>