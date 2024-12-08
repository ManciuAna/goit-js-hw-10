import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_qMh82MRPPoPVFBUhvAJ8q5j3A1gIIskBZNvSkqDQ9ZulIXLcTae9dU5tcFwmgdYu";

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
