import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const options = {
  closeText: 'Close',
  captions: true,
  captionDelay: 0,
  loop: true
};
 
document.addEventListener('DOMContentLoaded', () => {
  const gallery = new SimpleLightbox('.gallery a', options);

  const galleryList = document.querySelector('.gallery');
  galleryItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.original;
    link.title = item.description;
    const image = document.createElement('img');
    image.src = item.preview;
    image.alt = item.description;
    link.appendChild(image);
    listItem.appendChild(link);
    galleryList.appendChild(listItem);
  });
});
