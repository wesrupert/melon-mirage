<template>
  <div class="single-screen">
    <div class="display">
      <div class="ratio-wrapper">
        <MediaStream class="stream" :source="props.source" />
      </div>
    </div>
    <div v-if="props.source" class="layouts-wrapper">
      <div class="layouts">
        <LayoutButton token="screen" :selected="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutButton from "@/components/LayoutButton.vue";
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: $display-gap-m;
}

.display {
  width: min(100%, $display-max-width);
  padding: $display-gap-m;
}

.ratio-wrapper {
  width: 100%;
  @include ratio-wrapper;
}

.stream {
  @include ratio-contents;
}

.layouts-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.layouts {
  display: grid;
  gap: $gap-s;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  padding: $gap-s;
}
</style>
