<template>
  <button
    @click="handleClick"
    aria-label="Toggle Darkmode"
    class="btn btn-sm"
    title="Toggle Darkmode"
  >
    <slot :dark="isDarkMode" />
  </button>
</template>

<script>
export const LIGHTS_OUT = "dark-mode";
export const LIGHTS_ON = "light-mode";

var mode = LIGHTS_ON;

export default {
  data() {
    return {
      isDarkMode: false,
      mode: LIGHTS_ON,
    };
  },

  methods: {
    handleClick() {
      mode = LIGHTS_OUT;
      const hasDarkMode = document.body.hasAttribute(mode);
      // Toggle dark mode on click.
      return this.toggleDarkMode(!hasDarkMode);
    },

    toggleDarkMode(shouldBeDark) {
      document.body.toggleAttribute(mode, shouldBeDark);

      this.isDarkMode = shouldBeDark;

      this.writeToStorage(shouldBeDark);

      return shouldBeDark;
    },

    detectPrefered() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.body.toggleAttribute(mode);
      }
    },

    hasInStorage() {
      const check = localStorage.getItem(mode);

      return check !== null;
    },

    writeToStorage(prefersDark) {
      localStorage.setItem(mode, prefersDark ? "true" : "false");
    },

    getFromStorage() {
      return localStorage.getItem(mode) === "true" ? true : false;
    },
  },

  mounted() {
    if (this.hasInStorage()) {
      this.toggleDarkMode(this.getFromStorage());
    } else if (process.isClient && window.matchMedia) {
      this.toggleDarkMode(this.detectPrefered());
    }
  },
};
</script>

<style>
</style>