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
        <UserSignUp v-if ="signUp" @login="showLogin" @signup="showSignUp"></UserSignUp>
        <UserLogin v-if="login" @signup="showSignUp" @login="showLogin"></UserLogin>
        <!-- <UserLogin v-if ="login" @login="showLogin" ></UserLogin> -->
    </div>
</template>
<script setup lang="ts">
import TheHeader from '@/components/organisms/Standard/TheHeader.vue'
import TheFooter from '@/components/organisms/Standard/TheFooter.vue'
import UserSignUp from '@/components/organisms/UserSignUp.vue';
import UserLogin from '@/components/organisms/UserLogin.vue';

const signUp = ref(false);
const login = ref(false);

const showSignUp = (show: boolean) => {
    signUp.value = show
    login.value = false
};

const showLogin = (show: boolean) => {
    login.value = show
    signUp.value = false
}
</script>