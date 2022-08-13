<template>
  <button class="layout" :class="{ selected: props.selected }" @click="onClick">
    <template v-if="props.token === 'screen'">
      <div class="sprite screen">
        <div class="icon icon-screen" />
      </div>
    </template>

    <template v-if="props.token === 'webcam-l'">
      <div class="sprite webcam large">
        <div class="icon icon-webcam" />
      </div>
    </template>
    <template v-if="props.token === 'webcam-m'">
      <div class="sprite webcam medium">
        <div class="icon icon-webcam" />
      </div>
    </template>
    <template v-if="props.token === 'webcam-s'">
      <div class="sprite webcam small">
        <div class="icon icon-webcam" />
      </div>
    </template>
  </button>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

export type Token =
  | "webcam-s"
  | "webcam-m"
  | "webcam-l"
  | "screen"
  | "mixed-left"
  | "mixed-right"
  | "mixed-shared";

const props = defineProps<{ selected: boolean; token: Token }>();

const emit = defineEmits(["click"]);

function onClick(...args: any[]) {
  emit("click", ...args);
}
</script>

<style scoped lang="scss">
@import "@/styles/theme";

$bg: $bg-primary;
$primary: $accent;
$secondary: #91979a3d;
$tertiary: #e3e8eb;

button.layout {
  width: 102px;
  height: 70px;
  margin: 0;
  padding: 0;
  background-color: $tertiary;
  border: solid 2px transparent;
  border-radius: $radius-l;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;

  &.selected,
  &:hover {
    border: solid 2px $primary;
  }

  &.selected {
    background-color: $bg;
  }
}

.sprite {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $secondary;
}

.webcam {
  border: solid 2px transparent;
  border-radius: $radius-m;

  &.large {
    background-color: transparent;
  }

  &.medium {
    margin: 10%;
  }

  &.small {
    margin: 15%;
  }
}

.icon {
  width: 18px;
  height: 18px;
  background-size: contain;
  filter: saturate(0);

  .selected & {
    filter: unset;
  }
}

.icon-screen {
  background-image: url(@/assets/screenshare.png);
}

.icon-webcam {
  background-image: url(@/assets/user.png);
}
</style>
