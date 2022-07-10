<script setup lang="ts">
// import components from './components'

</script>


<script lang="ts">
export default {
  data() {
    return {
      message: 'Hello Vue!',
      counter: 0,
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <h1>Welcome to Vite</h1>

      {{ message }} ===> {{ counter }}
      <p>
        Vite is a Vue 3 framework for building decentralized applications.
      </p>
      <button @click="counter++">Click me</button>
    </div>
  </header>

  <main>
    TEST
  </main>
</template>

<style>
@import './assets/base.css';
</style>
