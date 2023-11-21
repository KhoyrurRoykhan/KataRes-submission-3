// eslint-disable-next-line no-undef
Feature('Unliking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/halaman-utama');
});

// eslint-disable-next-line no-undef
Scenario('unliking a restaurant', async ({ I }) => {
  I.seeElement('.resto-list');
  // eslint-disable-next-line no-undef
  const likedRestoName = await I.grabTextFrom(locate('.resto-list').first().find('h3.resto-name a'));

  // liking the restaurant
  I.click('.resto-item a'); // Clicking on the restaurant to view details
  I.seeElement('#likeButton');
  I.click('#likeButton');
  // Going back to the favorite page
  I.amOnPage('/#/daftar-favorit');
  // eslint-disable-next-line no-undef
  I.seeElement(locate('.resto-item').withText(likedRestoName));

  // Unliking the restaurant
  I.click('.resto-item a'); // Clicking on the restaurant to view details
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Going back to the favorite page
  I.amOnPage('/#/daftar-favorit');
  // Ensure the restaurant is no longer in the liked list
  // eslint-disable-next-line no-undef
  I.dontSeeElement(locate('.resto-item').withText(likedRestoName));

  // eslint-disable-next-line no-undef
//   assert.notStrictEqual(likedRestoName, 'The unliked restaurant should not be in the list');
});
