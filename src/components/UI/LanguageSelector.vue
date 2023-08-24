<template>
  <div class="languageFlags">
    <img
      src="../../assets/greekFlag.png"
      alt="Greek"
      @click="setLanguage('gr')"
      class="rounded align-text-end me-2"
      width="30"
      style="cursor:pointer"
    />
    <img
      src="../../assets/englishFlag.png"
      alt="English"
      @click="setLanguage('en')"
      class="rounded align-text-end"
      width="30"
      style="cursor:pointer"
    />
  </div>
</template>

<script>
export default {
  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang; // Set the selected language
    },
  },
};
</script>
<style>
div .languageFlags {
  position: absolute;
  top: 2px; 
  right: 10px; 
}
</style>