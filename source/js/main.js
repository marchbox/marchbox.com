function gram(response) {
  if (response.meta.code === 200 && document.querySelector &&
      window.addEventListener) {
    var media = response.data[0];

    if (media.type !== 'image') {
      return;
    }

    var src = media.images.standard_resolution.url;
    var link = media.link;
    var caption = media.caption.text;

    var figureEl = document.querySelector('aside figure');

    var anchorEl = document.createElement('a');
    anchorEl.href = link;
    anchorEl.title = 'Visit my Instagram →';

    var figcaptionEl = document.createElement('figcaption');
    figcaptionEl.innerText = caption;

    var imgEl = new Image();
    imgEl.alt = caption;

    imgEl.addEventListener('load', function() {
      anchorEl.appendChild(imgEl);
      anchorEl.appendChild(figcaptionEl);
      figureEl.appendChild(anchorEl);
      figureEl.className = 'active';
    }, false);

    imgEl.src = src;
  }
}
