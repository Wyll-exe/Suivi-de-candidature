import { BrowserRouter, Route, Routes } from 'react-router';
import './style.css';
import Layout from "./components/Layout";
import Relance from "./components/Relance";
import Test from "./components/Test";
import Menu from "./components/Menu";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/index' element={<Relance />} />
          <Route path='/Test' element={<Test />} />
          <Route path='Menu' element={<Menu />} />
          <Route path='*' element={<h1> 404 error , not found </h1>} />
        </Routes>
      </BrowserRouter>

    </>
    
  );
}

export default App;

