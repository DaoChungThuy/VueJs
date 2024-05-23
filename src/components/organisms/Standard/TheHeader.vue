<template>
    <div class="w-full pt-2 shadow-sm pb-2 container mx-auto">
        <div class="mx-6 sm:mx-10 lg:mx-20">
            <div class="w-full items-center flex justify-between">
                <div class="flex justify-start">
                    <div class="flex sm:hidden me-1">
                        <button v-if="hasRoute" @click="router.go(-1)">
                            <base-icon name="back"></base-icon>
                        </button>
                        <button v-else>
                            <base-icon name="menu"></base-icon>
                        </button>
                    </div>
                    <div class=" rounded-lg max-w-11 me-1">
                        <base-icon name="logo"></base-icon>
                    </div>
                    <div class="pl-0 font-bold flex self-center justify-center ps-1 py-1">
                        <p class="text-center">MyCourse.io</p>
                    </div>
                    <div class="hidden sm:flex items-center lg:hidden ms-2 pt-1">
                        <p>Browse</p>
                        <select name="Browse" id="">
                        </select>
                    </div>
                </div>
                <div class="flex justify-end ">
                    <div
                        class="hidden sm:flex flex-nowrap justify-between items-center pe-3 bg-[#F5F5F5] rounded-lg lg:me-auto lg:w-96">
                        <input type="text" v-model="search" placeholder="Search for Course"
                            class="pl-2 outline-none bg-transparent w-full">
                        <button v-if="search.length == 0">
                            <base-icon name="search"></base-icon>
                        </button>
                        <button v-else @click="search = ''">
                            <base-icon name="exit"></base-icon>
                        </button>
                    </div>
                    <div class="flex me-4">
                        <div class="ms-3 hidden lg:flex items-center me-8 font-light">
                            <p class="text-nowrap">Become intructor</p>
                        </div>
                        <div class="flex items-center ">
                            <button @click="router.push({ name: 'my_course' })">
                                <base-icon name="shopping_cart"></base-icon>
                            </button>
                        </div>
                    </div>
                    <div v-if="!store.getters['auth/isLogin']" class="justify-end hidden sm:flex">
                        <div class="rounded-xl me-1 px-2 border-2 py-1">
                            <button @click="showLogin()">
                                <p>Login</p>
                            </button>
                        </div>
                        <div class="rounded-xl bg-[#3DCBB1] px-2 items-center py-1">
                            <button class="flex items-center" @click=" showSingUp()">
                                <base-icon name="signup"></base-icon>
                                <p class="flex text-white">Logout</p>
                            </button>
                        </div>
                    </div>
                    <div v-if="store.getters['auth/isLogin']" class="flex items-center justify-end ">
                        <div class=" flex items-center justify-end">
                            <base-icon name="bell"></base-icon>
                        </div>
                        <div class="hidden sm:block rounded-lg ms-2 relative [&>*]:hover:block">
                            <base-icon name="user"></base-icon>
                            <div class="absolute z-10 -left-6 bg-white px-4 rounded-sm border-1 hidden">
                                <ul class="[&>li]:shadow-sm rounded-md">
                                    <li><button @click="showLogin">Login</button></li>
                                    <li><button @click="store.dispatch('auth/logout')">Logout</button></li>
                                    <li><button @click="router.push({ name: 'account' })">Profile</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const store = useStore();
const router = useRouter();
const route = useRoute();
const search = ref('')

const emit = defineEmits(['hidden', 'login'])

const showSingUp = () => {
    emit('hidden', true)
}
const showLogin = () => {
    emit('login', true)
}

const hasRoute = computed(() => {
    const hasHistoryBack = window?.history?.state?.back
    const isNotHome = route.name !== 'home'
    return hasHistoryBack && isNotHome
});

watch(search, () => {
    if (search.value.length > 0) {
        router.push({ name: 'search', query: { searched: search.value }, replace: route.name === 'search' })
    } else {
        router.go(-1)
    }
})
</script>