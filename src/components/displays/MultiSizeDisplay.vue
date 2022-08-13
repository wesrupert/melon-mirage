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

const layout = ref<Size>("l");

const showSmallSize = computed(() => layout.value === "s");
const showMediumSize = computed(() => layout.value === "m");
const showLargeSize = computed(() => layout.value === "l");

function onShowLargeSizeClicked() {
  layout.value = "l";
}

function onShowMediumSizeClicked() {
  layout.value = "m";
}

function onShowSmallSizeClicked() {
  layout.value = "s";
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
