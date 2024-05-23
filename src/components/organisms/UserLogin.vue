<template>
    <div class="fixed flex bg-gray-500 bg-opacity-30 inset-0" @click="showLogin(false)">
        <div @click.stop="" class="m-auto flex w-full h-full sm:w-[800px] sm:h-[550px] container mx-auto ">
            <div class="hidden sm:block sm:w-1/2 bg-[url('@/assets/img/bg-lo.png')] bg-cover relative">
                <div class="absolute bottom-6 left-6 flex items-center">
                    <img src="@/assets/img/user-signup.png" alt="" class="w-10 h-10">
                    <div class="text-white font-medium ms-2">
                        <p>Joe Kitanoe</p>
                        <span class="text-xs font-light">Software Developer</span>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2 flex flex-col py-8 bg-white rounded-e-lg px-6 sm:px-6 min-[500px]:px-20">
                <div class="flex justify-between mb-14 sm:mb-1 shadow-sm">
                    <div class="flex justify-start">
                        <div class="flex items-center me-2 sm:hidden opacity-[0.6]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
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
                <p class="mt-4 text-slate-800">Join us and get more benefits. We promise to keep your data safely.</p>
                <div class="flex justify-between items-center bg-[#F5F5F5] rounded-lg lg:me-auto w-full px-2 mt-4">
                    <div class=" border-solid items-center ">
                        <input v-model="user.email" type="text" placeholder="Email Address"
                            class="outline-none bg-transparent py-2 ">
                    </div>
                    <div class="rounded-sm w-6 items-center">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17.5 3.5H3.5C2.5375 3.5 1.75875 4.2875 1.75875 5.25L1.75 15.75C1.75 16.7125 2.5375 17.5 3.5 17.5H17.5C18.4625 17.5 19.25 16.7125 19.25 15.75V5.25C19.25 4.2875 18.4625 3.5 17.5 3.5ZM17.5 14.875C17.5 15.3562 17.1062 15.75 16.625 15.75H4.375C3.89375 15.75 3.5 15.3562 3.5 14.875V7L9.5725 10.7975C10.1412 11.1562 10.8588 11.1562 11.4275 10.7975L17.5 7V14.875ZM3.5 5.25L10.5 9.625L17.5 5.25H3.5Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </svg>
                    </div>
                </div>
                <div class="flex justify-between items-center bg-[#F5F5F5] rounded-lg lg:me-auto w-full px-2 mt-4">
                    <div class=" border-solid items-center ">
                        <input type="text" v-model="user.password" placeholder="Password"
                            class="outline-none bg-transparent py-2 ">
                    </div>
                    <div class="rounded-sm w-6 items-center">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.75 7.4375H14.875V5.6875C14.875 3.2725 12.915 1.3125 10.5 1.3125C8.085 1.3125 6.125 3.2725 6.125 5.6875V7.4375H5.25C4.2875 7.4375 3.5 8.225 3.5 9.1875V17.9375C3.5 18.9 4.2875 19.6875 5.25 19.6875H15.75C16.7125 19.6875 17.5 18.9 17.5 17.9375V9.1875C17.5 8.225 16.7125 7.4375 15.75 7.4375ZM10.5 15.3125C9.5375 15.3125 8.75 14.525 8.75 13.5625C8.75 12.6 9.5375 11.8125 10.5 11.8125C11.4625 11.8125 12.25 12.6 12.25 13.5625C12.25 14.525 11.4625 15.3125 10.5 15.3125ZM7.875 5.6875V7.4375H13.125V5.6875C13.125 4.235 11.9525 3.0625 10.5 3.0625C9.0475 3.0625 7.875 4.235 7.875 5.6875Z"
                                fill="#1B1B1B" fill-opacity="0.6" />
                        </svg>
                    </div>
                </div>
                <button @click="handleLogin"
                    class="bg-red-800 sm:bg-base-primary flex items-center justify-center gap-2 text-white py-1 rounded-2xl mt-8 font-medium">
                    <p>Login</p>
                </button>
                <span class="text-center mt-3">or you can</span>
                <button
                    class="bg-[#4267B2] flex items-center justify-center gap-2 text-white py-1 rounded-2xl mt-8 font-medium">
                    <svg width="20" height="20" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.3411 3.09286e-10H1.65106C1.34506 0.00207934 1.0523 0.125099 0.836656 0.342217C0.621013 0.559335 0.499993 0.852928 0.5 1.15894V19.8489C0.502079 20.1549 0.625099 20.4477 0.842217 20.6633C1.05933 20.879 1.35293 21 1.65894 21H11.7179V12.8796H8.98794V9.69938H11.7179V7.36312C11.7179 4.6515 13.3756 3.16312 15.7946 3.16312C16.6109 3.15966 17.4268 3.20173 18.2384 3.28913V6.132H16.5584C15.2459 6.132 14.9926 6.762 14.9926 7.6755V9.69938H18.14L17.72 12.8796H14.99V21H20.3411C20.6484 21 20.9432 20.8779 21.1606 20.6606C21.3779 20.4432 21.5 20.1484 21.5 19.8411V1.15106C21.4979 0.84506 21.3749 0.552299 21.1578 0.336656C20.9407 0.121013 20.6471 -7.06435e-06 20.3411 3.09286e-10V3.09286e-10Z"
                            fill="white" />
                    </svg>
                    <p>Sign Up with Facebook</p>
                </button>
                <button
                    class="bg-[#000000] flex items-center justify-center gap-2 text-white py-1 rounded-2xl mt-2 font-medium">
                    <svg width="20" height="20" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.3508 11.1566C14.3792 14.3346 17.0304 15.3922 17.0598 15.4056C17.0374 15.4802 16.6362 16.9128 15.663 18.3925C14.8217 19.6717 13.9486 20.9463 12.5732 20.9727C11.2217 20.9986 10.7871 20.1389 9.24201 20.1389C7.69734 20.1389 7.21451 20.9463 5.93518 20.9986C4.60755 21.0509 3.59657 19.6153 2.74832 18.3407C1.01502 15.7335 -0.309575 10.9733 1.46903 7.76014C2.3526 6.16446 3.93161 5.15402 5.64548 5.1281C6.94918 5.10223 8.17971 6.04065 8.97668 6.04065C9.77314 6.04065 11.2685 4.91212 12.8405 5.07786C13.4986 5.10636 15.3459 5.35444 16.5321 7.16093C16.4365 7.22257 14.3279 8.49974 14.3508 11.1566V11.1566ZM11.8109 3.35296C12.5157 2.46528 12.9901 1.22955 12.8607 0C11.8447 0.0424842 10.6162 0.704394 9.88742 1.59159C9.23433 2.37724 8.66236 3.63472 8.81669 4.83994C9.94912 4.93109 11.106 4.24121 11.8109 3.35297"
                            fill="white" />
                    </svg>

                    <p>Sign Up with Apple</p>
                </button>
                <button
                    class="bg-white border-2 flex items-center justify-center gap-2 text-black py-1 rounded-2xl mt-2 font-medium">
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_238_106" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="11" y="8"
                            width="11" height="11">
                            <path
                                d="M21.08 10.7385C21.08 9.99401 21.0132 9.27805 20.8891 8.59082H11V12.6524H16.651C16.4075 13.9649 15.6677 15.077 14.5558 15.8215V18.4561H17.9491C19.9346 16.6281 21.08 13.9363 21.08 10.7385Z"
                                fill="white" />
                        </mask>
                        <g mask="url(#mask0_238_106)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 18.4561H21.08V8.59082H11V18.4561Z"
                                fill="#5070A8" />
                        </g>
                        <mask id="mask1_238_106" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="12"
                            width="17" height="10">
                            <path
                                d="M10.9998 21.0002C13.8348 21.0002 16.2116 20.0599 17.9489 18.4563L14.5555 15.8218C13.6152 16.4518 12.4125 16.824 10.9998 16.824C8.265 16.824 5.9502 14.977 5.12458 12.4951H1.61663V15.2156C3.34436 18.6472 6.89519 21.0002 10.9998 21.0002Z"
                                fill="white" />
                        </mask>
                        <g mask="url(#mask1_238_106)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.61663 21.0002H17.9489V12.4951H1.61663V21.0002Z" fill="#2F9E4F" />
                        </g>
                        <mask id="mask2_238_106" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="5"
                            width="6" height="11">
                            <path
                                d="M5.12477 12.495C4.91473 11.8651 4.7954 11.1921 4.7954 10.5C4.7954 9.80803 4.91473 9.13507 5.12477 8.50505V5.78467H1.61682C0.905699 7.20214 0.5 8.80576 0.5 10.5C0.5 12.1944 0.905699 13.7981 1.61682 15.2155L5.12477 12.495Z"
                                fill="white" />
                        </mask>
                        <g mask="url(#mask2_238_106)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 15.2155H5.12477V5.78467H0.5V15.2155Z"
                                fill="#EFB529" />
                        </g>
                        <mask id="mask3_238_106" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="0"
                            width="18" height="9">
                            <path
                                d="M10.9998 4.17613C12.5414 4.17613 13.9255 4.70594 15.0136 5.74637L18.0252 2.73478C16.2068 1.04049 13.83 0 10.9998 0C6.89519 0 3.34436 2.35297 1.61663 5.78459L5.12458 8.50498C5.9502 6.02319 8.265 4.17613 10.9998 4.17613Z"
                                fill="white" />
                        </mask>
                        <g mask="url(#mask3_238_106)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.61663 8.50498H18.0252V0H1.61663V8.50498Z" fill="#D53E36" />
                        </g>
                    </svg>

                    <p>Sign Up with Google</p>
                </button>
                <div class="flex justify-center mt-4 text-gray-700">
                    <a href="#">Already have an Account?</a>
                    <button class="text-base-primary ms-2" @click="emit('signup', true)">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
const user = reactive<{
    email: string;
    password: string;
}>({
    email: '',
    password: ''
});

const store = useStore();

const emit = defineEmits(['login', 'signup']);

const showLogin = (show: boolean) => {
    emit('login', show);
};

const handleLogin = () => {
    store.dispatch('auth/login', user);
    showLogin(false)
};
</script>