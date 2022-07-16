
import './App.css';
import FoodSearch from './pages/homePage';
import Quantity from './pages/quantity';
import FoodDetail from './pages/FoodDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      
    // <ListCars/>
    <BrowserRouter>
    <Routes>
      
        <Route index element={<FoodSearch />} />
        <Route path="/quantity" element={<Quantity />} />
        <Route path=":id" element={<FoodDetail />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
