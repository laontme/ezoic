import * as langs from '@/lang/index.js';

const langsKV = Object.entries(langs).map((lang) => {
  return {
    key: lang[0],
    title: lang[1].meta.title,
  };
});

langsKV.push({ key: 'russ', title: 'Русский' });

export const state = {
  langs: langsKV,
  textFrom: '',
  textTo: '',
  langFrom: '',
  langTo: '',
};
