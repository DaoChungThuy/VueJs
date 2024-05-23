<template>
    <div class="mx-auto absolute sm:static top-0 w-full ">
        <div class="relative w-full flex flex-col">
            <div class="mx-6 sm:mx-20 hidden sm:block mt-8 font-light">
                <p>
                    <a href="#">Development </a>
                    /
                    <a href="">Mobile Engineer</a>
                </p>
                <h2 class="font-bold text-2xl mb-3">Make Uber Clone App</h2>
                <div class="flex items-center">
                    <span class="text-red-600 me-2">Steven Arnatouvic </span>
                    <font-awesome-icon :icon="['fas', 'star']" style="color: #FFD43B;" />
                    <span>4.8 (1,812 rating)</span>
                </div>
            </div>
            <div class="sm:mx-20">
                <div class="float-start w-full lg:w-2/3 bg-slate-700 rounded-none sm:rounded-2xl mt-0 sm:mt-8 relative">
                    <img src="@/assets/img/coures.png" alt="">
                    <div class="absolute block top-6 left-6 sm:hidden">
                        <button @click="router.go(-1)">
                            <base-icon name="detail_back"></base-icon>
                        </button>
                    </div>
                </div>
                <div class="block sm:hidden font-light px-6 sm:px-0">
                    <h2 class="font-bold text-2xl mb-3">Make Uber Clone App</h2>
                    <div class="block">
                        <span class="text-base-primary me-2">Steven Arnatouvic </span>
                        <div class="flex justify-between items-center">
                            <div class="text-slate-950 mb-4 mt-4">
                                <h2 class="font-medium text-lg mb-2">US$22.40 </h2>
                                <p class="text-sm font-light">$30.13 <span
                                        class="bg-[#A04AE3] p-1 w-20 ps-2 rounded-lg text-white">20%</span></p>
                            </div>
                            <div class="flex flex-col justify-end text-end">
                                <p class="font-medium"><font-awesome-icon :icon="['fas', 'star']"
                                        style="color: #FFD43B;" />
                                    4.8 </p>
                                <span>(1,812 rating)</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="float-right flex-col hidden sm:flex w-1/3  mt-8 gap-4 text-slate-700 px-6 sm:px-0">
                    <div class="lg:ms-6 p-4 shadow-xl rounded-xl pb-8">
                        <div class="hidden lg:block">
                            <div class="text-slate-950 mb-4 mt-4">
                                <h2 class="font-bold text-xl mb-2">US$22.40 <span
                                        class="text-base font-light">$30.13</span>
                                </h2>
                                <p class="bg-[#A04AE3] p-1 w-20 ps-2 rounded-sm text-white">20%OOF</p>
                            </div>
                            <button
                                class="bg-base-primary py-2 w-full text-white rounded-2xl font-medium mb-4 mt-8">Buy</button>
                            <button class="bg-white border-2 border-gray-400 py-2 w-full  rounded-2xl font-medium mb-6">
                                Wishlist
                            </button>
                        </div>
                        <div class="flex mt-6 mb-1 items-center">
                            <svg class="h-4 w-4 lg:h-6 lg:w-6" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M20 3H4C3.45 3 3 3.45 3 4V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3ZM9 7H7V9H9V7ZM16 9H12C11.45 9 11 8.55 11 8C11 7.45 11.45 7 12 7H16C16.55 7 17 7.45 17 8C17 8.55 16.55 9 16 9ZM16 13H12C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13ZM12 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H12C11.45 15 11 15.45 11 16C11 16.55 11.45 17 12 17ZM7 11H9V13H7V11ZM9 15H7V17H9V15ZM5 19H19V5H5V19Z"
                                    fill="#1B1B1B" fill-opacity="0.6" />
                            </svg>
                            <span class="ms-2 lg:ms-6 text-xs lg:text-base">22 Section</span>
                        </div>
                        <div class="flex mb-1 items-center">
                            <svg class="h-4 w-4 lg:h-6 lg:w-6" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M21 3.5H3C1.9 3.5 1 4.4 1 5.5V18.5C1 19.6 1.9 20.5 3 20.5H21C22.1 20.5 23 19.6 23 18.5V5.5C23 4.4 22.1 3.5 21 3.5ZM21 17.5C21 18.05 20.55 18.5 20 18.5H12V5.5H20C20.55 5.5 21 5.95 21 6.5V17.5ZM13.75 9H19.25C19.66 9 20 9.34 20 9.75C20 10.16 19.66 10.5 19.25 10.5H13.75C13.34 10.5 13 10.16 13 9.75C13 9.34 13.34 9 13.75 9ZM19.25 11.5H13.75C13.34 11.5 13 11.84 13 12.25C13 12.66 13.34 13 13.75 13H19.25C19.66 13 20 12.66 20 12.25C20 11.84 19.66 11.5 19.25 11.5ZM13.75 14H19.25C19.66 14 20 14.34 20 14.75C20 15.16 19.66 15.5 19.25 15.5H13.75C13.34 15.5 13 15.16 13 14.75C13 14.34 13.34 14 13.75 14Z"
                                    fill="#1B1B1B" fill-opacity="0.6" />
                            </svg>
                            <span class="ms-2 lg:ms-6 text-xs lg:text-base">152 Lectures</span>
                        </div>
                        <div class="flex mb-1 items-center">
                            <svg class="h-4 w-4 lg:h-6 lg:w-6" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M21 5.9001H13.41L16.35 2.9601C16.55 2.7601 16.55 2.4501 16.35 2.2501C16.15 2.0501 15.84 2.0501 15.64 2.2501L12 5.8901L8.36 2.2501C8.16 2.0501 7.85 2.0501 7.65 2.2501C7.45 2.4501 7.45 2.7601 7.65 2.9601L10.59 5.9001H3C1.9 5.9001 1 6.7901 1 7.9001V19.9001C1 21.0001 1.9 21.9001 3 21.9001H21C22.1 21.9001 23 21.0001 23 19.9001V7.9001C23 6.7901 22.1 5.9001 21 5.9001ZM10.5 17.0501L14.48 14.7701C15.15 14.3901 15.15 13.4201 14.48 13.0301L10.5 10.7501C9.83 10.3701 9 10.8601 9 11.6201V16.1701C9 16.9401 9.83 17.4301 10.5 17.0501ZM4 19.9001H20C20.55 19.9001 21 19.4501 21 18.9001V8.9001C21 8.3501 20.55 7.9001 20 7.9001H4C3.45 7.9001 3 8.3501 3 8.9001V18.9001C3 19.4501 3.45 19.9001 4 19.9001Z"
                                    fill="#1B1B1B" fill-opacity="0.6" />
                            </svg>

                            <span class="ms-2 lg:ms-6 text-xs lg:text-base">21h 33m total lenghts</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="h-4 w-4 lg:h-6 lg:w-6" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14 4.65179V4.45179C14 3.82179 14.63 3.37179 15.21 3.60179C18.6 4.89179 21 8.16179 21 12.0018C21 15.8418 18.6 19.1118 15.21 20.4018C14.63 20.6218 14 20.1818 14 19.5518V19.3518C14 18.9718 14.24 18.6418 14.6 18.5018C17.18 17.4718 19 14.9418 19 12.0018C19 9.06179 17.18 6.53179 14.6 5.50179C14.25 5.36179 14 5.03179 14 4.65179ZM3 10.0018V14.0018C3 14.5518 3.45 15.0018 4 15.0018H7L10.29 18.2918C10.92 18.9218 12 18.4718 12 17.5818V6.41179C12 5.52179 10.92 5.07179 10.29 5.70179L7 9.00179H4C3.45 9.00179 3 9.45179 3 10.0018ZM16.5 12.0018C16.5 10.2318 15.48 8.71179 14 7.97179V16.0218C15.48 15.2918 16.5 13.7718 16.5 12.0018Z"
                                    fill="#1B1B1B" fill-opacity="0.6" />
                            </svg>
                            <span class="ms-2 lg:ms-6 text-xs lg:text-base">English</span>
                        </div>
                    </div>

                    <div
                        class="text-white h-[400px] lg:h-[600px] bg-[url('@/assets/img/bg2.jpg')] bg-cover px-6 pt-8 rounded-2xl lg:ms-4">
                        <p class="bg-base-primary text-xs p-1 px-2 w-16 rounded-sm">WEBINAR</p>
                        <h4 class="font-light">Ana Kursova</h4>
                        <h2 class="font-medium text-xl lg:text-4xl">Masterclass in Design Thinking, Innovation &
                            Creativity
                        </h2>
                        <button class="border-2 border-amber-200 px-1 mt-4">Learn More</button>
                    </div>
                </div>
                <div class="float-start w-full sm:w-2/3 px-6 sm:px-0">
                    <div class="flex gap-4 mt-8">
                        <a href="#">Description</a>
                        <a href="#" class="border-b-2 border-red-800">Courses</a>
                        <a href="#">Review</a>
                    </div>
                    <div class="pe-3">
                        <h2 class="mt-6 mb-4 font-bold">About Course</h2>
                        <p class="text-justify text-slate-700">Vue (pronounced /vjuː/, like view) is a progressive
                            framework for
                            building user interfaces.
                            Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally
                            adoptable. The core library is focused on the view layer only, and is easy to pick up and
                            integrate with other libraries or existing projects. On the other hand, Vue is also
                            perfectly capable of powering sophisticated Single-Page Applications when used in
                            combination with modern tooling and supporting libraries.</p>
                    </div>
                    <div class="flex flex-col mt-6">
                        <div class="font-bold mb-3">
                            <p>Review</p>
                        </div>
                        <div v-for="(item, index) in reviews" :key="index" class="flex mb-2">
                            <img class="h-9 w-9 mt-1 object-cover rounded-full min-w-9" :src="item.avatar" alt="">
                            <div class="ps-3">
                                <h4 class="text-base-primary">{{ item.username }}</h4>
                                <span class="text-xs text-gray-400">{{ item.created_at }}</span>
                                <p class="text-xs sm:text-sm lg:text-base font-light">{{ item.comment }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button class="py-1 px-2 border-2 mt-3 rounded-md border-gray-950">
                            Load more review
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-col">
                <div
                    class="mx-6 sm:mx-20 bg-sky-500 rounded-lg text-white font-light mb-10 hidden sm:flex justify-between float-end items-center mt-12">
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
            <div class="mx-6 sm:mx-20 sticky flex lg:hidden justify-between float-end py-4 bottom-0  bg-white">
                <div class="hidden sm:block">
                    <div class="text-slate-950 mb-4 mt-4">
                        <h2 class="font-bold text-xl mb-2">US$22.40 <span class="text-base font-light">$30.13</span>
                        </h2>
                        <p class="bg-[#A04AE3] p-1 w-20 ps-2 rounded-sm text-white">20%OOF</p>
                    </div>
                </div>
                <div class="flex items-center justify-between sm:justify-end w-full sm:w-1/2 gap-4">
                    <button class="bg-base-primary w-52 py-2 text-white rounded-2xl font-medium">Buy</button>
                    <button class="bg-white border-2 w-52 border-gray-400 py-2  rounded-2xl font-medium">
                        Wishlist
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { reviews } from '@/sample_data/list_review';

const router = useRouter()

</script>