import logo from './logo.svg';
import './App.css';
import FoodSearch from './pages/homePage';
import Quantity from './pages/quantity';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    // <ListCars/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< FoodSearch/>}>
        <Route index element={<FoodSearch />} />
        <Route path="/quantity" element={<Quantity />} />
     </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
