export const mutations = {
  pushLang(state, lang) {
    state.langs.push(lang);
  },
  updateTextFrom(state, text) {
    state.textFrom = text;
  },
  updateTextTo(state, text) {
    state.textTo = text;
  },
  updateLangFrom(state, lang) {
    state.langFrom = lang;
  },
  updateLangTo(state, lang) {
    state.langTo = lang;
  },
};
