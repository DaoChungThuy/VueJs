<template lang="">
    <div class="w-full bg-[#F5F5F5]">
        <div>
            <TheHeader/>
        </div>
        <div>
            <router-view></router-view>
        </div>
        <div>
            <TheFooter/>
        </div>
    </div>
</template>
<script setup lang="ts">
import TheHeader from '@/components/Standard/TheHeader.vue'
import TheFooter from '@/components/Standard/TheFooter.vue'


</script>
<style lang="">

</style>