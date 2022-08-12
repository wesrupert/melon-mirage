<template>
  <div class="display">
    <!-- <MultiLayoutDisplay v-if="isVideoAndScreen" /> -->
    <!-- <MultiSizeDisplay v-else-if="isVideoOnly" /> -->
    <MultiSizeDisplay v-if="isVideoOnly" :source="currentVideo?.source" />
    <SingleSizeDisplay v-else :source="currentScreen?.source" />
  </div>
</template>

<script setup lang="ts">
import { key } from "@/store";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import MultiSizeDisplay from "./displays/MultiSizeDisplay.vue";
import SingleSizeDisplay from "./displays/SingleSizeDisplay.vue";

const store = useStore(key);

const currentScreen = computed(() =>
  store.state.currentScreen !== undefined
    ? store.state.sources[store.state.currentScreen]
    : undefined
);
const currentVideo = computed(() =>
  store.state.currentVideo !== undefined
    ? store.state.sources[store.state.currentVideo]
    : undefined
);

const isVideoAndScreen = computed(() => !!(currentScreen && currentVideo));
const isVideoOnly = computed(() => !!(!currentScreen && currentVideo));
</script>

<style scoped lang="scss">
@import "@/styles/_theme.scss";

.display {
  width: 100%;
  height: 100%;
}
</style>
