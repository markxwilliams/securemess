'use strict';

(() => {

  const dce = type => document.createElement(type);

  // state der checkboxen
  let state = true;

  const toggle = (row, idx, on) => {
    row.cells[idx].classList.toggle('hide', !on);
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
    const checkbox = evt.target;
    const idx = parseInt(checkbox.dataset.idx, 10);
    if (isNaN(idx)) {
      return;
    }
    Array.from(document.querySelectorAll('thead tr'))
      .forEach(r => toggle(r, idx, checkbox.checked));

    Array.from(document.querySelectorAll('tbody tr'))
      .filter(r => r.cells.length > 2)
      .forEach(r => toggle(r, idx, checkbox.checked));

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
    input.setAttribute('class', 'matrix-input');
    label.appendChild(input);
    label.appendChild(document.createTextNode(cell.textContent.replace(/\(.*\)/, '').trim()));
    label.setAttribute('class', 'matrix-label');
    return label;
  };

  const toggleAll = (evt, fieldset, opts) => {
    evt.stopPropagation();
    state = !state;
    for (const cb of fieldset.elements) {
      cb.checked = state;
      cb.dispatchEvent(new CustomEvent('change', { detail: 'dontpush' }));
    }
    evt.target.textContent = state
      ? opts.toggleAllButton.offLabel
      : opts.toggleAllButton.onLabel;
  };

  const filterform = (opts) => {
    const button = dce('button');
    //const form = dce('form');
    const form = document.getElementById('filter-menu')
    console.log(form)

    const fieldset = dce('fieldset');
    const onClick = (fieldset) => {
      fieldset.classList.toggle('hide');
      console.log()
    };
    fieldset.classList.add('hide');

    const toggleAllButton = dce('button');
    toggleAllButton.setAttribute('type', 'button');
    toggleAllButton.textContent = opts.toggleAllButton.offLabel;
    toggleAllButton.addEventListener('click', (evt) => toggleAll(evt, fieldset, opts));
    toggleAllButton.setAttribute('class', 'matrix-button');

    fieldset.appendChild(toggleAllButton);
    Array.from(document.querySelector('thead').rows[0].cells)
      .filter(c => c.cellIndex > 0)
      .map(c => checkbox(c))
      .forEach(cb => fieldset.appendChild(cb));
    button.addEventListener('click', () => onClick(fieldset));
    button.textContent = opts.buttonLabel;
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'matrix-button ');
    //form.appendChild(button);
    form.appendChild(fieldset);
    //form.setAttribute('class', 'matrix-form ');
    //return form;
    return null;
  };

  const addFilterItems = (opts) => {
    const form = document.getElementById('filter-menu')
    console.log(form)

    const fieldset = dce('fieldset');
    const onClick = (fieldset) => {
      fieldset.classList.toggle('hide');
      console.log()
    };
    //fieldset.classList.add('hide');

    const toggleAllButton = dce('button');
    toggleAllButton.setAttribute('type', 'button');
    toggleAllButton.textContent = opts.toggleAllButton.offLabel;
    toggleAllButton.addEventListener('click', (evt) => toggleAll(evt, fieldset, opts));
    toggleAllButton.setAttribute('class', 'matrix-button');

    fieldset.appendChild(toggleAllButton);
    Array.from(document.querySelector('thead').rows[0].cells)
      .filter(c => c.cellIndex > 0)
      .map(c => checkbox(c))
      .forEach(cb => fieldset.appendChild(cb));

    form.appendChild(fieldset);
    return null;
  };

  const presetFilterFromUrl = () => {
    const u = new URLSearchParams(window.location.search);
    if (u.get('filter')) {
      setFilter(u.get('filter'));
    }
  };

  window.addFilter = opts => {
    document.body.classList.add('filter');
    //opts.formContainer.prepend(filterform(opts));
    addFilterItems(opts);
    presetFilterFromUrl();
  };

})();
