<template>
    <div class="relative h-32 fle sm:h-96 mx-0 sm:mx-10 lg:mx-20 mt-8 sm:mt-16">
        <div class="relative flex items-center sm:top-36 mt-24 sm:mt-12">
            <button class="absolute hidden sm:block left-0 h-20 w-8 bg-gray-500 bg-opacity-30 max-w-8 z-10"
                @click="clickBefore">
                <font-awesome-icon :icon="['fas', 'chevron-left']" style="color: #ffffff;" />
            </button>
            <div class="absolute w-full bg-red-50 rounded-none sm:rounded-2xl bg-cover" v-for="(item, index) in data"
                :key="item.id" v-show="index === number" :number :style="{ backgroundImage: `url('${item.bg}')` }">
                <div
                    class="w-[250px] sm:w-[400px] flex-wrap pt-1 sm:py-20 h-full rounded-s-2xl ps-8 text-white font-light">
                    <p class="text-xl sm:text-5xl mt-4 sm:mt-0 sm:mb-4 font-medium">Learn something new everyday.
                    </p>
                    <span class="text-xs sm:text-base">Become professionals and ready to join the world.</span>
                    <button
                        class="bg-white sm:w-2/4 p-1 sm:mt-8 rounded-xl text-[#3DCBB1] text-xs sm:text-base font-normal">
                        Explore Photography
                    </button>
                </div>
                <div class="flex items-end justify-end h-full mb-10 rounded-e-2xl text-white">
                    <div class="absolute right-4 bottom-4 flex w-[400px] justify-between mb-3 me-3">
                        <div class=" hidden sm:flex items-center">
                            <div class="rounded-lg max-w-10 me-3">
                                <img :src="item.avatar" alt="" class="rounded-full min-w-12 h-12 border-2">
                            </div>
                            <div class="block">
                                <p>{{ item.name }}</p>
                                <span class="font-light">Photographer</span>
                            </div>
                        </div>
                        <div class="hidden sm:block font-light text-end">
                            <p>Winner Photo 2017 Awwards</p>
                            <p>Joined Klevr since 2006</p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="absolute hidden sm:block right-0 h-20 w-8 bg-gray-500 bg-opacity-30 max-w-8"
                @click="clickNext">
                <font-awesome-icon :icon="['fas', 'chevron-right']" style="color: #ffffff;" />
            </button>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import { data } from '@/sample_data/list_carousel';

const number = ref(0)

const clickNext = () => {
    number.value++
    if (number.value > data.length - 1) {
        number.value = 0
    }
};

const clickBefore = () => {
    number.value--
    if (number.value < 0) {
        number.value = data.length - 1
    }
};

setInterval(() => {
    clickNext()
}, 3000)
</script>