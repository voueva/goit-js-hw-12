

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
        hideLoadMoreButton();

        if (axios.isAxiosError(error)) {
            if (error.response) {
                const status = error.response.status;

                if (status === 403) {
                    iziToast.error({
                        title: 'Доступ заборонено',
                        message: 'Можливо, ваш API ключ недійсний або вичерпано ліміт.',
                    });
                } else if (status === 404) {
                    iziToast.warning({
                        title: 'Не знайдено',
                        message: 'Ресурс не існує. Спробуйте змінити запит.',
                    });
                } else if (status >= 500) {
                    iziToast.error({
                        title: 'Серверна помилка',
                        message: 'Сервер не відповідає. Спробуйте пізніше.',
                    });
                } else {
                    iziToast.error({
                        title: `Помилка ${status}`,
                        message: error.response.statusText || 'Невідома помилка',
                    });
                }

            } else if (error.request) {
                iziToast.error({
                    title: 'Немає відповіді від сервера',
                    message: 'Перевірте інтернет-з’єднання або спробуйте ще раз.',
                });
            } else {
                iziToast.error({
                    title: 'Налаштування запиту',
                    message: 'Щось пішло не так при налаштуванні запиту.',
                });
            }
        } else {
            iziToast.error({
                title: 'Неочікувана помилка',
                message: 'Щось пішло не так. Спробуйте ще раз.',
            });
        }
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
});

loadButton.addEventListener('click', async () => {
    hideLoadMoreButton();
    showLoader();

    currentPage++;

    await showImages(currentQuery, currentPage);
    scrollBy();
});
