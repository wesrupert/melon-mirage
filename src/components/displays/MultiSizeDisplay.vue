<template>
  <div class="multi-size">
    <div class="display">
      <div class="ratio-wrapper">
        <div class="size-wrapper">
          <MediaStream
            class="stream"
            :class="{
              small: showSmallSize,
              medium: showMediumSize,
              large: showLargeSize,
            }"
            :source="props.source"
          />
        </div>
      </div>
    </div>
    <div class="layouts-wrapper">
      <div class="layouts">
        <LayoutButton
          token="webcam-l"
          :selected="showLargeSize"
          @click="onShowLargeSizeClicked"
        />
        <LayoutButton
          token="webcam-m"
          :selected="showMediumSize"
          @click="onShowMediumSizeClicked"
        />
        <LayoutButton
          token="webcam-s"
          :selected="showSmallSize"
          @click="onShowSmallSizeClicked"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutButton from "@/components/LayoutButton.vue";
import MediaStream from "@/components/MediaStream.vue";
import { computed } from "@vue/reactivity";
import { defineProps, ref } from "vue";

type Size = "s" | "m" | "l";

const props = defineProps<{ source?: string }>();

const style = ref<Size>("l");

const showSmallSize = computed(() => style.value === "s");
const showMediumSize = computed(() => style.value === "m");
const showLargeSize = computed(() => style.value === "l");

function onShowLargeSizeClicked() {
  style.value = "l";
}

function onShowMediumSizeClicked() {
  style.value = "m";
}

function onShowSmallSizeClicked() {
  style.value = "s";
}
</script>

<style scoped lang="scss">
@import "@/styles/theme";
@import "./displays";

.multi-size {
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

.size-wrapper {
  @include ratio-contents;
  background-color: $black;
}

.stream {
  &.small {
    transform: scale(60%);
  }

  &.medium {
    transform: scale(80%);
  }
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
