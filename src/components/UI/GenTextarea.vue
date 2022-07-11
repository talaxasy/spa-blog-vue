<script lang="ts">
export default {
    name: 'gen-textarea',
}
</script>

<script setup lang="ts">

defineProps<{
    modelValue: string | number;
}>()

defineEmits<{
    (e: 'update:modelValue', value: string | number): void;
}>()

</script>

<template>
    <textarea :value="modelValue" @input="$emit('update:modelValue', ($event.target as any).value)" />
</template>