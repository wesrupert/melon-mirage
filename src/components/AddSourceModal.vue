<template>
  <div class="mask">
    <div class="modal">
      <h1>Add a new media source</h1>
      <div class="sources">
        <button
          v-for="source in sources"
          :key="source.actionTitle"
          class="secondary"
          @click="onSourceClick(source)"
        >
          <h2>{{ source.actionTitle }}</h2>
          <p>{{ source.actionDescription }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import { key, Mutations } from "@/store";
import { MediaSourceType } from "@/vuex";
import { useStore } from "vuex";

interface NewSourceMetadata {
  type: MediaSourceType;
  title: string;
  actionTitle: string;
  actionDescription: string;
}

const sources: NewSourceMetadata[] = [
  {
    type: "screen",
    title: "My screen feed",
    actionTitle: "Screenshare",
    actionDescription:
      "Share your entire screen, window or a specific Chrome tab",
  },
  {
    type: "video",
    title: "My video feed",
    actionTitle: "Video Feed",
    actionDescription:
      "Share a feed of your in-built webcam and microphone. If you do not have a webcam, you can use a “virtual” webcam such as Streamlabs Desktop virtual camera",
  },
];

const emit = defineEmits(["close"]);
const store = useStore(key);

function onSourceClick(source: NewSourceMetadata) {
  store.commit(Mutations.ADD_SOURCE, {
    title: source.title,
    type: source.type,
  });
  emit("close");
}
</script>

<style lang="scss">
@import "@/styles/theme";

.mask {
  z-index: 50;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  @include rounded-corners($radius-l);
  width: clamp(300px, 70%, 500px);
  padding: $gap-l;

  background-color: $bg-primary;
  color: $fg-primary;
  filter: drop-shadow(0 0 $radius-m $secondary);

  display: flex;
  flex-direction: column;
  gap: $gap-l;
}

.sources {
  display: grid;
  gap: $gap-l;
  grid-template-columns: 1fr 1fr;

  button {
    font-weight: normal;
  }
}
</style>
