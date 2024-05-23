<template>
    <div v-for="(item, index) in props.data" :key="index" class="relative min-w-36">
        <router-link :to="{ name: 'detail' }">
            <div class="w-full">
                <img :src="item.img" alt=""
                    class="rounded-2xl object-cover h-[95px] min-[200px]:h-[120px] sm:h-36 md:h-32 lg:h-36 xl:h-44 w-full">
            </div>
            <div class="h-1 bg-gray-100">
                <div class="h-full bg-base-primary" :style="{ width: item.percent + '%' }">
                </div>
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
            <span class="text-xs sm:text-sm lg:text-base">
                {{ item.title }}
            </span>
            <div class="flex gap-1 my-2 items-center text-xs sm:text-sm lg:text-base">
                <p v-if="item.watched ?? 0 > 0">{{ item.watched }}/{{ item.max }} Videos Completed</p>
                <p v-else>Not Yest Started</p>
            </div>
        </router-link>
    </div>
</template>
<script setup lang='ts'>
import type { MyCourse } from '@/types/common';


const props = defineProps<{
    data: MyCourse[] | [];
}>();
</script>