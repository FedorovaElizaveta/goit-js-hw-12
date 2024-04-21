import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ==============================================================

export async function searchImages(query, currentPage) {
  const params = new URLSearchParams({
    key: '43479786-9f1318bdfd325e0623d2d394a',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  });

  const url = `https://pixabay.com/api/?${params}`;

  showLoadingIndicator();

  try {
    const response = await axios.get(url);
    const data = response.data;

    hideLoadingIndicator();

    return data;
  } catch (error) {
    console.log(error);
    hideLoadingIndicator();
  }
}

// ==============================================================

function showLoadingIndicator() {
  const loader = document.createElement('span');
  loader.className = 'loader';

  document.body.appendChild(loader);
}

function hideLoadingIndicator() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}
