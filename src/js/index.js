import { preloadImages } from './utils';
import { ImageHover } from './imageHover';

preloadImages('[data-repetition]').then(() => {
    document.body.classList.remove('loading');
    // Initialize the hover effect on the images
    [...document.querySelectorAll('.image')].forEach(el => new ImageHover(el));
});