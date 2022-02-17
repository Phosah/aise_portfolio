import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      themeColor: localStorage.getItem("theme-color") ?? "dark",
      menuState: "hidden",
    };
  },
  mutations: {
    changeTheme(state, color) {
      state.themeColor = color;
      // state.themeColor = state.themeColor === "dark" ? "light" : "dark";

      localStorage.setItem("theme-color", state.themeColor);
    },
    openMenu(state) {
      state.menuState = "block";
    },
    closeMenu(state) {
      state.menuState = "hidden";
    },
  },
});

export default store;
