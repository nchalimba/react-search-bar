import { useState } from 'react';
import Result from './Result';
import Searchbar from './SearchBar';

function App() {
  const [result, setResult] = useState(null); // Stores the result, that gets selected

  const fetchData = async (value) => {
    // Fetches and returns the data for the search bar with a given value
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${value}&limit=10`
    );
    if (!response.ok) {
      console.log(response);
      return;
    }
    const { products } = await response.json();
    return products;
  };

  return (
    <div>
      <Searchbar
        fetchData={fetchData}
        setResult={setResult}
        suggestionKey="title"
      />
      {result && <Result {...result} />}
    </div>
  );
}

export default App;
