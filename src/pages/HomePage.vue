<template>
  <main>
    <div class="section" v-if="imagesLoaded && images.length > 0">
      <slider :imagesList="images" :selectedImages="selectedImages"></slider>
      <selected-images-list
        :selectedImages="selectedImages"
      ></selected-images-list>
    </div>
    <div v-else>
      <p v-if="isLoading">Loading images...</p>
      <p v-else>No images to display.</p>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Slider from "../components/Slider.vue";
import SelectedImagesList from "../components/SelectedImages.vue";

const images = ref([]);
const selectedImages = ref([]);
const isLoading = ref(true);
const imagesLoaded = ref(false);

const fetchImages = async () => {
  try {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    console.log(data);
    images.value = data;
    isLoading.value = false;
    imagesLoaded.value = true;
  } catch (error) {
    console.error("Failed to fetch images:", error);
    isLoading.value = false;
  }
};

onMounted(fetchImages);
</script>

<style scoped>
.section {
  padding: 55px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
</style>
