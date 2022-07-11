<script lang="ts">
export default {
    name: 'gen-dialog',
}
</script>

<script setup lang="ts">

defineProps<{
    open?: boolean;
}>()

defineEmits<{
    (e: 'update:open', open: boolean): void;
}>()

</script>

<template>
    <div class="dialog" v-if="open" @click="$emit('update:open', false)">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>

</template>


<style lang="scss" scoped>
.dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: grid;
    place-items: center;

    &__content {
        min-width: 400px;

        background: rgb(23, 23, 23);
        border-radius: 5px;
        padding: 20px;
    }
}
</style>