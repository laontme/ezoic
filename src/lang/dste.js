const russ = 'А|Б|В|Г|Д|Е|Ё|Ж|З|И|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э|Ю|Я';

const meta = {
  letters:
    [
      'а’|аБ|аБ|ах|аД|аЙ|аЙ|аД|аС|Й|Й|ах|ал|Амь|ан’|о|аъ|арь|Ас|атд|аў|о|аХ|атд|ачъ|ан’|ан’|@|аў|@|Йэ|аў|а’',
      'бА|б’|б’|бк|Б’|БаЙ|БаЙ|Б’|бс|Бь|Бь|бк|Бл|пмъ|пн|Ба|п’|пр|бз|пт|бу|Ба|пх|пт|пч|пн|пн|@|бу|@|бЭ|бу|бА',
      'бА|б’|б’|бк|Б’|БаЙ|БаЙ|Б’|бс|Бь|Бь|бк|Бл|пмъ|пн|Ба|п’|пр|бз|пт|бу|Ба|пх|пт|пч|пн|пн|@|бу|@|бЭ|бу|бА',
      'Га|гп’|гп’|г’|гт|Гэ|Гэ|гт|Гз|Гь|Гь|г’|Гл|гм|Хн|го|Гд|ГР’|гсъ|Т’|гюу|го|кх|Т’|гъч|Хн|Хн|@|гюу|@|Ге|гюу|Га',
      'дь|дп’|дп’|дъг|д’|Дэ|Дэ|д’|дж|Дь|Дь|тк|Дл|дм|днъ|до|доп|дръ|@|дъ|дў|до|дъх|дъ|д’ч|днъ|днъ|@|дў|@|Дэ|дў|дь',
      'йА|еп’|еп’|йг|йЕд|е’|е’|йЕд|йз|Й’|Й’|йк|Ел|йм|йен|ейО|епь|йер|йес|эт|йў|ейО|йх|эт|йч|йен|йен|@|йў|@|йе|йў|йА',
      'йА|еп’|еп’|йг|йЕд|е’|е’|йЕд|йз|Й’|Й’|йк|Ел|йм|йен|ейО|епь|йер|йес|эт|йў|ейО|йх|эт|йч|йен|йен|@|йў|@|йе|йў|йА',
      'дь|дп’|дп’|дъг|д’|Дэ|Дэ|д’|дж|Дь|Дь|тк|Дл|дм|днъ|до|доп|дръ|@|дъ|дў|до|дъх|дъ|д’ч|днъ|днъ|@|дў|@|Дэ|дў|дь',
      'зА|зп’|зп’|сг|зТ|Зэ|Зэ|зТ|з’|Зь|Зь|зк|зл|см|сн’|со|зп|ср|сзс|зэт|су|со|сх|зэт|сч|сн’|сн’|@|су|@|Зэ|су|зА',
      'йа|йп|йп|йьг|еЙд|Йэ|Йэ|еЙд|Йс|й’|й’|йк|Йел|йм|йан|Йо|йпъ|Йар|Йсъ|@|йўу|Йо|йих|@|ийч|йан|йан|@|йўу|@|Йа|йўу|йа',
      'йа|йп|йп|йьг|еЙд|Йэ|Йэ|еЙд|Йс|й’|й’|йк|Йел|йм|йан|Йо|йпъ|Йар|Йсъ|@|йўу|Йо|йих|@|ийч|йан|йан|@|йўу|@|Йа|йўу|йа',
      'гА|кб|кб|к’|кть|Кэ|Кэ|кть|Кс|Кь|Кь|к’|кл|км|тн|кё|к’п|кръ|ксъ|кът|ку|кё|к’|кът|къч|тн|тн|@|ку|@|кЭ|ку|гА',
      'ля|льб|льб|лъг|Лд|Лэ|Лэ|Лд|Лс|Ль|Ль|л’к|л’|льм|лън|лё|льп’|л’рл|лъс|льт|лю|лё|лК|льт|льч|лън|лън|@|лю|@|Ла|лю|ля',
      'ма|мп|мп|мк|Мт|Мэ|Мэ|Мт|мСь|Мь|Мь|@|мл’|м’|мън|Мо|мъп|мрь|мсъ|@|му|Мо|@|@|@|мън|мън|@|му|@|мА|му|ма',
      'нА|нп|нп|нх|нтт|Нэ|Нэ|нтт|Нс|@|@|@|нл|нъм|н’|Но|н’п|нръ|нсъ|@|ну|Но|нк|@|н’ч|н’|н’|@|ну|@|нЭ|ну|нА',
      'а|об|об|ох|оТ|э’|э’|оТ|оЗ|@|@|ок|Ол|Ом|оН|о’|опъ|оръ|ос’|Ат|оў|о’|ох’|Ат|о’ч|оН|оН|@|оў|@|о’|оў|а',
      'пъ|п’|п’|ПГ|пад|Пэ|Пэ|пад|Пс|пь|пь|пик|пЛ|@|@|пО|п’|@|псъ|пьт|пу|пО|пъх|пьт|п’ч|@|@|@|пу|@|пэъ|пу|пъ',
      'ръа|рп|рп|Р’Г|р’т|Рэ|Рэ|р’т|Рс|Ри|Ри|@|Ръл|@|@|рО|@|р’|ръ’с|@|ру|рО|ръх|@|ръч|@|@|@|ру|@|ра|ру|ръа',
      'са|сп|сп|сга|ст|Сэ|Сэ|ст|С’|Сь|Сь|ськ|Сл|сМ|сн|сО|спъ|@|с’|@|сУ|сО|съх|@|съч|сн|сн|@|сУ|@|сТэ|сУ|са',
      'Та|т’п|т’п|т’|тДъ|Тэ|Тэ|тДъ|Ас|Ть|Ть|тък|Тл|тм|тън’|То|тьп|тър’|тъс|т’|Ту|То|тъх|т’|т’ч|тън’|тън’|@|Ту|@|Тэ|Ту|Та',
      'ў|ўб|ўб|уўг|уД|@|@|уД|Ус|ў|ў|ўк|Уль|ум|уН|ўо|ўпъ|уРъ|усъ’|ўТ|у’|ўо|ухъ|ўТ|утъ|уН|уН|@|у’|@|ўэ|у’|ў',
      'а|об|об|ох|оТ|э’|э’|оТ|оЗ|@|@|ок|Ол|Ом|оН|о’|опъ|оръ|ос’|Ат|оў|о’|ох’|Ат|о’ч|оН|оН|@|оў|@|о’|оў|а',
      'Х|х’Б|х’Б|г|хъд|Хэ|Хэ|хъд|Хс|хи|хи|хъ|Хль|хм|хнь|хо|@|хър’|хс|@|ху|хо|х’|@|х’ч|хнь|хнь|@|ху|@|Х’Э|ху|Х',
      'Та|т’п|т’п|т’|тДъ|Тэ|Тэ|тДъ|Ас|Ть|Ть|тък|Тл|тм|тън’|То|тьп|тър’|тъс|т’|Ту|То|тъх|т’|т’ч|тън’|тън’|@|Ту|@|Тэ|Ту|Та',
      'чя|чп|чп|тГ|чт|Чэ|Чэ|чт|Чс|Чь|Чь|Чъ|@|чъм|чьн|чо|@|ч’|чсъ|чьт|чу|чо|чъх|чьт|ч’|чьн|чьн|@|чу|@|чеэ|чу|чя',
      'нА|нп|нп|нх|нтт|Нэ|Нэ|нтт|Нс|@|@|@|нл|нъм|н’|Но|н’п|нръ|нсъ|@|ну|Но|нк|@|н’ч|н’|н’|@|ну|@|нЭ|ну|нА',
      'нА|нп|нп|нх|нтт|Нэ|Нэ|нтт|Нс|@|@|@|нл|нъм|н’|Но|н’п|нръ|нсъ|@|ну|Но|нк|@|н’ч|н’|н’|@|ну|@|нЭ|ну|нА',
      '@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@',
      'ў|ўб|ўб|уўг|уД|@|@|уД|Ус|ў|ў|ўк|Уль|ум|уН|ўо|ўпъ|уРъ|усъ’|ўТ|у’|ўо|ухъ|ўТ|утъ|уН|уН|@|у’|@|ўэ|у’|ў',
      '@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@|@',
      'Йа|эб’|эб’|аг|Эд|Э’|Э’|Эд|эс|эЙ|эЙ|эк|Эл|эм|Эн|йо|эпъ|эРъ|эС|эТ|эў|йо|эх|эТ|эч|Эн|Эн|@|эў|@|э’|эў|Йа',
      'ў|ўб|ўб|уўг|уД|@|@|уД|Ус|ў|ў|ўк|Уль|ум|уН|ўо|ўпъ|уРъ|усъ’|ўТ|у’|ўо|ухъ|ўТ|утъ|уН|уН|@|у’|@|ўэ|у’|ў',
      'а’|аБ|аБ|ах|аД|аЙ|аЙ|аД|аС|Й|Й|ах|ал|Амь|ан’|о|аъ|арь|Ас|атд|аў|о|аХ|атд|ачъ|ан’|ан’|@|аў|@|Йэ|аў|а’'
    ],
  title: 'Постэпохальный',
};

function to(origin) {
  const originArr = origin.toLowerCase().split(/(?<=^(?:.{2})+)(?!$)/);
  let result = '';
  originArr.forEach((pair) => {
    let i0 = russ.toLowerCase().split('|').indexOf(pair[0]);
    let i1 = russ.toLowerCase().split('|').indexOf(pair[1]);
    console.log(`${pair} i0 ${i0 + 1} i1 ${i1 + 1}`);
    if (typeof pair[0] === 'string' && typeof pair[1] === 'undefined') {
      result += pair[0];
    } else if (i0 == -1 || i1 == -1) {
      result += pair;
    } else {
      result += meta.letters[i0].split('|')[i1];
    }
  });
  return result;
}

function from(origin) {
  const vars = generateVariants(origin);
  const variants = [];
  for (let i = 0; i < vars.length; i++) {
    for (let j = 0; j < vars[i].length; j++) {
      const srch = search(vars[i][j]);
      if (srch.length == 0) {
        break;
      }
      variants.push(srch);
    }
  }
  console.log(variants);
  let varia = [];
  let may = [];
  for (let i = 0; i < variants.length; i++) {
    const element = variants[i];
    may[i] = '';
    for (let j = 0; j < variants[i].length; j++) {
      const element = variants[i][j];
      may[j] += element;
      // console.log(may);
    }
    varia = may;
  }
  console.log(varia);
  return variants;
}

function search(str) {
  const maybe = [];
  // console.log(str.split('@')[0]);
  for (let i = 0; i < 33; i++) {
    for (let j = 0; j < 33; j++) {
      if (str.split('@')[0] == meta.letters[i].split('|')[j]) {
        // console.log(`origin: ${str} ij: ${i + 1} ${j + 1}`);
        maybe.push(russ.split('|')[i] + russ.split('|')[j]);
      }
    }
  }
  // console.log(maybe);
  return maybe;
}

function generateVariants(str) {
  let a, b, c;
  const result = [];
  for (let j = 0; j < str.length && j < 3; j++) {
    // if (str[j] == '@') {
    //   // result.push('@');
    //   break;
    // }
    a = str.slice(0, j + 1);
    b = str.slice(j + 1);
    if (b.length <= 3) {
      result.push([a, b]);
    }
    if (b.length > 1) {
      c = generateVariants(b);
      for (let h = 0; h < c.length; h++) {
        const element = c[h];
        if (element[0] != b) {
          result.push([a].concat(element));
        }
      }
    }
  }
  // console.log(result);
  return result;
}

// console.log(to('лошадь'));
from('лёнА@');
// console.log();
// let a = generateVariants('лёнА@');
// console.log(a);
