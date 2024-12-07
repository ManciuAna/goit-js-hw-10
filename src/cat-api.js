import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_OWnHeeWU7S8uicMzCvAir4c7a6TVuUcqSuIt1X2SWt8g9kvHA6GMQiEQRDcoQGG7";

export const fetchBreeds = () => {
    return axios.get("https://api.thecatapi.com/v1/breeds")
        .then(response => response.data)
        .catch(error => Promise.reject(error));
};

export const fetchCatByBreed = (breedId) => {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => response.data)
        .catch(error => Promise.reject(error));
};