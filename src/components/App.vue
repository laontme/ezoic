<template>
  <v-app id="inspire">
    <v-main class="white">
      <!-- <v-main class="grey lighten-3"> -->
      <v-container>
        <v-row>
          <Left />
          <Right />
        </v-row>
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Left from '@/components/Left.vue';
import Right from '@/components/Right.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Left, Right, Footer },
};
</script>
