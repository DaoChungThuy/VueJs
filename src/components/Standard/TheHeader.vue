<template>
    <div class="w-full p-3">
        <div class="mx-20">
            <div class="w-full flex justify-between">
                <div class="flex justify-start">
                    <div class="rounded-lg w-1/5 max-w-11">
                        <img src="@/assets/img/logo.png" alt="">
                    </div>
                    <div class="pl-0 font-bold flex justify-center ps-1">
                        <p class="text-center">MyCourse.io</p>
                    </div>
                </div>
                <div class="flex justify-end">
                    <div class="flex justify-end items-center pe-3 bg-white rounded w-`">
                        <div class="border-solid items-center">
                            <input type="text" placeholder="Search for Course" class="pl-2">
                        </div>
                        <div class="rounded-sm max-w-6 items-center">
                            <button>
                                <img src="@/assets/img/search.png" alt="">
                            </button>
                        </div>
                    </div>

                    <div class="flex me-8">
                        <div class="ms-3 flex items-center me-8 font-light">
                            <p>Become intructor</p>
                        </div>
                        <div class="flex items-center ">
                            <button>
                                <img src="@/assets/img/shopping_cart_24px.png" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <div class="rounded-xl me-1 px-2 border-2 py-1">
                            <button>
                                <p>Login</p>
                            </button>
                        </div>
                        <div class="rounded-xl bg-[#3DCBB1] px-2 items-center py-1">
                            <button class="flex items-center">
                                <svg class="items-center" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.99998 1.33337C4.31998 1.33337 1.33331 4.32004 1.33331 8.00004C1.33331 11.68 4.31998 14.6667 7.99998 14.6667C11.68 14.6667 14.6666 11.68 14.6666 8.00004C14.6666 4.32004 11.68 1.33337 7.99998 1.33337ZM10.8266 5.17337C10.0466 4.39337 9.02665 4.00004 7.99998 4.00004V8.00004L5.17331 10.8267C6.73331 12.3867 9.26665 12.3867 10.8333 10.8267C12.3933 9.26671 12.3933 6.73337 10.8266 5.17337ZM2.66665 8.00004C2.66665 10.9467 5.05331 13.3334 7.99998 13.3334C10.9466 13.3334 13.3333 10.9467 13.3333 8.00004C13.3333 5.05337 10.9466 2.66671 7.99998 2.66671C5.05331 2.66671 2.66665 5.05337 2.66665 8.00004Z"
                                        fill="white" />
                                </svg>

                                <p class="flex text-white">Logout</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style></style>