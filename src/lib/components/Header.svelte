<script>
	export let header;
</script>
 
<header class="w-full h-24 bg-[#f7f6fd]">
    <div class="container h-full mx-auto flex items-center justify-between">
        <a href="/">
            <h1 class="text-[#ff0085] text-3xl font-bold">Out&#40;fit&#41;</h1>
        </a>
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