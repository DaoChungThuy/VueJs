<template>
    <div class="w-full">
        <div class="mx-6 sm:mx-10 lg:mx-20 flex justify-start overflow-x-scroll gap-x-2">
            <div v-for="item in category" :key="item.id">
                <button
                    class="sm:border-2 sm:focus:border-base-primary sm:border-gray-400 rounded-none sm:rounded-xl focus:border-b-2 border-base-primary px-5 whitespace-nowrap  py-1 font-light">
                    {{ item.name }}
                </button>
            </div>
        </div>

    </div>
</template>
<script setup lang='ts'>
import { category } from '@/sample_data/list_category';

</script>
<style></style>