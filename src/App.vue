<template>
  <h1>Hello world!</h1>
  <p>How's it going?</p>
  <div class="sidebar">
    <MediaSource type="screen" />
    <MediaSource type="video" />
    <MediaSource title="Hello title!" type="video" />
    <MediaSource title="Hello title!" type="video">
      <button class="primary">Click me!</button>
    </MediaSource>
    <MediaSource title="Hello title!" type="screen">
      <div>Hello slot!</div>
      <button class="primary">Click me!</button>
    </MediaSource>
  </div>
</template>

<script setup lang="ts">
import MediaSource from "./components/MediaSource.vue";
</script>

<style lang="scss">
@import "styles/_global.scss";

.sidebar {
  width: clamp(200px, 50%, 300px);
  display: flex;
  flex-direction: column;
  gap: $gap-m;
}
</style>
