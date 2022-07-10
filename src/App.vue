<script setup lang="ts">
// import components from './components'

</script>


<script lang="ts">
export default {
  data() {
    return {
      posts: [{
        id: 1, title: 'abobus', description: 'text'
      },
      {
        id: 2, title: 'levus', description: 'text text 31323'
      },
      {
        id: 3, title: 'deianus', description: 'lalallalalalal'
      }]
    }
  }
}


</script>

<template>
  <header>

  </header>
  <main>
    <div class="post" v-for="post in posts">
      <div><b>Название:</b> <span>{{ post.title }}</span></div>
      <div><b>Описание:</b>
        {{ " " }}
        <p style="display: inline;">
          {{ post.description }}
        </p>
      </div>
    </div>
  </main>
  <footer>

  </footer>
</template>

<style>
@import './assets/base.css';
</style>

<style lang="scss">
.post {
  padding: 20px;
  border-radius: 5px;
  border: 5px solid rgb(0, 128, 77);
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
