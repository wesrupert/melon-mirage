import { Media, MediaSourceType, State } from "@/vuex";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export const key: InjectionKey<Store<State>> = Symbol();

export const Mutations = {
  ADD_SOURCE: "add",
  SHOW_SOURCE: "show",
  HIDE_SOURCE: "hide",
};

export default createStore<State>({
  state: () => ({
    sources: [
      {
        title: "Test screen",
        key: 0,
        type: "screen",
      },
      {
        title: "Test video",
        key: 1,
        type: "video",
      },
    ],
    layout: 0,
    currentScreen: 0,
    currentVideo: undefined,
  }),
  getters: {},
  mutations: {
    [Mutations.ADD_SOURCE]: (
      state,
      payload: { title: string; type: MediaSourceType }
    ) => {
      state.sources = [
        ...state.sources,
        {
          title: payload.title,
          type: payload.type,
          key: state.sources.length,
        },
      ];
    },
    [Mutations.SHOW_SOURCE]: (state, key: number) => {
      const source = state.sources[key];
      if (!source) {
        return;
      }
      if (source.type === "screen") {
        state.currentScreen = key;
      } else {
        state.currentVideo = key;
      }
    },
    [Mutations.HIDE_SOURCE]: (state, key: number) => {
      if (state.currentScreen === key) {
        state.currentScreen = undefined;
      } else if (state.currentVideo === key) {
        state.currentVideo = undefined;
      }
    },
  },
});
