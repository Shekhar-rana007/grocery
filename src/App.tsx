// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import SearchProduct from './components/SearchProduct';
import AllProducts from './components/AllProducts';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col '>
        
        <h1 className='p-3 text-center'>Grocery Product Management</h1>
        <Routes>
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/search" element={<SearchProduct />} />
          <Route path="/allproducts" element={<AllProducts />} />
        </Routes>
      </div>
    </>

  );
};

export default App;
