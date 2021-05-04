<template>
  <v-btn block @click="handleClick"> Перевести </v-btn>
</template>

<script>
import * as langs from '@/lang/';

export default {
  methods: {
    handleClick() {
      const langFrom = this.$store.state.langFrom;
      const langTo = this.$store.state.langTo;
      const textFrom = this.$store.state.textFrom;
      let result = '';

      if (langFrom == 'russ') {
        result = langs[langTo].to(textFrom);
      } else if (langTo == 'russ') {
        result = langs[langFrom].from(textFrom);
      } else {
        result = langs[langFrom].from(textFrom);
        result = langs[langTo].to(result);
      }
      this.$store.commit('updateTextTo', result);
    },
  },
};
</script>
