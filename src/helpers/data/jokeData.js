import axios from 'axios';

const getJokes = () => new Promise((resolve, reject) => {
  axios.get('https://official-joke-api.appspot.com/random_joke').then((response) => {
    console.warn(response);
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

export default getJokes;
