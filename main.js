const galleryContainer = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const modalImage = document.querySelector('.lightbox__image');

function onGalleryItemClick(event) {

  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const originalImageSource = event.target.dataset.source;

  modal.classList.add('is-open');
  modalImage.src = originalImageSource;
}

galleryContainer.addEventListener('click', onGalleryItemClick);

document.querySelector('.lightbox__button').addEventListener('click', function() {
  modal.classList.remove('is-open');
});