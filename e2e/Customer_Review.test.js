// eslint-disable-next-line no-undef
Feature('Customer Reviews');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/');
});

// eslint-disable-next-line no-undef
Scenario('submitting a customer review', async ({ I }) => {
  // Navigate to a restaurant detail page
  // eslint-disable-next-line no-undef
  I.click(locate('.resto-list').first());

  // Wait for the page to load
  I.waitForElement('#review-form');

  // Fill in the review form
  I.fillField('#review-name', 'John Doe');
  I.fillField('#review-content', 'This restaurant is amazing!');

  // Submit the review
  I.click('#submit-review');

  // Wait for the review to be added
  I.waitForElement('.resto__info li');

  // Check if the review is displayed
  I.see('John Doe', '.resto__info li h4');
  I.see('This restaurant is amazing!', '.resto__info li p');
});
