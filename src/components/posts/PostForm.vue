<template>
  <form>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">제목</label>
      <input
        v-focus
        v-color="'royalblue'"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
        type="text"
        class="form-control"
        id="title"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">내용</label>
      <textarea
        :value="content"
        @input="$emit('update:content', $event.target.value)"
        class="form-control"
        id="content"
        rows="3"
      ></textarea>
    </div>
    <div class="d-flex gap-2 mt-4">
      <slot name="actions"></slot>
    </div>
  </form>
</template>

<script setup>
// const vFocus = {
//   mounted: (el) => {
//     el.focus();
//   },
// };
defineProps({
  title: String,
  content: String,
});
// 다중 v-model 구현을 위해 Emits 사용
defineEmits(['updatae:title', 'updatae:content']);
</script>

<style lang="scss" scoped></style>
