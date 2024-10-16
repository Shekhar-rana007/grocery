import React, { useState, useEffect } from 'react';
interface Product {
  _id: string;
  name: string;
  price: string;
  weight: string;
  color: string;
  category: string;
}
const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]); 
  const [searchKeyword, setSearchKeyword] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/allproducts');
      const data = await response.json();
      setProducts(data.data || []); 
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]); 
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
  product?.name?.toLowerCase().includes(searchKeyword.toLowerCase()) ||
  String(product?.price).toLowerCase().includes(searchKeyword.toLowerCase()) ||
  String(product?.weight).toLowerCase().includes(searchKeyword.toLowerCase()) ||
  product?.color?.toLowerCase().includes(searchKeyword.toLowerCase()) ||
  product?.category?.toLowerCase().includes(searchKeyword.toLowerCase())
);


  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Product List</h1>
      
      {/* Search Input */}
      <div className="mb-6 text-center">
        <input
          type="text"
          className="border p-2 rounded-lg"
          placeholder="Search by product name"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid p-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product?._id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{product?.name}</h2>
              <p className="text-gray-600 mb-2">Price: {product?.price}</p>
              <p className="text-gray-600 mb-2">Category: {product?.category}</p>
              <p className="text-gray-600 mb-2">Color: {product?.color}</p>
              <p className="text-gray-600">Weight: {product?.weight}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No products found</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
