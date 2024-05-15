<template lang="">
    <div class="relative w-full">
        <div>
           <TheHeader @hidden="showSignUp" @login="showLogin"/>
        </div>
        <div class= "container mx-auto">
            <router-view></router-view>
        </div>
        <div>
            <TheFooter/>
        </div>
        <UserSignUp v-if ="signUp" @hidden="showSignUp"></UserSignUp>
        <UserLogin :status="isShowlogin" @login="showLogin"></UserLogin>
        <!-- <UserLogin v-if ="login" @login="showLogin" ></UserLogin> -->
    </div>
</template>
<script setup lang="ts">
import TheHeader from '@/components/Standard/TheHeader.vue'
import TheFooter from '@/components/Standard/TheFooter.vue'
import UserSignUp from '@/components/UserSignUp.vue';
import UserLogin from '@/components/UserLogin.vue';
import { ref } from 'vue';

const signUp = ref(false);
const login = ref(false);
const isShowlogin = ref(false);

const showSignUp = (show: boolean) => {
    signUp.value = show
};

const showLogin = (show: boolean) => {
    login.value = show
    isShowlogin.value = !isShowlogin.value
}
</script>