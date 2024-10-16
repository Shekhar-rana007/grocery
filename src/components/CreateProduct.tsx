import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    weight: '',
    color: '',
    category: '',
  });
console.log("product",product)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
console.log("product",product)
try {
    const response = await fetch('http://localhost:8000/api/v1/createproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    const outputresponse = await response.json();
    console.log("outputresponse",outputresponse);
    if(outputresponse.success){
        toast.success(outputresponse.message)
         setProduct({
          name: '',
          price: 0,
          weight: '',
          color: '',
          category: '',
        });
    }else{
        toast.error(outputresponse.message)
    }} catch (error) {
      console.error("Error during product creation:", error);
      toast.error("An error occurred while creating the product.");
    }
   
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Weight</label>
            <input
              type="text"
              name="weight"
              placeholder="Enter weight"
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Color</label>
            <input
              type="text"
              name="color"
              placeholder="Enter color"
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
