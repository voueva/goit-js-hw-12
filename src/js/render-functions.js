import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');
const loadButton = document.querySelector('.load-button');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) { 
    const galleryMarkup = images.map(({ previewURL, largeImageURL, likes, views, comments, downloads }) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image" src="${previewURL}" />
            </a>
            <div class="gallery-image-panel">
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Likes</div>
                    <div class="gallery-image-panel_item-value">${likes}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Views</div>
                    <div class="gallery-image-panel_item-value">${views}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Comments</div>
                    <div class="gallery-image-panel_item-value">${comments}</div>
                </div>
                <div class="gallery-image-panel_item">
                    <div class="gallery-image-panel_item-field">Downloads</div>
                    <div class="gallery-image-panel_item-value">${downloads}</div>
                </div>
            </div>
        </li>
    `).join('');

    galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
    lightbox.refresh();
}

export function clearGallery() {
    galleryList.innerHTML = '';
 }

export function showLoader() { 
    loader.style.display = 'block';
}

export function hideLoader() { 
    loader.style.display = 'none';
}

export function showLoadMoreButton() { 
    loadButton.style.display = 'block';
}

export function hideLoadMoreButton() { 
    loadButton.style.display = 'none';
}

export function scrollBy() {
    const lastItem = document.querySelector('.gallery-item:last-child');
    if (!lastItem) return;

    const top = lastItem.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: top - 150,
        behavior: 'smooth'
    });
}