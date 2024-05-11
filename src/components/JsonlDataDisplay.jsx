import React, { useEffect, useState } from 'react';
import data from '../assets/testData';

function DataTable() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    console.log(data)
    const fetchData = async () => {
      try {
        //const response = await fetch('visualizedData.jsonl');
        const response2 = await fetch('../assets/testData.json');
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        //console.log(response)
        console.log('res2'+response2)
        const text = response2.json();
        console.log('text'+text)
        //const lines = text.split('\n').filter(line => line); // Split text into lines and remove empty lines
        //console.log(lines)
        //const jsonData = lines.map(line => JSON.parse(line)); // Parse each line as JSON
        //console.log('ok')

        setJsonData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    //fetchData();
    setJsonData(data);
  }, []); // Run only once on component mount

  return (
    <div>
      <h1>JSONL Data:</h1>
      
    </div>
  );
}

export default DataTable;
