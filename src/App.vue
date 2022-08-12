<template>
  <AddSourceModal
    v-if="isAddSourceModalVisible"
    @close="onCloseAddSouceModal"
  />
  <div class="sidebar">
    <button class="primary add-source" @click="onAddSourceClick">
      Add Source
    </button>
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

    <MediaSource v-for="source in sources" :key="source.key" :source="source" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import MediaSource from "./components/MediaSource.vue";
import { key } from "./store";
import AddSourceModal from "./components/AddSourceModal.vue";

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

.sidebar {
  width: clamp(200px, 33%, 300px);
  height: 100%;
  padding: $gap-m;
  border-right: 2px solid $border-color;

  display: flex;
  flex-direction: column;
  gap: $gap-m;
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
</style>
