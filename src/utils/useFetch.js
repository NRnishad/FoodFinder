import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, [url]); // useEffect will re-run if `url` changes

  return data; // Return the fetched data
};

export default useFetch;
