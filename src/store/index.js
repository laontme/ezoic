import Vue from 'vue';
import Vuex from 'vuex';

import { state } from '@/store/state.js';
import { mutations } from '@/store/mutations.js';
import { getters } from '@/store/getters.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  mutations,
  getters,
});
