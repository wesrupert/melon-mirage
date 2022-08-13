<template>
  <TemplateDisplay>
    <template #view>
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
    </template>
    <template #layouts>
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
    </template>
  </TemplateDisplay>
</template>

<script setup lang="ts">
import LayoutButton from "@/components/LayoutButton.vue";
import MediaStream from "@/components/MediaStream.vue";
import { computed } from "@vue/reactivity";
import { defineProps, ref } from "vue";
import TemplateDisplay from "./TemplateDisplay.vue";

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

.size-wrapper {
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
</style>
