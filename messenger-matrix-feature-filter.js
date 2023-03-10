(() => {
  'use strict';

  const table = document.querySelector('table');

  const dce = type => document.createElement(type);

  const filterform = () => {
    const form = dce('form');
    const fieldset = dce('fieldset');
    form.appendChild(fieldset);
    return [form, fieldset];
  };

  const getValues = feature => {
    const cell = Array.from(document.querySelectorAll('tbody th'))
      .find(th => th.textContent === feature);
    if (!cell) {
      console.warn(`Kann ${feature} nicht finden.`);
      return [];
    }
    const values = Array.from(cell.closest('tr').cells)
      .filter(cell => cell.tagName === 'TD')
      .map(td => td.textContent.trim())
      .filter(text => text != null && text.length > 0);
    return Array.from(new Set(values));
  };

  const onChangeFilter = (feature, valueSelect) => {
    while (valueSelect.options.length) {
      valueSelect.options.remove(0);
    }
    getValues(feature)
      .map(f => new Option(f, f))
      .forEach(o => valueSelect.options.add(o));
  };

  const featureFilter = () => {
    const featureSelect = dce('select');
    Array.from(document.querySelectorAll('tbody th'))
      .filter(td => !td.nextElementSibling.hasAttribute('colspan'))
      .map(td => td.textContent)
      .map(feature => new Option(feature, feature))
      .forEach(option => featureSelect.options.add(option));

    const valueSelect = dce('select');

    featureSelect.addEventListener('change', evt => onChangeFilter(evt.target.value, valueSelect));
    onChangeFilter(featureSelect.value, valueSelect);

    return [featureSelect, valueSelect];
  };

  const [form, fieldset] = filterform();

  document.body.insertBefore(form, table);

  const addFilter = () => {
    const [f, v] = featureFilter();
    form.appendChild(f);
    form.appendChild(v);
  };

  addFilter();

})();
