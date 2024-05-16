import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JsonlDataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data'); 
        setData(response.data);
        console.log('set data succeed!')
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <h1>Data from Backend</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item.address)}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default JsonlDataDisplay;
