// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryPlace = document.querySelector('.gallery');

function markupCreator(galleryItems) {
  return galleryItems.map(
    item => `
    <a class='gallery__item' href='${item.original}'>
    <img class='gallery__image' src='${item.preview}' alt='${item.description}' />
  </a>`
  ).join(" ");
}
const newMarkup = markupCreator(galleryItems);

galleryPlace.innerHTML = newMarkup;

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

