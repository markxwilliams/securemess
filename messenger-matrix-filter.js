(() => {
  'use strict';

  const table = document.querySelector('table');

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
    if (isNaN(idx)) {
      return;
    }
    Array.from(table.tHead.rows)
      .filter(r => r.cells.length > 2)
      .forEach(r => toggle(r, idx));
    Array.from(table.tBodies[0].rows)
      .filter(r => r.cells.length > 2)
      .forEach(r => toggle(r, idx));

    const count = document.querySelectorAll('input:checked').length;
    Array.from(document.querySelectorAll('td[colspan]'))
      .forEach(td => td.setAttribute('colspan', count));

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

  const onClick = (evt, fieldset) => {
    fieldset.classList.toggle('hide');
  };

  const filterform = () => {
    const form = dce('form');
    const fieldset = dce('fieldset');
    fieldset.classList.add('hide');
    form.appendChild(fieldset);
    return [form, fieldset];
  };

  const button = (label) => {
    const button = dce('button');
    button.addEventListener('click', evt => onClick(evt, fieldset));
    button.textContent = label;
    button.setAttribute('type', 'button');
    return button;
  };

  const [form, fieldset] = filterform();

  Array.from(document.querySelector('thead').rows[0].cells)
    .filter(c => c.cellIndex > 0)
    .map(c => checkbox(c))
    .forEach(cb => fieldset.appendChild(cb));


  const u = new URLSearchParams(window.location.search);
  if (u.get('filter')) {
    setFilter(u.get('filter'));
  }

  window.addFilter = options => {
    if (options.buttonContainer) {
      document.body.insertBefore(form, table);
      options.buttonContainer.appendChild(button(options.buttonLabel));
    }
  };

})();
