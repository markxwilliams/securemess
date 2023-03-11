(() => {
  'use strict';

  const table = document.querySelector('table');

  const dce = type => document.createElement(type);

  const getHeaderCells = () => Array.from(document.querySelectorAll('tbody th'));

  const filterform = () => {
    const form = dce('form');
    const fieldset = dce('fieldset');
    form.className = 'feature-filter';
    form.appendChild(fieldset);
    return [form, fieldset];
  };

  const hightlightFeature = feature => {
    Array.from(document.querySelectorAll('.highlight'))
      .forEach(element => element.classList.remove('highlight'));
    try {
      const tr = getFeatureRow(feature);
      Array.from(tr.cells)
        .forEach(element => element.classList.add('highlight'));
    } catch {
    }
  };

  const getFeatureRow = feature => {
    const cell = getHeaderCells()
      .find(th => th.textContent === feature);
    if (cell) {
      return cell.closest('tr');
    }
    throw new Error(`unknown feature ${feature}`);
  };

  const getFeatureRowCells = feature => {
    try {
      const tr = getFeatureRow(feature);
      return Array.from(tr.cells)
        .filter(cell => cell.tagName === 'TD');
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const getValues = feature => {
    const values = getFeatureRowCells(feature)
      .map(td => td.textContent.trim())
      .filter(text => text != null && text.length > 0);
    return Array.from(new Set(values));
  };

  const onChangeFeature = (feature, valueSelect) => {
    hightlightFeature(feature);
    while (valueSelect.options.length) {
      valueSelect.options.remove(0);
    }
    getValues(feature)
      .map(f => new Option(f, f))
      .forEach(o => valueSelect.options.add(o));

    onChangeValue(feature, valueSelect.value);
  };

  const onChangeValue = (feature, value) => {
    const row = getFeatureRowCells(feature);
    const matchingIdx = row
      .map((td, idx) => [td.textContent === value, idx])
      .filter(([match, idx]) => match)
      .map(([match, idx]) => idx);
    filterColumns(matchingIdx);
  };

  const filterColumns = idxs => {
    Array.from(document.querySelectorAll('tr'))
      .filter(tr => !tr.cells[1].hasAttribute('colspan'))
      .forEach(tr => {
        Array.from(tr.cells)
          .slice(1)
          .forEach((cell, idx) => cell.classList.toggle('hide', !idxs.includes(idx)));
      });

    const len = document.querySelectorAll('thead th:not(:first-child):not(.hide)').length;
    Array.from(document.querySelectorAll('tbody td[colspan]'))
      .forEach(td => td.setAttribute('colspan', len));
  };

  const featureFilter = () => {
    const featureSelect = dce('select');
    getHeaderCells()
      .filter(td => !td.nextElementSibling.hasAttribute('colspan'))
      .map(td => td.textContent)
      .map(feature => new Option(feature, feature))
      .forEach(option => featureSelect.options.add(option));

    const valueSelect = dce('select');

    featureSelect.addEventListener('change', evt => onChangeFeature(evt.target.value, valueSelect));
    valueSelect.addEventListener('change', evt => onChangeValue(featureSelect.value, evt.target.value));
    onChangeFeature(featureSelect.value, valueSelect);

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
