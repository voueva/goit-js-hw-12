

import { getImageList, per_page } from './js/pixabay-api'
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton, scrollBy } from './js/render-functions'

const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const loadButton = document.querySelector('.load-button');

let currentPage = 1;
let currentQuery = '';

async function showImages(currentQuery, currentPage) {
    const res = await getImageList(currentQuery, currentPage);
    createGallery(res.data.hits);

    if (res.data.total > currentPage * per_page) {
        showLoadMoreButton();
    }
    
    hideLoader();
}

searchButton.addEventListener('click', async () => {
    showLoader();
    
    clearGallery();
    const q = searchInput.value.trim().replace(' ', '+');
    currentQuery = q;
    currentPage = 1;

    await showImages(currentQuery, currentPage);
    scrollBy();
});

loadButton.addEventListener('click', async () => {
    hideLoadMoreButton();
    showLoader();

    currentPage++;

    await showImages(currentQuery, currentPage);
    scrollBy();
});
