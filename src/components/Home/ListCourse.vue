<template>
    <div v-for="(item, index) in props.data" :key="index" class="relative min-w-44">
        <router-link :to="{ name: 'detail' }">
            <div class="W-1/2 mb-2">
                <img :src="item.img" alt=""
                    class="rounded-2xl h-[95px] min-[200px]:h-[120px] sm:h-36 md:h-32 lg:h-36 xl:h-44 w-full">
            </div>
            <div class="absolute top-2 left-2 rounded-2xl bg-[#3DCBB1] text-white text-xs p-1">
                <p>Best Seller</p>
            </div>
            <div class="absolute top-2 left-20 rounded-2xl bg-[#A04AE3] text-white text-xs p-1">
                <p>20% OFF</p>
            </div>
            <h4 class="font-medium text-sm">VUE JS SCRATCH COURSE</h4>
            <div class="flex mt-2 items-center gap-2 text-[#3DCBB1] font-light">
                <font-awesome-icon :icon="['far', 'user']" />
                <p>{{ item.name }}</p>
            </div>
            <span class="text-xs sm:text-base">
                More Then 8yr Experience as illustrator. Learn how to becoming professional
                illustrator Now...
            </span>
            <div class="flex gap-1 my-2 items-center">
                <font-awesome-icon :icon="['fas', 'star']" style="color: #FFD43B;" />
                <font-awesome-icon :icon="['fas', 'star']" style="color: #FFD43B;" />
                <font-awesome-icon :icon="['fas', 'star']" style="color: #FFD43B;" />
                <font-awesome-icon :icon="['fas', 'star']" style="color: #FFD43B;" />
                <font-awesome-icon :icon="['fas', 'star']" style="color: #FFD43B;" />
                <p>(1.2K)</p>
            </div>
            <div class="flex gap-1">
                <h4 class="font-medium">{{ item.price }}</h4>
                <h4 class="font-light line-through">$32.90</h4>
            </div>
        </router-link>
    </div>
</template>
<script setup lang='ts'>
import type { Course } from '@/types/common';

const props = defineProps<{
    data: Course[] | null;
}>();
</script>