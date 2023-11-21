const assert = require('assert');
// eslint-disable-next-line no-undef
Feature('Liking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/daftar-favorit');
});

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restos');
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
});

// eslint-disable-next-line no-undef
Scenario('liking a restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
  I.amOnPage('/#/halaman-utama');

  // Memastikan ada restoran yang dapat disukai
  I.seeElement('.resto-list');

  // Mengambil nama restoran pertama
  // eslint-disable-next-line no-undef
  const firstRestoName = await I.grabTextFrom(locate('.resto-list').first().find('h3.resto-name a'));

  // Mengklik restoran untuk melihat detailnya
  // eslint-disable-next-line no-undef
  I.click(locate('.resto-list').first());

  // Memastikan halaman rincian restoran dimuat
  I.seeElement('#likeButton');

  // Menyukai restoran
  I.click('#likeButton');

  // Kembali ke halaman utama
  I.amOnPage('/');

  // Menuju halaman favorit
  I.click('Favorite');

  // Memastikan restoran yang disukai ada di daftar favorit
  I.seeElement('.resto-item');
  // eslint-disable-next-line no-undef
  const likedRestoName = await I.grabTextFrom(locate('.resto-item').first().find('h3.resto-name a'));

  // Menggunakan I.seeEquals untuk membandingkan teks
  // I.seeEquals(firstRestoName, likedRestoName);
  // eslint-disable-next-line no-undef
  assert.strictEqual(firstRestoName, likedRestoName, 'firstRestoName and likedRestoName must have the same value');
});
