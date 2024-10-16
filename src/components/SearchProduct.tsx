// src/SearchProduct.tsx
import React, { useState } from 'react';

const SearchProduct = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/api/v1/products/globalsearch?${keyword}`);
    const data = await response.json();
    setResults(data.data || []);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search products..." onChange={(e) => setKeyword(e.target.value)} required />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.length > 0 ? (
          results.map((product) => (
            <li key={product._id}>
              {product?.name} - {product?.price} - {product?.weight} - {product?.color} - {product?.category}
            </li>
          ))
        ) : (
          <li>No results</li>
        )}
      </ul>
    </div>
  );
};

export default SearchProduct;
