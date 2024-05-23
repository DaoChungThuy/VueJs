<template>
    <component :is="svgIcon" :class="[
        `[&>path]:!stroke-${stroke} duration-300`,
        isActiveHover ? `[&>path]:!stroke-white [&>path]:!fill-${fill}` : '',
    ]" v-bind="$attrs" />
</template>

<script setup lang="ts">
import * as svg from '@/assets/svg'
import { type Svg } from '@/types/common';

interface Props {
    name: string;
    stroke?: string;
    fill?: string;
    isActiveHover?: boolean;
}

const props = defineProps<Props>();

const svgIcon = computed(() => {
    return (svg as Svg)[props.name]
})

</script>

<style lang="scss" scoped></style>