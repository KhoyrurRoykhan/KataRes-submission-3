import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<div class="detail">
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="resto__info">
    <h3 style="text-align:center;">Information</h3>
    <h4>Alamat</h4>
    <p>${resto.address}</p>
    <h4>Kota</h4>
    <p>${resto.city}</p>
    <h4>Rating</h4>
    <p>⭐️${resto.rating}</p>
    <h4>Deskripsi</h4>
    <p style="text-align:justify;">${resto.description}</p>
    <h4>Menu Makanan</h4>
    <p>${resto.menus.foods.map((foods) => `<li>${foods.name}</li>`).join('')}</p>
    <h4>Menu Minumanan</h4>
    <p>${resto.menus.drinks.map((drinks) => `<li>${drinks.name}</li>`).join('')}</p>
    <h3 style="text-align:center;">Customer Reviews</h3>
    <ul>
      ${resto.customerReviews.map((review) => `
        <li>
          <h4>${review.name}</h4>
          <p>${review.review}</p>
          <p>${review.date}</p>
        </li>
      `).join('')}
    </ul>
  </div>  
</div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-list">
    <div class="resto-item" tabindex="0" aria-label="Restaurant ${resto.name}, City: ${resto.city}, Rating: ${resto.rating}">
        <div id="loading-indicator-${resto.id}" class="loading-indicator" style="display: block;">Memuat....</div>
        <img class="lazyload" src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${resto.name}">
        <div class="resto-item__content">
          <h3 class="resto-name"><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
          <p>Rating: ⭐️${resto.rating}</p>
          <p>${resto.description}</p>
        </div>
    </div>
  </div>
`;

const createFavRestoItemTemplate = (resto) => `
  <div class="resto-list">
    <div class="resto-item" tabindex="0" aria-label="Restaurant ${resto.name}, City: ${resto.city}, Rating: ${resto.rating}">
        
        <img class="lazyload" src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${resto.name}">
        <div class="resto-item__content">
          <h3 class="resto-name"><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
          <p>Rating: ⭐️${resto.rating}</p>
          <p>${resto.description}</p>
        </div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createFavRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
