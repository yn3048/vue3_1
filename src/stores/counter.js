import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 1,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    doubleCountPlusOne() {
      return this.doubleCount + 1;
    },
  },
  actions: {
    // 주의: 화살표 함수를 사용 할 경우 this에 접근할 수 없음!!
    increment() {
      this.counter++;
    },
  },
});
