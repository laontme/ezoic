<template>
  <div>
    <v-select
      v-model="langFrom"
      full-width
      :items="langsFrom"
      label="С какого"
      outlined
      block
      background-color="white"
    />
    <v-select
      v-model="langTo"
      full-width
      :items="langsTo"
      label="На какой"
      outlined
      block
      background-color="white"
    />
  </div>
</template>

<script>
export default {
  computed: {
    langsFrom() {
      return this.$store.getters.getLangsFrom;
    },
    langsTo() {
      return this.$store.getters.getLangsTo;
    },
    langFrom: {
      get() {
        return this.$store.state.langFrom;
      },
      set(value) {
        this.$store.commit('updateLangFrom', value);
      },
    },
    langTo: {
      get() {
        return this.$store.state.langTo;
      },
      set(value) {
        this.$store.commit('updateLangTo', value);
      },
    },
  },
};
</script>
