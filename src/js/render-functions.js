export function markupTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-list-item">
        <a href="${largeImageURL}" data-caption="${tags}"><img class="gallery-img" src="${webformatURL}" alt="${tags}" /></a>
        <div class="img-info">
          <span class="likes"
            ><p>Likes</p>
            <p>${likes}</p></span
          >
          <span class="views"
            ><p>Views</p>
            <p>${views}</p></span
          >
          <span class="comments"
            ><p>Comments</p>
            <p>${comments}</p></span
          >
          <span class="downloads"
            ><p>Downloads</p>
            <p>${downloads}</p></span
          >
        </div>
      </li>`;
}

export function createMarkup(arr) {
  return arr.map(markupTemplate).join('');
}
