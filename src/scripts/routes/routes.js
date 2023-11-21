import HalamanUtama from '../views/pages/halaman-utama';
import DaftarFavorit from '../views/pages/daftar-favorit';
import Detail from '../views/pages/detail';

const routes = {
  '/': HalamanUtama, // default page
  '/halaman-utama': HalamanUtama,
  '/daftar-favorit': DaftarFavorit,
  '/detail/:id': Detail,
};

export default routes;
