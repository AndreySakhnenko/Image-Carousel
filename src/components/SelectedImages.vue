<template>
  <div>
    <h3>Обрані зображення:</h3>
    <ul>
      <li v-for="selectedImage in selectedImages" :key="selectedImage.id">
        <span>{{ selectedImage.author }}</span>
        <a :href="selectedImage.url" target="_blank">{{ selectedImage.url }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  selectedImages: {
    type: Array,
    required: true,
  },
});
</script>
<style scoped></style>
