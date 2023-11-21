import API_ENDPOINT from '../globals/api-endpoint';

class RestoSource {
  static async daftarResto() {
    const response = await fetch(API_ENDPOINT.DAFTAR);
    const responseJson = await response.json();
    // console.log(responseJson.restaurants);
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson.restaurant);
    return responseJson.restaurant;
  }

  static async reviewResto() {
    const response = await fetch(API_ENDPOINT.REVIEW);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async addReview(reviewData) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });

    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestoSource;
