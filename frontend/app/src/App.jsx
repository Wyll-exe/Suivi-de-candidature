import { BrowserRouter, Route, Routes } from 'react-router';
import Relance from "./components/utils/Relance";
import CreationCandidature from "./components/CreationCandidature";
import AffichageCandidature from "./components/AffichageCandidature"
import Modifier from "./components/Modifier"
import Supprimer from "./components/Supprimer";

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path='/Relance' element={<Relance />} />
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

