// vuex.d.ts
import { Store } from "vuex";

type MediaSourceType = "screen" | "video";

interface Media {
  key: number;
  title: string;
  type: MediaSourceType;
  source: string;
}

interface State {
  sources: Media[];
  currentScreen?: number;
  currentVideo?: number;
  layout: number;
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
