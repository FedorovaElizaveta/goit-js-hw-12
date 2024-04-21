import { searchImages } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// ==============================================================

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');

// ==============================================================

let lightbox;
let query;
let currentPage = 1;
let maxPage = 0;
const pageSize = 15;

// ==============================================================

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', loadMore);

// ==============================================================

async function handleSubmit(event) {
  event.preventDefault();

  query = event.target.elements.search.value.trim();
  gallery.innerHTML = '';
  currentPage = 1;

  if (query === '') {
    iziToast.error({
      message: 'Please, fill out the field',
    });
    gallery.innerHTML = '';
  } else {
    try {
      const images = await searchImages(query, currentPage);

      if (images.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      if (images) {
        maxPage = Math.ceil(images.total / pageSize);

        const markup = createMarkup(images.hits);

        gallery.insertAdjacentHTML('beforeend', markup);

        lightbox = new SimpleLightbox('.gallery a', {
          captionSelector: 'self',
          captionType: 'data',
          captionsData: 'caption',
          captionDelay: 250,
        });
      } else {
        gallery.innerHTML = '';
      }
    } catch (error) {
      console.error(error);
    }
  }

  checkLoadMoreBtnStatus();
  event.target.reset();
}

// ==============================================================

async function loadMore() {
  currentPage += 1;

  try {
    const images = await searchImages(query, currentPage);
    const markup = createMarkup(images.hits);
    gallery.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }

  lightbox.refresh();
  scroll();
  checkLoadMoreBtnStatus();
}

// ==============================================================

function showLoadMoreBtn() {
  loadMoreBtn.classList.remove('hidden');
}
function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('hidden');
}

async function checkLoadMoreBtnStatus() {
  const images = await searchImages(query, currentPage);

  if (currentPage >= maxPage || !query || images.hits.length === 0) {
    hideLoadMoreBtn();
  } else {
    showLoadMoreBtn();
  }

  if (currentPage > 1 && currentPage >= maxPage) {
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
    });
  }
}

// ==============================================================

function scroll() {
  const height = gallery.firstChild.getBoundingClientRect().height * 2;

  window.scrollBy({
    top: height,
    behavior: 'smooth',
  });
}
