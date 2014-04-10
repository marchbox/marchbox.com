function gram(response) {
  'use strict';

  if (response.meta.code === 200 && document.querySelector &&
      window.addEventListener) {
    var media = response.data[0];

    if (media.type !== 'image') {
      return;
    }

    var src = media.images.standard_resolution.url;
    var link = media.link;
    var caption = media.caption.text;

    var asideEl = document.querySelector('aside');
    var anchorEl = asideEl.querySelector('a');

    anchorEl.href = link;
    anchorEl.title = anchorEl.innerText;
    anchorEl.innerHTML = '';

    var figureEl = document.createElement('figure');

    var figcaptionEl = document.createElement('figcaption');
    figcaptionEl.innerText = caption;

    var imgEl = new Image();
    imgEl.alt = caption;

    imgEl.addEventListener('load', function() {
      figureEl.appendChild(imgEl);
      figureEl.appendChild(figcaptionEl);
      anchorEl.appendChild(figureEl);

      asideEl.className = 'active';
    }, false);

    imgEl.src = src;
  }
}
