import russ from './russ.js';

const meta = {
  letters: 'Но|Ръ|Бю|Ал|К|Ра|Ра|Фэ|Му|Ы|Ы|О|Л|Со|Ло|Эръ|По|Ня|Нь|Х|А|Хоъ|Лю|@|Фо|Жё|Жё|@|Э|@|Ро|Нт|Нъ',
  title: 'Постэпохальный'
};

function to(origin) {
  const originArr = Array.from(origin.toLowerCase());
  let result = '';
  originArr.forEach(letter => {
    const id = russ.toLowerCase().split('|').indexOf(letter);
    if (id == -1) {
      result += letter;
    } else {
      result += meta.letters.split('|')[id];
    }
  });
  return result;
}

function from(origin) {
  const originArr = origin.split(/(?=[А-Я]|\n|\040)/);
  let result = '';
  originArr.forEach(letter => {
    const id = meta.letters.split('|').indexOf(letter);
    if (id == -1) {
      result += letter;
    } else {
      result += russ.toLowerCase().split('|')[id];
    }
  });
  return result;
}

export default { meta, to, from };
