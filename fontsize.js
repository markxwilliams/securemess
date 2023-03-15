'use strict';
(() => {

  const dce = type => document.createElement(type);

  const changeFontSize = (dir, opts) => {
    const style = getComputedStyle(document.documentElement, null);
    const fontSize = style.getPropertyValue(opts.property);
    const unit = fontSize.replace(/\d/g, '').trim();
    let value = parseFloat(fontSize) + dir * opts.step;
    if (value < opts.min) {
      value = opts.min;
    } else if (value > opts.max) {
      value = opts.max;
    }
    const newSize = `${value}${unit}`;
    document.documentElement.style.setProperty(opts.property, newSize);
  };

  const buttons = (opts) => {
    const inc = dce('button');
    inc.setAttribute('type', 'button');
    inc.textContent = opts.increaseButtonLabel;
    inc.addEventListener('click', () => changeFontSize(1, opts));
    const dec = dce('button');
    dec.setAttribute('type', 'button');
    dec.textContent = opts.decreaseButtonLabel;
    dec.addEventListener('click', () => changeFontSize(-1, opts));
    const div = dce('div');
    div.appendChild(inc);
    div.appendChild(dec);
    div.className = 'fontsizecontrol';
    return div;
  };

  window.addFontSizeButtons = (opts) => {
    opts.container.prepend(buttons(opts));
  };
})();
