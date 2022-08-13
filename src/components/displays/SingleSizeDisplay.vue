<template>
  <TemplateDisplay>
    <template #view>
      <MediaStream class="stream" :source="props.source" />
    </template>
    <template v-if="props.source" #layouts>
      <LayoutButton token="screen" :selected="true" />
    </template>
  </TemplateDisplay>
</template>

<script setup lang="ts">
import LayoutButton from "@/components/LayoutButton.vue";
import MediaStream from "@/components/MediaStream.vue";
import { defineProps } from "vue";
import TemplateDisplay from "./TemplateDisplay.vue";

const props = defineProps<{ source?: string }>();
</script>
