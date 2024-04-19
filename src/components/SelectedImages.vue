<template>
  <div class="selected">
    <h3>Обрані зображення:</h3>
    <ul>
      <li class="selected_item" v-for="selectedImage in selectedImages" :key="selectedImage.id">
        <span>{{ selectedImage.author }}</span>
        <a :href="selectedImage.url" target="_blank">{{ selectedImage.url }}</a>
        <button class="selected_btn" @click="removeFromSelectedImages(selectedImage)">
          <img src="../assets/delete.svg" alt="delete"/>   
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  selectedImages: {
    type: Array,
    required: true,
  },
});

const removeFromSelectedImages = (image) => {
  const index = props.selectedImages.findIndex((img) => img.id === image.id);
  if (index !== -1) {
    props.selectedImages.splice(index, 1);
  }
};
</script>

<style scoped>
.selected{
  padding: 0 15px;
}
.selected_item{
  display: flex;
  align-items: center;
  gap: 10px;
}
.selected_btn{
  border: none;
  background: transparent;
}
</style>
