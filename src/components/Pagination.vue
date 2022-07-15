<script setup lang="ts">
defineProps<{
    modelValue: number,
    totalPages: number,
}>()

defineEmits<{
    (e: 'update:modelValue', value: number): void
}>()
</script>

<template>
    <div class="pagination">
        <gen-button @click="$emit('update:modelValue', 1)" :disabled="modelValue === 1">First</gen-button>
        <gen-button @click="$emit('update:modelValue', modelValue - 1)" :disabled="modelValue === 1">Prev</gen-button>
        <div class="pagination__page-btns">
            <gen-button v-for="page in totalPages" :key="page" class="page"
                :class="{ 'page_current': modelValue === page }" @click="$emit('update:modelValue', page)">
                {{ page }}
            </gen-button>
        </div>
        <gen-button @click="$emit('update:modelValue', modelValue + 1)" :disabled="modelValue === totalPages">Next
        </gen-button>
        <gen-button @click="$emit('update:modelValue', totalPages)" :disabled="modelValue === totalPages">Last
        </gen-button>
    </div>
</template>

<style lang="scss" scoped>
.pagination {
    position: sticky;
    bottom: 0;
    width: 100%;
    background: var(--color-background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(103, 103, 103, 0.136);
    padding: 15px 0;

    &__page-btns {
        display: flex;
        gap: 5px;
    }
}

.page {
    &_current {
        background: #005f5f;
    }
}
</style>