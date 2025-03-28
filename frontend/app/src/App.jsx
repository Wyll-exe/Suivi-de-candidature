
import { BrowserRouter, Route, Routes } from 'react-router';
import './style.css';
import Layout from "./components/Layout";
import Relance from "./components/Relance";
import Test from "./components/Test";
import Menu from "./components/Menu";
import CreationCandidature from "./components/CreationCandidature";
import AffichageCandidature from "./components/AffichageCandidature"
import Modifier from "./components/Modifier"
import { BrowserRouter, Route, Routes } from 'react-router';
import Supprimer from "./components/Supprimer";

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path='/layout' element={<Layout />} />
          <Route path='/index' element={<Relance />} />
          <Route path='/Test' element={<Test />} />
          <Route path='Menu' element={<Menu />} />
          <Route path='/' element={<AffichageCandidature />} />
          <Route path='/CreationCandidature' element={<CreationCandidature />} />
          <Route path="/:id" element={<Modifier />} />
          <Route path="/1/:id" element={<Supprimer />} />
          <Route path='*' element={<h1> 404 error , not found </h1>} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;

