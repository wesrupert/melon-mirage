<template>
  <div class="app">
    <AddSourceModal
      v-if="isAddSourceModalVisible"
      @close="onCloseAddSouceModal"
    />
    <div class="sidebar">
      <div class="add-source">
        <button @click="onAddSourceClick">Add Source</button>
      </div>
      <button
        v-if="showPlaceholder"
        class="secondary placeholder"
        @click="onAddSourceClick"
      >
        <div class="placeholder-contents">
          <div>
            <h1 class="add">+</h1>
            <h2>Add media source</h2>
            <p>Screenshare, Camera</p>
          </div>
        </div>
      </button>

      <MediaSource
        v-for="source in sources"
        :key="source.key"
        :source="source"
      />
      <div class="spacer"></div>
    </div>
    <div class="main"></div>
    <QuickButtons />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import AddSourceModal from "./components/AddSourceModal.vue";
import MediaSource from "./components/MediaSource.vue";
import QuickButtons from "./components/QuickButtons.vue";
import { key } from "./store";

const isAddSourceModalVisible = ref(false);

const store = useStore(key);

const sources = computed(() => store.state.sources);

const showPlaceholder = computed(() => store.state.sources.length === 0);

function onAddSourceClick() {
  isAddSourceModalVisible.value = true;
}

function onCloseAddSouceModal() {
  isAddSourceModalVisible.value = false;
}
</script>

<style lang="scss">
@import "@/styles/_global.scss";

.app {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}

.sidebar {
  width: clamp(200px, 33%, 300px);
  height: 100%;
  padding: 0 $gap-m;
  border-right: 2px solid $border-color;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: $gap-m;
}

.add-source {
  background-color: $bg-primary;
  position: sticky;
  top: 0;
  padding: $gap-m 0;
  z-index: 10;

  button {
    width: 100%;
  }
}

.placeholder {
  padding: 0;
  @include ratio-wrapper;
}

.placeholder-contents {
  @include ratio-contents;
  font-weight: normal;
  line-height: 1em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: $font-xxl;
    color: $accent;
  }
}

.spacer {
  width: 100%;
  padding-top: $gap-s;
}
</style>
