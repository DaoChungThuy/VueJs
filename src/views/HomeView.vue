<template>
  <div class="w-ful">
    <div class="w-full flex sm:flex-col flex-col-reverse">
      <div class="w-full">
        <TheCarousel />
      </div>
      <div class="w-full">
        <TheCategory />
      </div>
    </div>
    <div class="mx-6 sm:mx-20 sm:mt-8">
      <div class="block font-medium">
        <h1>More from Kitani Studio</h1>
        <span class="font-light">We know the best things for You. Top picks for You.</span>
      </div>
      <div class="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-4 gap-y-10 pt-6">
        <ListCourse :data="data1" />
      </div>
    </div>
    <div class="mx-6 sm:mx-20 mt-8">
      <div class="block font-medium">
        <h2>Trending Course</h2>
        <span class="font-light">We know the best things for You. Top picks for You.</span>
      </div>
      <div class=" flex overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10 pt-6">
        <ListCourse :data="data2" />
      </div>
    </div>
    <div class="mx-6 sm:mx-20 mt-8 mb-16">
      <div class="block font-medium">
        <h2>Popular Instructor</h2>
        <span class="font-light">We know the best things for You. Top picks for You.</span>
      </div>
      <div class="w-full pt-6">
        <ListTeacher :data="data3" />
      </div>
    </div>
    <div
      class="mx-6 sm:mx-20 bg-sky-500 rounded-lg text-white font-light mb-16 hidden sm:flex justify-between items-center">
      <div class="text-nowrap p-10 none hidden lg:block">
        <h2 class="font-bold text-lg">Join and get amazing discount</h2>
        <span>With our responsive themes and mobile and desktop appss</span>
      </div>
      <h2 class="block lg:hidden font-bold text-lg p-10">Get Amazing Discount and Course Update</h2>
      <div class="flex me-20">
        <div class="flex justify-end items-center h-10 pe-3 bg-gray-500 bg-opacity-30 rounded me-8">
          <div class="border-solid items-center">
            <input type="text" placeholder="Email Address" class="pl-2 bg-transparent bg-opacity-30 outline-none">
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
    <div class="mx-6 flex sm:hidden h-52 bg-base-primary mb-6 text-white">
      <div class="w-3/5 ps-8 pt-8">
        <p>EBINAR</p>
        <span class="text-xs">August 16, 2020</span>
        <h4 class="text-lg">Film Maker Skillset for Beginner.</h4>
        <p class="font-light ">Kitani Sarasvati</p>
        <button class="border p-1 rounded-2xl">Get it Now</button>
      </div>
      <div class="w-2/5 overflow-hidden">
        <img src="@/assets/img/userb.png" alt="">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TheCarousel from '@/components/Home/TheCarousel.vue'
import TheCategory from '@/components/Home/TheCategory.vue';
import ListCourse from '@/components/Home/ListCourse.vue';
import ListTeacher from '@/components/Home/ListTeacher.vue';

const data1 = [
  {
    id: '1',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'thuy',
    price: '30$'
  },
  {
    id: '2',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'thuy',
    price: '30$'
  },
  {
    id: '3',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'thuy',
    price: '30$'
  },
  {
    id: '4',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'thuy',
    price: '30$'
  },
]

const data2 = [
  {
    id: '1',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'thuy',
    price: '30$'
  },
  {
    id: '2',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'thuy',
    price: '30$'
  },
  {
    id: '3',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'thuy',
    price: '30$'
  },
  {
    id: '4',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'thuy',
    price: '30$'
  },
  {
    id: '5',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'thuy',
    price: '30$'
  },
  {
    id: '6',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'thuy',
    price: '30$'
  },
  {
    id: '7',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'thuy',
    price: '30$'
  },
  {
    id: '8',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'thuy',
    price: '30$'
  },
]

const data3 = [
  {
    id: '1',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'Alexander Bastian',
    description: 'Expert Mobile Engineer'
  },
  {
    id: '2',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'Alexander Bastian',
    description: 'Expert Mobile Enginee'
  },
  {
    id: '3',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'Alexander Bastian',
    description: 'Expert Mobile Engineer'
  },
  {
    id: '4',
    img: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
    name: 'Alexander Bastian',
    description: 'Expert Mobile Engineer'
  },
]

</script>
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>