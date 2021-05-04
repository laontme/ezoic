<template>
  <v-col>
    <LangSelect />
    <Texts />
    <Translate />
  </v-col>
</template>

<script>
import Translate from '@/components/Translate.vue';
import Texts from '@/components/Texts.vue';
import LangSelect from '@/components/LangSelect.vue';

export default {
  components: { Translate, LangSelect, Texts },
  methods: {
    handleClick() {
      alert(111);
    },
  },
};
</script>
