<template>
  <div
    class="media"
    :style="{
      'background-image': props.source ? `url(${props.source})` : 'unset',
    }"
  ></div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{ source?: string }>();
</script>

<style lang="scss">
.media {
  width: 100%;
  height: 100%;
  background-color: black;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
