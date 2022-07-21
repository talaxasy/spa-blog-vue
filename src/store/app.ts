import { defineStore } from 'pinia';

interface IState {
  counter: number;
}

export const useAppStore = defineStore('app', {
  state: () => ({ counter: 0 } as IState),
  getters: {
    getCounter: (state) => state.counter,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
