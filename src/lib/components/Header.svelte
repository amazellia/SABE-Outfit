<script>
	export let header;
    export let logo;

    let navIsOpen = false;

    function toggleNav() {
        navIsOpen = !navIsOpen;
    }
</script>

<header class="w-full h-full sticky z-20 top-0 md:relative lg:relative">
    <div class="navbar top-0 md:bg-base-100">
        <div class="flex-1">
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
        </div>
        {#if header}
        <div class="flex-none hidden lg:block" class:open={navIsOpen}>
            <ul class="flex space-x-4 lg:space-x-8 text-lg font-bold">
                {#each header as blok}
                    <li class="hover:text-[#ff0085] p-3">
                        <a href={blok.link.url}> {blok.name}</a>
                    </li> 
                {/each}
            </ul>
        </div>
        {/if}
        <div class="mobile-nav fixed inset-0 bg-white z-50 transform transition-transform ease-in-out duration-300" class:open={navIsOpen}>
            <div class="flex items-center justify-end p-4">
                <button class="text-gray-500 btn btn-circle" on:click={toggleNav}>
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
        </div>
            <ul class="flex flex-col items-center justify-center space-y-4 text-lg font-bold">
                {#each header as blok}
                    <li class="hover:text-[#ff0085]">
                        <a href={blok.link.url}> {blok.name}</a>
                    </li>
                {/each}
            </ul>
        </div>
        <button class="lg:hidden btn" on:click={toggleNav}>
            <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg
                class="w-6 h-6 hidden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    </div>
   
</header>

<style>
    .open { display: block; }
    .close { display: none; }

    .mobile-nav {
        display: none;
    }
    
    .mobile-nav.open {
        display: block;
    }
</style>
