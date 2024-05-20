<template>
    <div class="container">
        <div class="mx-6 sm:mx-10 lg:mx-20">
            <div class="hidden sm:flex justify-between shadow-sm py-2 mb-10 items-center mt-6">
                <div class="flex gap-4 items-center text-xs md:text-sm">
                    <div class="flex border-2 border-gray-400 py-0 lg:px-4 h-8 rounded-sm md:w-32 lg:w-44">
                        <select class="outline-none w-full" name="" id="">
                            <option value="">All Rated</option>
                        </select>
                    </div>
                    <div class="flex items-center border-2 border-gray-400 py-0 lg:px-4 h-8 rounded-sm md:w-32 lg:w-44">
                        <select class="outline-none " name="" id="">
                            <option value="">Recently added</option>
                        </select>
                    </div>
                    <div class="flex items-center border-2 border-gray-400 py-0 lg:px-4 h-8 rounded-sm md:w-32 lg:w-44">
                        <select class="outline-none " name="" id="">
                            <option value="">Recently added</option>
                        </select>
                    </div>
                    <div class="flex items-center border-2 border-gray-400 py-0 lg:px-4 h-8 rounded-sm md:w-32 lg:w-44">
                        <select class="outline-none " name="" id="">
                            <option value="">Recently added</option>
                        </select>
                    </div>
                </div>
                <button class="rounded-xl text-nowrap text-white bg-base-primary h-10 px-4 ms-6">Apply Filter</button>
            </div>
            <div class="hidden sm:flex justify-between items-center">
                <p>Showing 2,312 results of Kitani Studio</p>
                <div class="flex items-center border-2 border-black py-0 px-4 h-8 rounded-sm w-44 text-sm">
                    <select class="outline-none w-full" name="" id="">
                        <option value="">All Rated</option>
                    </select>
                </div>
            </div>
            <div class="block mt-8">
                <h1 class="font-medium text-lg">Top Result</h1>
                <p class="font-light text-sm">We know the best things for You. Top picks for You.</p>
            </div>
            <div class="flex flex-nowrap overflow-x-auto sm:grid sm:grid-cols-3 mt-6 lg:grid-cols-4 gap-4">
                <ListCourse :data="dataCourse" />
            </div>
            <div class="hidden sm:flex justify-center mt-8 mb-16">
                <button class="text-white bg-base-primary rounded-xl px-8 py-2" @click=showMore()
                    v-if="trending_course.length > dataCourse?.length">Show
                    more</button>
            </div>
            <div class="my-8 sm:hidden">
                <h1 class="font-medium text-lg mb-4">Top Result</h1>
                <ListTeacher :data='list_teacher' />
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import ListCourse from '@/components/Home/ListCourse.vue';
import ListTeacher from '@/components/Home/ListTeacher.vue';
import { reactive } from 'vue';
import { trending_course } from '@/sample_data/list_course';
import { list_teacher } from '@/sample_data/list_teacher';
import type { Course } from '@/types/common';

const dataCourse = reactive<Course[]>([]);
Object.assign(dataCourse, trending_course.slice(0, 2));

const showMore = () => {
    const filteredData = trending_course.filter(d => !Object.values(dataCourse).some((item: any) => item.id === d.id));
    dataCourse.push(...filteredData.slice(0, 2));
}
</script>