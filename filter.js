'use strict';

(() => {

  const dce = type => document.createElement(type);

  const toggle = (row, idx) => {
    row.cells[idx].classList.toggle('hide');
  };

  window.onpopstate = evt => {
    if (evt.state && evt.state.filter) {
      setFilter(evt.state.filter);
    }
  };

  const setFilter = filter => {
    for (let checkbox of document.querySelectorAll('input')) {
      const messenger = checkbox.labels[0].textContent;
      const checked = checkbox.checked;
      if (checked !== filter.includes(messenger)) {
        checkbox.checked = !checked;
        checkbox.dispatchEvent(new CustomEvent('change', { detail: 'dontpush' }));
      }
    }
  };

  const onChange = evt => {
    const idx = parseInt(evt.target.dataset.idx, 10);
    const table = document.querySelector('table');
    if (isNaN(idx)) {
      return;
    }
    Array.from(document.querySelectorAll('thead tr'))
      .forEach(r => toggle(r, idx));

    Array.from(document.querySelectorAll('tbody tr'))
      .filter(r => r.cells.length > 2)
      .forEach(r => toggle(r, idx));

    const count = document.querySelectorAll('input:checked').length;
    Array.from(document.querySelectorAll('tbody td[colspan]'))
      .forEach(td => td.setAttribute('colspan', count));

    document.querySelector('tfoot td:nth-child(2)').setAttribute('colspan', count - 1);

    if (evt.detail === 'dontpush') {
      return;
    }
    const filter = getFiltered();
    window.history.pushState({ filter }, 'Messenger-Matrix', `?filter=${filter.join(',')}`);
  };

  const getFiltered = () => Array.from(document.querySelectorAll('input:checked'))
    .map(checkbox => checkbox.labels[0].textContent);

  const checkbox = cell => {
    const label = dce('label');
    const input = dce('input');
    input.setAttribute('type', 'checkbox');
    input.dataset.idx = cell.cellIndex;
    input.checked = true;
    input.addEventListener('change', onChange);
    label.appendChild(input);
    label.appendChild(document.createTextNode(cell.textContent.replace(/\(.*\)/, '').trim()));
    return label;
  };

  const filterform = (opts) => {
    const button = dce('button');
    const form = dce('form');
    const fieldset = dce('fieldset');
    const onClick = (fieldset) => {
      fieldset.classList.toggle('hide');
    };
    fieldset.classList.add('hide');
    Array.from(document.querySelector('thead').rows[0].cells)
      .filter(c => c.cellIndex > 0)
      .map(c => checkbox(c))
      .forEach(cb => fieldset.appendChild(cb));
    button.addEventListener('click', () => onClick(fieldset));
    button.textContent = opts.buttonLabel;
    button.setAttribute('type', 'button');
    form.appendChild(button);
    form.appendChild(fieldset);
    return form;
  };

  const presetFilterFromUrl = () => {
    const u = new URLSearchParams(window.location.search);
    if (u.get('filter')) {
      setFilter(u.get('filter'));
    }
  };

  window.addFilter = opts => {
    document.body.classList.add('filter');
    opts.formContainer.prepend(filterform(opts));
    presetFilterFromUrl();
  };

})();
