<script>
    export let footer;
    export let logo;
</script>

<footer class="p-12">
    <div class="flex flex-row justify-stretch">
        {#if footer}
        <div class="basis-1/4 flex justify-center items-center text-center">
            <img
            src={logo.filename}
            alt={logo.alt}
            class="w-auto h-1/2 flex justify-center items-center text-center"
            />
        </div>
        <div class="basis-1/6 text-[#ff0085]">
            <b class="no-underline bold">Contact Us</b><br>
            <a class=" text-[#ff0085] underline underline-offset-8" href={footer.phone}>Phone</a> <br>
            <a class=" text-[#ff0085] underline underline-offset-8" href="mailto:{footer.email}">Email</a> <br><br>

            <a class="underline underline-offset-8" href={footer.instagram.url} target="_blank">Instagram</a><br>
            <a class="underline underline-offset-8" href={footer.youtube.url} target="_blank">YouTube</a><br>
            <a class="underline underline-offset-8" href={footer.facebook.url} target="_blank">Facebook</a><br>
            <a class="underline underline-offset-8" href={footer.linkedin.url} target="_blank">LinkedIn</a>
        </div>
        <div class="basis-1/2">
            Would you like to know our monthly updates, events on working bees, and different ways to get involved?
            Sign up here: 
            <br><br>
            {footer.acknowledgement}<br>
        </div>
        {/if}
    </div>
    <div  class="flex items-center justify-center text-2xl text-[#ff0085] font-bold text-center p-8">
        {footer.copyright}
    </div>
</footer>