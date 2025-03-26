import { BrowserRouter, Route, Routes } from 'react-router';
import './style.css';
import Relance from "./components/Relance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Relance />} />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
