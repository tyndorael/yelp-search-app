import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          location: 'Santiago, Chile',
          limit: 50
        }
      });
      setResult(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  }

  // call one time
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
}
