(() => {
  'use strict';

  let options;

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

  const removeHighlight = () => {
    Array.from(document.querySelectorAll(`.${options.highlightClass}`))
      .forEach(element => element.classList.remove(options.highlightClass));
  };

  const highlightFeature = feature => {
    removeHighlight();
    try {
      const tr = getFeatureRow(feature);
      Array.from(tr.cells)
        .forEach(element => element.classList.add(options.highlightClass));
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

  const removeFilter = () => {
    removeHighlight();
    Array.from(document.querySelectorAll(`table .${options.hiddenClass}`))
      .forEach(element => element.classList.remove(options.hiddenClass));
  };

  const onChangeFeature = (feature, valueSelect) => {
    while (valueSelect.options.length) {
      valueSelect.options.remove(0);
    }
    if (feature == -1) {
      removeFilter();
      return;
    }
    highlightFeature(feature);
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
          .forEach((cell, idx) => cell.classList.toggle(options.hiddenClass, !idxs.includes(idx)));
      });

    const len = document.querySelectorAll(`thead th:not(:first-child):not(.${options.hiddenClass})`).length;
    Array.from(document.querySelectorAll('tbody td[colspan]'))
      .forEach(td => td.setAttribute('colspan', len));
  };

  const featureFilter = () => {
    const featureSelect = dce('select');
    featureSelect.options.add(new Option('—', -1));
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

  const addFeatureFilter = () => {
    const [f, v] = featureFilter();
    form.appendChild(f);
    form.appendChild(v);
  };


  window.addFilter = opts => {
    options = opts;
    document.body.insertBefore(form, table);
    addFeatureFilter();
  };

})();
