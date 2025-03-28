import CreationCandidature from "./components/CreationCandidature";
import AffichageCandidature from "./components/AffichageCandidature"
import Modifier from "./components/Modifier"
import { BrowserRouter, Route, Routes } from 'react-router';
import Supprimer from "./components/Supprimer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AffichageCandidature />} />
        <Route path='/CreationCandidature' element={<CreationCandidature />} />
        <Route path="/:id" element={<Modifier />} />
        <Route path="/1/:id" element={<Supprimer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
