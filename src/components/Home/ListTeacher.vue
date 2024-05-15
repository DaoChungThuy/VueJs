<template>
    <div class="w-full flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6">
        <div v-for="(item, index) in props.data" :key="index" class="relative rounded-2xl flex-none w-1/3 lg:w-auto">
            <img class="rounded-2xl"
                src="https://s3-alpha-sig.figma.com/img/1422/6848/745ebd09c7f1668bb115736bee727c83?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tfnulm2ZgtoXZxLKisS1WVVQsV2Lw5aNE8FuM6McguV~C6x0kPJWWuIY3x3ZpwSiYk4A9fCU9zCqhX8RxOjHdqVv2Kvbi1VwHwlstTMp6Tn0j-U6AMwfzD2GZ5q6JiDX-L8I~JI2ydjbFxe8LvblfLqKuEM60hnaKKJtFCrtTpy0cODpaMFCHpGg9pqitKJf95R0TBSi6fideRdi~9jWlMyxbMW-bCnPCofCnH0cNB4W8SkshQToMho03pmEf2qJiIOPV-Kti8Oj2weCoEVqZER3JftyVydigy7PGqmzaMAgKCeLUu~wgqmYcH7uHZqHa4Gp39bVKoMS-FzLh9cbAg__"
                alt="">
            <div class="absolute bottom-0 flex-wrap justify-center text-center w-full text-white">
                <h4 class="font-bold">{{ item.name }}</h4>
                <p class="text-xs mb-4">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>

const props = defineProps<{
    data: any | null;
}>();

</script>