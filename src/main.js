

import { getImageList, per_page } from './js/pixabay-api'
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton, scrollBy } from './js/render-functions'

const searchInput = document.querySelector('#searchInput');
const searchForm = document.querySelector('#searchForm');
const loadButton = document.querySelector('.load-button');

let currentPage = 1;
let currentQuery = '';

async function showImages(currentQuery, currentPage) {
    try {
        const res = await getImageList(currentQuery, currentPage);
        const images = res.data.hits;

        if (images.length === 0 && currentPage === 1) {
            iziToast.info({
                title: 'Немає результатів',
                message: 'Спробуйте інший запит.',
            });
            hideLoadMoreButton();
            hideLoader();
            return;
        }

        createGallery(images);

        if (res.data.total > currentPage * per_page) {
            showLoadMoreButton();
        } else {
            iziToast.info({
                title: 'Більше зображень немає',
                message: 'Ви переглянули всі результати.',
            });
        }
    } catch (error) {
        iziToast.error({
            title: 'Помилка',
            message: 'Не вдалося завантажити зображення.',
        });

        hideLoadMoreButton();
    } finally {
        hideLoader();
    }
}

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const q = searchInput.value.trim();
    if (q === '') {
        iziToast.warning({
            title: 'Увага',
            message: 'Будь ласка, введіть пошуковий запит',
        });
        return;
    }

    hideLoadMoreButton();
    clearGallery();
    showLoader();

    currentQuery = q.replace(/\s+/g, '+');
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
