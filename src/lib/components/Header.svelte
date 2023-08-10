<script>
	export let header;
    export let logo;
</script>
 
<header class="w-full h-full">
    <div class="container h-40 mx-auto flex items-center justify-between">
        {#if logo}
        <a href="/">
            <img
            src={logo.filename}
            alt={logo?.alt}
            class="w-28 h-28 flex justify-center items-center text-center"
            />
        </a> 
        {/if}
        {#if header}
        <nav>
            <ul class="flex space-x-8 text-lg font-bold">
                {#each header as blok}
                    <li class="hover:text-[#ff0085]">
                        <a href={blok.link.url}> {blok.name}</a>
                    </li> 
                {/each}
            </ul>
        </nav>
        {/if}
    </div>
</header>