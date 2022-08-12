<template>
  <div class="single-screen">
    <div class="margin-wrapper">
      <div class="ratio-wrapper">
        <MediaStream class="stream" :source="props.source" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MediaStream from "@/components/MediaStream.vue";
import { defineProps } from "vue";
const props = defineProps<{ source?: string }>();
</script>

<style scoped lang="scss">
@import "@/styles/theme";
@import "_displays.scss";

.single-screen {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.margin-wrapper {
  width: min(100%, $display-max-width);
  margin: $display-gap-m;
}

.ratio-wrapper {
  width: 100%;
  @include ratio-wrapper;
}

.stream {
  @include ratio-contents;
}
</style>
