import RestoSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const HalamanUtama = {
  async render() {
    return `
      
      <div class="content">
        <h2 class="content__heading">Halaman Utama</h2>
        <div id="restos" class="restos">
          <p id="loading-text">Memuat...</p>
        </div>
        <p id="error-text" style="color: red;"></p>
      </div>
    `;
  },

  async afterRender() {
    const restoContainer = document.querySelector('#restos');
    const loadingText = document.querySelector('#loading-text');
    const errorText = document.querySelector('#error-text');

    try {
      loadingText.style.display = 'block';
      errorText.textContent = '';

      const resto = await RestoSource.daftarResto();

      loadingText.style.display = 'none';

      // eslint-disable-next-line no-shadow
      resto.forEach((resto) => {
        restoContainer.innerHTML += createRestoItemTemplate(resto);
        const loadingIndicator = document.querySelector(`#loading-indicator-${resto.id}`);
        loadingIndicator.style.display = 'none'; // Sembunyikan indikator loading per item
      });
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data restoran:', error);

      loadingText.style.display = 'none';

      errorText.textContent = 'Gagal memuat data. Silakan coba lagi nanti.';
    }
  },
};

export default HalamanUtama;
