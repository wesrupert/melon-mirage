<template>
  <div class="source">
    <div class="source-stream">
      <MediaStream class="source-stream" :type="props.type" />
      <div class="overlay">
        <slot />
      </div>
    </div>
    <div v-if="title" class="title">{{ props.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import MediaStream from "./MediaStream.vue";

const props = defineProps<{
  title?: string;
  type: "video" | "screen";
}>();
</script>

<style scoped lang="scss">
@import "@/styles/_theme.scss";

.source {
  @include ratio-wrapper;
}

.title {
  @include gradient;
  @include rounded-corners;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: $gap-s {
    top: $gap-l;
  }
  text-align: left;
}

.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.source-stream {
  @include ratio-contents;
  @include rounded-corners;
}
</style>
