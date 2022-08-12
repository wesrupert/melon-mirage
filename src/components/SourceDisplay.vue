<template>
  <div class="source">
    <div class="source-stream">
      <MediaStream class="source-stream" :source="props.source.source" />
      <div class="overlay">
        <button v-if="isSourceOnStream" class="tertiary" @click="onHideClick">
          Hide on stream
        </button>
        <button v-else @click="onShowClick">Show on stream</button>
      </div>
    </div>
    <div v-if="props.source.title" class="title">{{ props.source.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { key, Mutations } from "@/store";
import { Media } from "@/vuex";
import { computed, defineProps } from "vue";
import { useStore } from "vuex";
import MediaStream from "./MediaStream.vue";

const store = useStore(key);
const props = defineProps<{ source: Media }>();

const isSourceOnStream = computed(() =>
  props.source.type === "screen"
    ? props.source.key === store.state.currentScreen
    : props.source.key === store.state.currentVideo
);

function onShowClick() {
  store.commit(Mutations.SHOW_SOURCE, props.source.key);
}

function onHideClick() {
  store.commit(Mutations.HIDE_SOURCE, props.source.key);
}
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
  z-index: 2;
}

.source-stream {
  @include ratio-contents;
  @include rounded-corners;
}
</style>
