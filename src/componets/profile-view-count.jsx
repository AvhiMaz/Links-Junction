import React, { useState, useEffect } from "react";
import axios from "axios";

const LinkTreeClone = () => {
  const [viewCount, setViewCount] = useState(null);
  const [error, setError] = useState(null);

  const incrementViewCount = async () => {
    try {
      const response = await axios.post(
        "https://api.api-ninjas.com/v1/counter",
        {
          id: "test_id",
          hit: true,
        },
        {
          headers: {
            "X-Api-Key": "zek8Skw2XShmwr3nYrr1RBtT253JC5OKfZgKXgm2",
          },
        },
      );
      if (response.status === 200) {
        setViewCount((prevCount) => prevCount + 1); // Increment view count locally
      } else {
        setError("Failed to update view count");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.api-ninjas.com/v1/counter?id=count",
          {
            headers: {
              "X-Api-Key": "zek8Skw2XShmwr3nYrr1RBtT253JC5OKfZgKXgm2",
            },
          },
        );
        if (response.status === 200) {
          setViewCount(response.data.value);
        } else {
          setError("Failed to fetch data");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
    incrementViewCount(); // Automatically increment view count
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (viewCount === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex text-center justify-center items-center">
      <p id="count" className="text-center justify-center items-start">
        Profile Views: {viewCount}
      </p>
    </div>
  );
};

export default LinkTreeClone;
