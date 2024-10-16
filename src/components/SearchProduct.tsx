import React, { useState, useEffect } from 'react';

const SearchProduct = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  // Function to fetch the API when keyword has 3 or more letters
  const fetchResults = async (searchKeyword: string) => {
    if (searchKeyword.length >= 3) {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/products/globalsearch?keyword=${searchKeyword}`);
        const data = await response.json();
        setResults(data.data || []);
      } catch (error) {
        console.error('Error fetching the search results:', error);
        setResults([]); // Reset results if error occurs
      }
    } else {
      setResults([]); // Reset results if keyword is less than 3 characters
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      fetchResults(value);
    }, 2000); 

    setDebounceTimeout(timeout);
  };

  return (
    <div className="p-4 flex flex-col gap-3 max-w-lg mx-auto">
      <p className='p-3 bg-gray-100 '>Please enter 3 letters to search Product</p>
      <form onSubmit={(e) => e.preventDefault()} className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={keyword}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded shadow-sm"
          required
        />
      </form>

      {results.length > 0 ? (
        <ul className="space-y-2">
          {results.map((product) => (
            <li
              key={product._id}
              className="p-4 border border-gray-200 rounded shadow-sm bg-white flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{product?.name}</h3>
                <p className="text-sm text-gray-600">
                  {product?.price} - {product?.weight} - {product?.color} - {product?.category}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default SearchProduct;
