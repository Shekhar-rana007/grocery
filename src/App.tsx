// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateProduct from './components/CreateProduct';
import SearchProduct from './components/SearchProduct';

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        
        <h1>Grocery Product Management</h1>
        <Routes>
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/search" element={<SearchProduct />} />
        </Routes>
      </div>
    </>

  );
};

export default App;
