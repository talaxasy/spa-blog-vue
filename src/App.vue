
<script setup lang="ts">
import { reactive } from 'vue';
type TState = {
  title: string;
  description: string;
  counter: number;
  increment(): void;
}

const state: TState = reactive({
  title: 'title',
  description: 'description',
  counter: 1,
  increment() {
    this.counter++;
  },
});


const countCounter = () => {
  state.counter++;
};





</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    posts: Array<{ id: number, title: string, description: string }>,
    title: String,
    description: String,
  },
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
      }],
      title: '',
      description: ''
    }
  },
  methods: {
    createPost(e: Event) {
      e.preventDefault();
    }
  }
})



</script>

<template>
  <main class="main">
    <div>
      <div>{{ state.title }}</div>
      <div>{{ state.description }}</div>
      <div>{{ state.counter }}</div>
      <button @click="countCounter">addCounter</button>
    </div>
    <form @submit="createPost">
      <h1>Create post</h1>
      <input v-bind:value="title" @input="title = ($event as any).target.value" type="text" placeholder="Title">
      <textarea v-bind:value="description" type="text" placeholder="Description" />
      <button type="submit">Create</button>
    </form>
    <h2>Posts:</h2>
    <div class="post" v-for="post in posts">
      <div><b>Title:</b> <span>{{ post.title }}</span></div>
      <div><b>Description:</b>
        {{ " " }}
        <p style="display: inline;">
          {{ post.description }}
        </p>
      </div>
    </div>
  </main>
</template>

<style>
@import './assets/base.css';
</style>

<style lang="scss">
.main {
  &>form {
    display: flex;
    flex-direction: column;
    width: 500px;

    &>* {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    padding: 20px 0;
  }
}

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
