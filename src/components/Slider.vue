<template>
  <div class="slider-container">
    <h2 class="slider-title">Images from API:</h2>
    <div class="card-container">
      <div class="card" v-for="image in visibleImages" :key="image.id">
        <img :src="image.download_url" :alt="image.author" class="card-image" />
        <div class="card-details">
          <p class="image-id">{{ image.id }}</p>
          <div class="svg_links">
            <a :href="image.download_url" target="_blank" class="download_link">
              <svg class="icon_svg">
                <use
                  xlink:href="../assets/sprite-svg/download.svg#download"
                ></use>
              </svg>
            </a>
            <a :href="image.url" target="_blank" class="download_link">
            <svg class="icon_svg">
              <use
                xlink:href="../assets/link.svg#link"
              ></use>
            </svg>
          </a>         
          </div>
          <div class="card_bot">
            <p class="author">{{ image.author }}</p>
            <button @click="addToSelectedImages(image)" class="btn_add">
              <svg class="icon_svg">
                <use xlink:href="../assets/sprite-svg/add.svg#add"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="slider-btns">
      <button class="slider-btn" @click="prev">Попередній</button>
      <button class="slider-btn" @click="next">Наступний</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";

const currentIndex = ref(0);
const itemsPerPage = 3;

const props = defineProps({
  imagesList: {
    type: Array,
    required: true,
  },
  selectedImages: {
    type: Array,
    required: true,
  },
});

const addToSelectedImages = (image) => {
  if (!props.selectedImages.some((img) => img.id === image.id)) {
    props.selectedImages.push(image);
  }
};

const currentImage = computed(() => {
  return props.imagesList[currentIndex.value];
});

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.imagesList.length;
};

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.imagesList.length) %
    props.imagesList.length;
};

const isMobileScreen = () => {
  return window.innerWidth <= 767;
};

const visibleImages = computed(() => {
  if (isMobileScreen()) {
    return [currentImage.value];
  } else {
    const start = currentIndex.value;
    const end = start + itemsPerPage;
    return props.imagesList.slice(start, end);
  }
});
</script>

<style scoped>
.slider-container {
  padding: 20px;
}

.slider-title {
  text-align: center;
}

.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 300px;
  overflow: hidden;
}

.card {
  max-width: 380px;
  width: 100%;
  height: 280px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  margin: 10px;
  position: relative;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
}

.card-details {
  opacity: 0;
  transition: opacity 0.5s ease;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 10px;
}
.card:hover .card-details {
  opacity: 1;
}
.card_bot {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 10px);
}
.author {
  font-weight: bold;
  margin-bottom: 5px;
  color: #fff;
}
.svg_links {
  position: absolute;
  right: 3px;
  top: 5px;
}
.download_link,
.btn_add {
  cursor: pointer;
  background: transparent;
  border: none;
}
.icon_svg {
  width: 30px;
  height: 30px;
  fill: #ff9902;
}
.image-id {
  color: gray;
  font-size: 14px;
}
.slider-btns {
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  gap: 20px;
}
.slider-btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff9902;
  color: #2e3239;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
  font-weight: 600;
}

.slider-btn:hover {
  animation: pulseAnimation 0.6s ease infinite;
}
@keyframes pulseAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
