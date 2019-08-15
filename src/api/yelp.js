import axios from "axios";
import { API_YELP_BASE_URL, API_YELP_CLIENT_ID, API_YELP_API_KEY } from 'react-native-dotenv'

export default axios.create({
  baseURL: API_YELP_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_YELP_API_KEY}`
  }
});
