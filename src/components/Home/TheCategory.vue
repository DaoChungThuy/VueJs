<template>
    <div class="w-full">
        <div class="mx-6 sm:mx-20 flex justify-start overflow-x-auto gap-x-2">
            <div v-for="item in category" :key="item.id">
                <button
                    class="sm:border-2 rounded-none sm:rounded-xl focus:text-[#3DCBB1] px-3 whitespace-nowrap  py-1 font-light">
                    {{ item.name }}
                </button>
            </div>
        </div>

    </div>
</template>
<script setup lang='ts'>
const category = [
    {
        id: '1',
        name: 'All'
    },
    {
        id: '2',
        name: 'VueJS'
    },
    {
        id: '3',
        name: 'Laravel'
    },
    {
        id: '4',
        name: 'Web Progaming'
    },
    {
        id: '5',
        name: 'Mobile Progaming'
    },
    {
        id: '6',
        name: 'Backend Develop'
    },
    {
        id: '7',
        name: 'Adobe Photoshop'
    },
    {
        id: '8',
        name: 'Tailwind'
    },
    {
        id: '8',
        name: 'UI Design'
    },
    {
        id: '9',
        name: 'Adobe'
    },
]
</script>
<style></style>