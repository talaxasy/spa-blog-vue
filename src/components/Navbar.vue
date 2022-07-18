<script setup lang="ts">

</script>

<template>
    <nav class="navbar">
        <gen-button @click="$router.push('/')">Main</gen-button>
        <gen-button @click="$router.push('/about')">About</gen-button>
        <gen-button @click="$router.push('/about')">About</gen-button>
        <gen-button @click="$router.push('/posts')">Posts</gen-button>
    </nav>
</template>


<style lang="scss" scoped>
.navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--color-background);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    height: 60px;
    border-bottom: 1px solid rgba(103, 103, 103, 0.136);
}
</style>