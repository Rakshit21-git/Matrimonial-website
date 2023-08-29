import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You need to install axios first

function App() {
  const [selectedValue, setSelectedValue] = useState(0);
  const [apiData, setApiData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedValue !== 0) {
      const selected = apiData.find(item => item.value === selectedValue);
      setSelectedData(selected);
    }
  }, [selectedValue, apiData]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-addon-plans`); // Replace with your API URL
      const apiResponseData = response.data.data;
      setApiData(apiResponseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSelect = (e) => {
    const value = parseInt(e.target.value);
    setSelectedValue(value);
  };

  return (
    <div>
      <h1>API Data Example</h1>
      <select onChange={handleSelect}>
        <option value={0}>Select a value</option>
        {apiData.map(item => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <div>
        {selectedData ? (
          <div>
            <h2>ID: {selectedData.id}</h2>
            <p>Value: {selectedData.value}</p>
            <p>Description: {selectedData.description}</p>
          </div>
        ) : (
          <p>Please select a value from the dropdown.</p>
        )}
      </div>
    </div>
  );
}

export default App;
