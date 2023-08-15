<script>
	export let header;
    export let logo;

    let navIsOpen = false;

    function toggleNav() {
        navIsOpen = !navIsOpen;
    }
</script>
<header class="w-full h-full">
    <div class="container h-40 mx-auto flex flex-row items-center justify-between p-6">
        {#if logo}
        <a href="/">
            <img
            src={logo.filename}
            alt={logo?.alt}
            class="w-auto h-20 lg:h-28 flex justify-center items-center text-center"
            class:close={navIsOpen}
            />
        </a> 
        {/if}
        {#if header}
        <nav class="hidden lg:block" class:open={navIsOpen}>
            <ul class="flex space-x-4 lg:space-x-8 text-lg font-bold">
                {#each header as blok}
                    <li class="hover:text-[#ff0085] ">
                        <a href={blok.link.url}> {blok.name}</a>
                    </li> 
                {/each}
            </ul>
        </nav>
        {/if}
        <button class="lg:hidden" on:click={toggleNav}> <!-- This button will show on mobile only -->
            <svg class="w-6 h-6" class:close={navIsOpen} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg class="w-6 h-6 hidden" class:open={navIsOpen} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    </div>
</header>

<style>
    .open {display: block;}
    .close { display: none;}

</style>