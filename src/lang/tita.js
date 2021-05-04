import russ from './russ.js';

const meta = {
  letters: 'Й|Ю|Ц|Б|У|Ь|К|Т|Е|И|Н|М|Г|С|Ш|Ч|Щ|Я|З|Ё|Ъ|Ф|Э|Ы|Ж|В|Д|А|Л|П|О|Р|Й',
  title: 'Титанический',
};

function to(origin) {
  const originArr = Array.from(origin.toLowerCase());
  let result = '';
  originArr.forEach((letter) => {
    const id = russ.toLowerCase().split('|').indexOf(letter);
    if (id == -1) {
      result += letter;
    } else {
      result += meta.letters.toLowerCase().split('|')[id];
    }
  });
  return result;
}

function from(origin) {
  const originArr = Array.from(origin.toLowerCase());
  let result = '';
  originArr.forEach((letter) => {
    const id = meta.letters.toLowerCase().split('|').indexOf(letter);
    if (id == -1) {
      result += letter;
    } else {
      result += russ.toLowerCase().split('|')[id];
    }
  });
  return result;
}

export default { meta, to, from };
