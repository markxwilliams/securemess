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

  const option = feature => {
    const o = dce('option');
    o.value = feature;
    o.textContent = feature;
    return o;
  };

  const featureFilter = () => {
    const select = dce('select');
    Array.from(document.querySelectorAll('tbody td:first-child'))
      .filter(td => !td.nextElementSibling.hasAttribute('colspan'))
      .map(td => td.textContent)
      .map(feature => option(feature))
      .forEach(option => select.appendChild(option));
    return select;
  };

  const [form, fieldset] = filterform();

  document.body.insertBefore(form, table);


  form.appendChild(featureFilter());

})();
