<template>
    <div class="absolute top-0 sm:static w-full justify-center flex mx-auto flex-col bg-white">
        <div class="flex justify-between mb-4 w-full shadow-sm mt-4 sm:hidden">
            <div class="flex justify-start">
                <div class="flex items-center me-2 sm:hidden opacity-[0.6]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.6594 9.17074H6.35107L10.4177 5.10407C10.7427 4.77907 10.7427 4.24574 10.4177 3.92074C10.262 3.7647 10.0507 3.677 9.83024 3.677C9.60981 3.677 9.39843 3.7647 9.24274 3.92074L3.75107 9.41241C3.42607 9.73741 3.42607 10.2624 3.75107 10.5874L9.24274 16.0791C9.56774 16.4041 10.0927 16.4041 10.4177 16.0791C10.7427 15.7541 10.7427 15.2291 10.4177 14.9041L6.35107 10.8374H15.6594C16.1177 10.8374 16.4927 10.4624 16.4927 10.0041C16.4927 9.54574 16.1177 9.17074 15.6594 9.17074Z"
                            fill="#080E2F" />
                    </svg>

                </div>
                <div class="rounded-lg h-8 w-8 max-w-11">
                    <img src="@/assets/img/logo.png" alt="">
                </div>
                <div class="pl-0 font-bold flex justify-center ps-1 py-1">
                    <p class="text-center">MyCourse.io</p>
                </div>
            </div>
            <div class="flex items-center sm:hidden justify-end opacity-[0.6]">
                <div class="flex items-center ">
                    <button>
                        <img src="@/assets/img/shopping_cart_24px.png" alt="" class="w-6 h-6">
                    </button>
                </div>
                <div class="rounded-sm flex items-center ms-3">
                    <button>
                        <img src="@/assets/img/search.png" alt="" class="w-6">
                    </button>
                </div>
            </div>
        </div>
        <div class="flex justify-center flex-col md:w-[450px] lg:w-[675px] mt-0 sm:mt-10 px-6 sm:px-0 sm:mx-auto">
            <div class="flex flex-col-reverse sm:flex-col">
                <h1 class="text-center mb-4 font-bold text-lg hidden sm:block">My Account</h1>
                <ul class="flex gap-6 font-medium text-nowrap overflow-x-auto mt-4 sm:mt-0">
                    <li class="border-b-2 border-base-primary">Profile</li>
                    <li>Personalsation</li>
                    <li>Account</li>
                    <li>Payment Methods</li>
                    <li>Notifications</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div class="flex justify-center">
                <div class="mt-8 relative w-24">
                    <img src="@/assets/img/user-ac.png" alt="" class="w-20 h-20">
                    <label htmlFor="fileUpload" class="absolute bottom-0 right-3">
                        <input class="hidden" type="file" id="fileUpload" />
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14" r="14" fill="#050505" fill-opacity="0.77" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.62484 12.5417C9.304 12.5417 9.0415 12.2792 9.0415 11.9583V10.7917H7.87484C7.554 10.7917 7.2915 10.5292 7.2915 10.2083C7.2915 9.8875 7.554 9.625 7.87484 9.625H9.0415V8.45833C9.0415 8.1375 9.304 7.875 9.62484 7.875C9.94567 7.875 10.2082 8.1375 10.2082 8.45833V9.625H11.3748C11.6957 9.625 11.9582 9.8875 11.9582 10.2083C11.9582 10.5292 11.6957 10.7917 11.3748 10.7917H10.2082V11.9583C10.2082 12.2792 9.94567 12.5417 9.62484 12.5417ZM13.3593 14.5833C13.6719 14.0419 14.2496 13.7083 14.8748 13.7083C15.5001 13.7083 16.0778 14.0419 16.3904 14.5833C16.703 15.1248 16.703 15.7919 16.3904 16.3333C16.0778 16.8748 15.5001 17.2083 14.8748 17.2083C14.2496 17.2083 13.6719 16.8748 13.3593 16.3333C13.0467 15.7919 13.0467 15.1248 13.3593 14.5833ZM19.5415 10.7917H17.6923L16.969 10.0042C16.7532 9.765 16.4382 9.625 16.1115 9.625H12.3782C12.4773 9.8 12.5415 9.9925 12.5415 10.2083C12.5415 10.85 12.0165 11.375 11.3748 11.375H10.7915V11.9583C10.7915 12.6 10.2665 13.125 9.62484 13.125C9.409 13.125 9.2165 13.0608 9.0415 12.9617V18.9583C9.0415 19.6 9.5665 20.125 10.2082 20.125H19.5415C20.1832 20.125 20.7082 19.6 20.7082 18.9583V11.9583C20.7082 11.3167 20.1832 10.7917 19.5415 10.7917ZM11.9582 15.4583C11.9582 17.0683 13.2648 18.375 14.8748 18.375C16.4848 18.375 17.7915 17.0683 17.7915 15.4583C17.7915 13.8483 16.4848 12.5417 14.8748 12.5417C13.2648 12.5417 11.9582 13.8483 11.9582 15.4583Z"
                                fill="#F9F9F9" fill-opacity="0.9" />
                        </svg>
                    </label>
                </div>
            </div>
            <div class="mx-8 mb-8">
                <div class="relative h-11 mb-6">
                    <input placeholder="First Name"
                        class="peer h-full w-full border-b border-gray-200 text-base text-blue-gray-700 outline outline-0 placeholder:opacity-10" />
                    <label
                        class="pointer-events-none absolute left-0  -top-1.5 flex h-full  text-[11px] text-gray-500 transition-all  peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-xs peer-focus:leading-tight">
                        First Name
                    </label>
                </div>
                <div class="relative h-11 mb-6">
                    <input placeholder="Last Name"
                        class="peer h-full w-full border-b border-gray-200 text-base text-blue-gray-700 outline outline-0 placeholder:opacity-10" />
                    <label
                        class="pointer-events-none absolute left-0  -top-1.5 flex h-full text-[11px] text-gray-500 transition-all  peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-xs peer-focus:leading-tight">
                        Last Name
                    </label>
                </div>
                <div class="relative h-11 mb-6">
                    <input placeholder="Headline"
                        class="peer h-full w-full border-b border-gray-200 text-base text-blue-gray-700 outline outline-0 placeholder:opacity-10" />
                    <label
                        class="pointer-events-none absolute left-0  -top-1.5 flex h-full text-[11px] text-gray-500 transition-all  peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-xs peer-focus:leading-tight">
                        Headline
                    </label>
                </div>
                <div class="relative h-11 mb-6">
                    <input placeholder="Language"
                        class="peer h-full w-full border-b border-gray-200 text-base text-blue-gray-700 outline outline-0 placeholder:opacity-10" />
                    <label
                        class="pointer-events-none absolute left-0  -top-1.5 flex h-full text-[11px] text-gray-500 transition-all  peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-xs peer-focus:leading-tight">
                        Language
                    </label>
                </div>
                <div class="relative h-11 mb-6">
                    <input placeholder="Link"
                        class="peer h-full w-full border-b border-gray-200 text-base text-blue-gray-700 outline outline-0 placeholder:opacity-10" />
                    <label
                        class="pointer-events-none absolute left-0  -top-1.5 flex h-full  text-[11px] text-gray-500 transition-all  peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-xs peer-focus:leading-tight">
                        Link
                    </label>
                </div>
            </div>
            <div class="flex justify-center mb-16">
                <button class="w-44 bg-base-primary py-1 text-white rounded-xl">Save</button>
            </div>

        </div>
    </div>
</template>
<script setup lang='ts'>
</script>