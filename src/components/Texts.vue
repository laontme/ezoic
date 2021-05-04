<template>
  <div>
    <v-textarea
      v-model="textFrom"
      outlined
      background-color="white"
      label="Текст для перевода"
      rows="2"
    />
    <v-textarea
      v-model="textTo"
      readonly
      outlined
      background-color="white"
      label="Перевод"
      rows="2"
    />
  </div>
</template>

<script>
export default {
  computed: {
    textFrom: {
      get() {
        return this.$store.state.textFrom;
      },
      set(value) {
        this.$store.commit('updateTextFrom', value);
      },
    },
    textTo() {
      return this.$store.state.textTo;
    },
  },
};
</script>
