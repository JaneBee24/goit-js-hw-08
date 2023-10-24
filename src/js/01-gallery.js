import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
const galleryList = document.querySelector('.gallery');
const options = {
  
captionData: "alt",
  captionDelay: 250,
 
};
 
const createMarkup = () =>
  galleryItems
    .map(({ preview, original, description } = {}) => {
      return `
      <div class="gallery">
        <a href="${original}"><img src="${preview}" alt="" title="${description}"/></a>
      </div>
    `;
    })
    .join('');
// заливаємо розмітку
galleryList.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));
const gallery = new SimpleLightbox('.gallery a', options);