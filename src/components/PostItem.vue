<script setup lang="ts">

defineProps<{
    post: {
        id: number;
        title: string;
        description: string;
    }
}>()

defineEmits<{
    (e: 'delete', id: number): void
}>()

</script>

<template>
    <div class="post">
        <div>
            <div><b>Title:</b> <span>{{ post.title }}</span></div>
            <div><b>Description:</b>
                {{ " " }}
                <p style="display: inline;">
                    {{ post.description }}
                </p>
            </div>
        </div>
        <div class="post__btns">
            <gen-button @click="$emit('delete', post.id)">Delete</gen-button>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.post {
    display: flex;
    padding: 20px;
    border-radius: 5px;
    border: 5px solid rgb(0, 128, 77);
    margin-bottom: 10px;
    justify-content: space-between;
    background: var(--color-background);

    &__btns {
        align-self: center;
    }

}
</style>