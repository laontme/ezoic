import langs from './langs.mjs';

const langFrom = document.querySelector('#lang-from');
const langTo = document.querySelector('#lang-to');
const textFrom = document.querySelector('#text-from');
const textTo = document.querySelector('#text-to');

document.querySelector('#translate').addEventListener('click', event => {
  translate();
});

for (const key in langs) {
  if (Object.hasOwnProperty.call(langs, key)) {
    const lang = langs[key];
    addOption(lang.title, key);
  }
}

async function addOption(title, value) {
  const element = document.createElement('option');
  element.value = value;
  element.innerText = title;
  langFrom.appendChild(element);
  langTo.appendChild(element.cloneNode(true));
}

async function translate() {
  const symbolsFrom = textFrom.value.split(/(?=[А-Я])/);
  let result = '';
  symbolsFrom.forEach(symbol => {
    const id = langs[langFrom.value].symbols.split('|').indexOf(symbol);
    if (id == -1) {
      result += symbol;
    } else {
      result += langs[langTo.value].symbols.split('|')[id];
    }
  });
  result = result.replace('@', '');
  textTo.value = result;
}
