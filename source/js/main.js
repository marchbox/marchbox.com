function gram(response) {
  if (response.meta.code === 200 && document.querySelector) {
    var media = response.data[0];

    if (media.type !== 'image') {
      return;
    }

    var src = media.images.standard_resolution.url;
    var link = media.link;
    var caption = media.caption.text;

    var html = '<a href="' + link + '" title="Visit my Instagram →">' +
        '<img src="' + src + '" alt="' + caption + '">' +
        '<figcaption>' + caption + '</figcaption>' +
        '</a>';

    var figureEl = document.querySelector('aside figure');

    figureEl.innerHTML = html;
    figureEl.className = 'active';
  }
}
