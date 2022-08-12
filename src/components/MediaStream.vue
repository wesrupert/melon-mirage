<template>
  <div class="media" :class="isScreen ? 'screen' : 'webcam'"></div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps<{
  title?: string;
  type: "video" | "screen";
}>();

const isScreen = computed(() => props.type === "screen");
</script>

<style lang="scss">
.media {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

.screen {
  background-image: url(@/assets/screenshare-image.png);
}

.webcam {
  background-image: url(@/assets/webcam-image.png);
}
</style>
