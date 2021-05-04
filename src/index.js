import * as langs from './lang/index.js';

for (const [key, value] of Object.entries(langs)) {
  const optionElement = $(`<option value="${key}">${value.meta.title}</option>`);
  $('#lang-from').append(optionElement);
  $('#lang-to').append(optionElement.clone(true));
}

$('#translate').on('click', event => {
  const langFrom = $('#lang-from');
  const langTo = $('#lang-to');
  const textFrom = $('#text-from');
  const textTo = $('#text-to');

  let result;

  if (langFrom.val() == 'russ') {
    result = langs[langTo.val()].to(textFrom.val());
  } else if (langTo.val() == 'russ') {
    result = langs[langFrom.val()].from(textFrom.val());
  } else {
    result = langs[langFrom.val()].from(textFrom.val());
    console.log(result);
    result = langs[langTo.val()].to(result);
  }
  textTo.val(result);
});

$('#lang-from').on('change', event => {
  $('option').prop('disabled', false);
  $('[value=default]').prop('disabled', true);
  $(`#lang-to [value=${$(event.target).val()}]`).prop('disabled', true);
  if ($(`#lang-to [value=${$(event.target).val()}]`).prop('selected')) {
    $('#lang-to [value=default]').prop('selected', true);
  }
});

$('#lang-to').on('change', event => {
  $('option').prop('disabled', false);
  $('[value=default]').prop('disabled', true);
  $(`#lang-from [value=${$(event.target).val()}]`).prop('disabled', true);
  if ($(`#lang-from [value=${$(event.target).val()}]`).prop('selected')) {
    $('#lang-from [value=default]').prop('selected', true);
  }
});
