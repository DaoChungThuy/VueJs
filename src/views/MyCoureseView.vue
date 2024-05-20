<template>
    <div class="container">
        <div class="w-full hidden sm:block">
            <TheCarousel />
        </div>
        <div class="block sm:hidden mt-4">
            <TheCategory />
        </div>
        <div class=" hidden sm:flex justify-between mx-6 md:mx-10 lg:mx-20 mb-10">
            <div class="block">
                <h2 class="font-medium text-lg">My Course</h2>
                <span class="text-sm">List of your courses</span>
            </div>
            <div class="flex gap-4">
                <div class="flex items-center border-2 border-black py-0 px-4 h-8 rounded-sm w-44">
                    <select class="outline-none w-full" name="" id="">
                        <option value="">All Rated</option>
                    </select>
                </div>
                <div class="flex items-center border-2 border-black py-0 px-4 h-8 rounded-sm w-44">
                    <select class="outline-none " name="" id="">
                        <option value="">Recently added</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mx-6 md:mx-10 lg:mx-20 mt-10 sm:mt-0">
            <ListMyCourse :data="data" />
        </div>
        <div class="h-9 hidden sm:flex justify-center gap-2 mt-6 mb-10">
            <button class="w-9 h-full border-2 flex justify-center items-center border-gray-400 rounded-lg me-6">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.99998 11.2895C7.38998 10.8995 7.38998 10.2695 6.99998 9.87949L3.11998 5.99949L6.99998 2.11949C7.38998 1.72949 7.38998 1.09949 6.99998 0.70949C6.60998 0.319489 5.97998 0.319489 5.58998 0.70949L0.999981 5.29949C0.609981 5.68949 0.609981 6.31949 0.999981 6.70949L5.58998 11.2995C5.96998 11.6795 6.60998 11.6795 6.99998 11.2895Z"
                        fill="#1B1B1B" fill-opacity="0.6" />
                </svg>
            </button>
            <button class="w-9 h-full border-2 flex justify-center items-center border-gray-400 rounded-lg">
                1
            </button>
            <button class="w-9 h-full border-2 flex justify-center items-center border-gray-400 rounded-lg">
                2
            </button>
            <button class="w-9 h-full border-2 flex justify-center items-center border-gray-400 rounded-lg">
                3
            </button>
            <button class="w-9 h-full border-2 flex justify-center items-center border-gray-400 rounded-lg">
                4
            </button>
            <button class="w-9 h-full border-2 flex justify-center items-center border-gray-400 rounded-lg">
                5
            </button>
            <button class="w-9 h-full border-2 flex justify-center items-center border-gray-400 rounded-lg">
                ...
            </button>
            <button class="w-9 h-full border-2 flex justify-center items-center border-gray-400 rounded-lg">
                98
            </button>
            <button class="w-9 h-full border-2 flex justify-center items-center border-gray-400 rounded-lg ms-6">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.00002 0.71051C0.61002 1.10051 0.61002 1.73051 1.00002 2.12051L4.88002 6.00051L1.00002 9.88051C0.61002 10.2705 0.61002 10.9005 1.00002 11.2905C1.39002 11.6805 2.02002 11.6805 2.41002 11.2905L7.00002 6.70051C7.39002 6.31051 7.39002 5.68051 7.00002 5.29051L2.41002 0.70051C2.03002 0.32051 1.39002 0.32051 1.00002 0.71051Z"
                        fill="#1B1B1B" fill-opacity="0.6" />
                </svg>
            </button>
        </div>
        <div class="w-full flex flex-col">
            <div
                class="mx-6 sm:mx-10 lg:mx-20 bg-sky-500 rounded-lg text-white font-light mb-10 hidden sm:flex justify-between items-center mt-12">
                <div class="text-nowrap p-10 none hidden lg:block">
                    <h2 class="font-bold text-lg">Join and get amazing discount</h2>
                    <span>With our responsive themes and mobile and desktop appss</span>
                </div>
                <h2 class="block lg:hidden font-bold text-sm p-10">Get Amazing Discount and Course Update</h2>
                <div class="flex me-20">
                    <div class="flex justify-end items-center h-10 pe-3 bg-gray-500 bg-opacity-30 rounded me-8">
                        <div class="border-solid items-center">
                            <input type="text" placeholder="Email Address"
                                class="pl-2 bg-transparent bg-opacity-30 outline-none">
                        </div>
                        <div class="rounded-sm max-w-6 items-center">
                            <button>
                                <img src="@/assets/img/search.png" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="bg-[#3DCBB1] h-10 flex items-center rounded-lg">
                        <button class="w-[110px] font-medium">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import TheCarousel from '@/components/Home/TheCarousel.vue'
import ListMyCourse from '@/components/Home/ListMyCourse.vue'
import TheCategory from '@/components/Home/TheCategory.vue'
import { my_courses } from '@/sample_data/list_my_course'
import type { MyCourse } from '@/types/common';

const data: MyCourse[] = my_courses.map((item: MyCourse) => ({
    ...item,
    percent: ((item.watched ?? 0) / (item.max ?? 1) * 100)
}))
</script>