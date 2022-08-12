<template>
  <div class="quick-buttons">
    <div class="contents">
      <button class="secondary">Chat</button>
      <button class="secondary">Record</button>
      <button>Go Live</button>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/theme";

.quick-buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
}

.contents {
  z-index: 25;
  display: grid;
  gap: $gap-s;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;

  background-color: $bg-primary;
  padding: $gap-s;

  border: 2px solid $border-color {
    bottom: unset;
    radius: $radius-m $radius-m 0 0;
  }

  button {
    padding: $gap-s $gap-l;
  }
}
</style>
