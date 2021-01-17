window.addEventListener('DOMContentLoaded', loaded);

const dicts = {};
const dictsPaths = [
  'rus-tit.json',
  'test.json'
];

function translate() {
  document.getElementById('text-to').value = '';
  let textFrom = Array.from(document.getElementById('text-from').value);
  let langFrom = document.getElementById('lang-from').value;
  let langTo = document.getElementById('lang-to').value;
  let result = '';

  textFrom.forEach(el => {
    let letterIndex = dicts[`${langFrom}-${langTo}`][0].indexOf(el);
    document.getElementById('text-to').value += dicts[`${langFrom}-${langTo}`][1][letterIndex];
  });
}

async function langsSelect(origin, langs) {
  let langFrom = document.getElementById('lang-from');
  let langTo = document.getElementById('lang-to');
  // let langs = [];
  // let elements = [];
  langs.forEach((el, i) => {
    let element = document.createElement('option');
    element.value = langs[i]
    element.innerText = origin[langs[i]].title;
    langFrom.appendChild(element);
    element = document.createElement('option');
    element.value = langs[i]
    element.innerText = origin[langs[i]].title;
    langTo.appendChild(element);
  });
}

async function loaded() {
  dictsPaths.forEach(async el => {
    // let origin = {};
    fetch(`/dicts/${el}`).then(res => res.json()).then(origin => {
      // origin = data;
      // let origin = await res.json();
      let langs = Object.keys(origin);
      dicts[`${langs[0]}-${langs[1]}`] = [
        origin[langs[0]].letters,
        origin[langs[1]].letters,
      ];
      dicts[`${langs[1]}-${langs[0]}`] = [
        origin[langs[1]].letters,
        origin[langs[0]].letters,
      ];
      langsSelect(origin, langs);
      document.getElementById('translate').addEventListener('click', translate);
    })
  });
}