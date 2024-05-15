<template>
    <div class="h-32 sm:h-96 flex my-10 sm:mx-20">
        <div
            class="relative w-full mx-0 flex items-center bg-[url('@/assets/img/bg1.png')] bg-repeat bg-right rounded-none sm:rounded-2xl">
            <button class="absolute hidden sm:block left-0 h-20 w-8 bg-gray-500 bg-opacity-30 max-w-8">
                <font-awesome-icon :icon="['fas', 'chevron-left']" style="color: #ffffff;" />
            </button>
            <div class="w-[250px] sm:w-[400px] flex-wrap pt-1 sm:py-20 h-full rounded-s-2xl ps-8 text-white font-light">
                <p class="text-xl sm:text-5xl sm:mb-4 font-medium">Learn something new everyday.</p>
                <span class="text-xs sm:text-base">Become professionals and ready to join the world.</span>
                <button
                    class="bg-white sm:w-2/4 p-1 sm:mt-8 rounded-xl text-[#3DCBB1] text-xs sm:text-base font-normal">
                    Explore Photography
                </button>
            </div>
            <div class="flex items-end justify-end h-full mb-10 rounded-e-2xl text-white">
                <div class="absolute right-4 bottom-4 flex w-[400px] justify-between mb-3 me-3">
                    <div class=" hidden sm:flex items-center">
                        <div class="rounded-lg max-w-10 me-2">
                            <img src="@/assets/img/thumb.png" alt="">
                        </div>
                        <div class="block">
                            <p>Jessica Wong</p>
                            <span class="font-light">Photographer</span>
                        </div>
                    </div>
                    <div class="hidden sm:block font-light text-end">
                        <p>Winner Photo 2017 Awwards</p>
                        <p>Joined Klevr since 2006</p>
                    </div>
                </div>
            </div>
            <button class="absolute hidden sm:block right-0 h-20 w-8 bg-gray-500 bg-opacity-30 max-w-8">
                <font-awesome-icon :icon="['fas', 'chevron-right']" style="color: #ffffff;" />
            </button>
        </div>
    </div>
</template>
<script setup lang='ts'>
</script>