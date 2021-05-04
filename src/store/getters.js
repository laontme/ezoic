export const getters = {
  getLangsFrom(state) {
    return state.langs.map((lang) => {
      return {
        text: lang.title,
        value: lang.key,
        disabled: state.langTo == lang.key,
      };
    });
  },
  getLangsTo(state) {
    return state.langs.map((lang) => {
      return {
        text: lang.title,
        value: lang.key,
        disabled: state.langFrom == lang.key,
      };
    });
  },
};
