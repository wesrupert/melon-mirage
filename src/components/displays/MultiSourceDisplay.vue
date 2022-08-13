<template>
  <TemplateDisplay>
    <template #view>
      <template v-if="showSideBySide">
        <div class="sxs">
          <MediaStream class="main stream" :source="props.streamSource" />
          <MediaStream class="side video" :source="props.videoSource" />
        </div>
      </template>
      <template v-else>
        <div class="pip">
          <MediaStream class="stream" :source="props.streamSource" />
          <div
            class="pip-wrapper ratio-wrapper"
            :class="{
              left: showPipLeft,
              right: showPipRight,
            }"
          >
            <MediaStream class="video" :source="props.videoSource" />
          </div>
        </div>
      </template>
    </template>
    <template #layouts>
      <LayoutButton
        token="mixed-left"
        :selected="showPipLeft"
        @click="onShowPipLeftClicked"
      />
      <LayoutButton
        token="mixed-right"
        :selected="showPipRight"
        @click="onShowPipRightClicked"
      />
      <LayoutButton
        token="mixed-sxs"
        :selected="showSideBySide"
        @click="onShowSideBySideClicked"
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

type Layout = "pip-l" | "pip-r" | "sxs";

const props = defineProps<{ streamSource?: string; videoSource?: string }>();

const layout = ref<Layout>("pip-l");

const showPipLeft = computed(() => layout.value === "pip-l");
const showPipRight = computed(() => layout.value === "pip-r");
const showSideBySide = computed(() => layout.value === "sxs");

function onShowPipLeftClicked() {
  layout.value = "pip-l";
}

function onShowPipRightClicked() {
  layout.value = "pip-r";
}

function onShowSideBySideClicked() {
  layout.value = "sxs";
}
</script>

<style scoped lang="scss">
@import "@/styles/theme";

.sxs {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10% 0;
}

.main {
  flex: 2;
}

.side {
  flex: 1;
}

.pip-wrapper {
  z-index: 2;
  position: absolute;
  width: 20%;
  height: 20%;
  bottom: $gap-m;

  &.left {
    left: $gap-m;
  }

  &.right {
    right: $gap-m;
  }
}
</style>
