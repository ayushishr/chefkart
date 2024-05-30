import './App.css'
import { Routes, Route } from 'react-router-dom';
import Dishes from './screens/Dishes';
import Dish from './screens/Dish';
function App() {

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Dishes />} />
        <Route path="item/:id" element={<Dish />} />
      </Routes>
    </>
  );
}

export default App
