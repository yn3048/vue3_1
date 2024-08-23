<template>
  <div>
    <h2>About View</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="$router.push('/')">Home으로 이동</button>
    <h2>Store</h2>
    <p>counter: {{ store.counter }}</p>
    <p>counter2: {{ counter }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <p>doubleCountPlusOne: {{ doubleCountPlusOne }}</p>
    <button class="btn btn-warning" @click="increment()">click!!</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const route = useRoute();
console.log('route.path: ', route.path);

const store = useCounterStore();
// store는 reactive로 매핑된 객체이다
// 따라서 구조분해 할당을 할 경우 반응성 연결이 끊어진다
// ✨이를 해결하기 위해서 storeToRefs() 함수 사용! (state, getter 경우)
//const { counter } = store;
const { counter, doubleCount, doubleCountPlusOne } = storeToRefs(store);
// ✨actions는 실행하는 함수이기 때문에 그냥 구조분해 할당을 통해 가져올 수 있다.
const { increment } = store;

// store로 정의된 state,actions는 component에 정의 된 것 리소스처럼 바로바로 사용 가능!
// ex)
//counter.value = 100;
// increment();
// increment();
</script>

<style lang="scss" scoped></style>
