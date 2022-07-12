

<script lang="ts">
export default {
    name: "gen-select",
}
</script>

<script setup lang="ts">



const { modelValue, options = [] } = defineProps<{
    modelValue: string;
    options: {
        value: string;
        label: string;
    }[];
}>()

defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>()

</script>

<template>
    <select v-model="modelValue" @change="$emit('update:modelValue', ($event.target as any).value)">
        <option disabled value="">
            Selct an option
        </option>
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.label }}
        </option>
    </select>
</template>

<style scoped>
</style>