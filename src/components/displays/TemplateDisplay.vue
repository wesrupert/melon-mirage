<template>
  <div class="viewport">
    <div class="display">
      <div class="ratio-wrapper">
        <slot name="view" />
      </div>
    </div>
    <div class="layouts-wrapper">
      <div class="layouts">
        <slot name="layouts" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/theme";

$display-max-width: 1500px;
$display-gap-m: 32px;

.viewport {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.display {
  width: min(100%, $display-max-width);
  padding: $display-gap-m;
}

.ratio-wrapper {
  width: 100%;
  @include ratio-wrapper;

  ::v-deep > * {
    @include ratio-contents;
  }
}

.layouts-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  // Padding to help keep buttons above the go live tray
  padding-bottom: $gap-l;
}

.layouts {
  display: grid;
  gap: $gap-s;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  padding: $gap-s;
}
</style>
