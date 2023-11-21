import FavoriteRestoIdb from '../../data/resto-favorite-idb';
import { createFavRestoItemTemplate } from '../templates/template-creator';

const DaftarFavorit = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Favorite</h2>
        <div id="restos" class="restos"></div>
      </div>
      `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllResto();
    const restosContainer = document.querySelector('#restos');

    if (restos.length === 0) {
      restosContainer.innerHTML = '<h2 class="resto-item__not__found">Tidak ada restoran untuk ditampilkan</h2>';
    } else {
      restos.forEach((resto) => {
        restosContainer.innerHTML += createFavRestoItemTemplate(resto);
      });
    }
  },

};

export default DaftarFavorit;
