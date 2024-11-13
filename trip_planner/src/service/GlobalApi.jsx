import axios from "axios";

const BASE_URL = 'https://places.googleapis.com/v1/places:searchText';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
        'X-Goog-FieldMask': 'places.photos,places.displayName,place.id'
    }
};

export const GetPlaceDetails = (data) => {
    return axios.post(BASE_URL, data, config)
        .catch((error) => {
            console.error("Error in API request:", error.response);
        });
};
