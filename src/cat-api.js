import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_LZ7PBaAJ4OWfZ0svWH0jk7fpfF1kFZeen0K7XGjXbhh1FOP0QCa7AzUDyUVuuxE6';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  const END_POINT = '/breeds';

  return axios.get(`${END_POINT}`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return response.data;
  });
}

function fetchCatByBreed(breedId) {
  const END_POINT = '/images/search';

  return axios
    .get(`${END_POINT}?breed_ids=${breedId}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.data;
    })
    .then(data => {
      if (data.length === 0) {
        throw new Error('No cat found for the selected breed');
      }
      return data[0];
    });
}

export { fetchBreeds, fetchCatByBreed };
