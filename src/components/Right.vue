<template>
  <v-col>
    <h1 class="text-h2">Ezoic</h1>
    <p class="text-subtitle-1">
      Переводчик с русского на доисторические(выдуманные) языки
    </p>
    <v-alert type="info" outlined>
      Использованные библиотеки:
      <ul>
        <li v-for="lib in libs" :key="lib.title">
          <a :href="lib.link">{{ lib.title }}</a>
          – {{ lib.description }}
        </li>
      </ul>
    </v-alert>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      libs: [
        {
          title: 'Vue',
          link: 'https://ru.vuejs.org/',
          description: 'Реактивный фреймворк для управления приложением',
        },
        {
          title: 'Vuex',
          link: 'https://vuex.vuejs.org/ru/',
          description: 'Библиотека дла управления состоянием приложения',
        },
        {
          title: 'Vuetify',
          link: 'https://vuetifyjs.com/',
          description: 'Дизайн',
        },
      ],
    };
  },
};
</script>
