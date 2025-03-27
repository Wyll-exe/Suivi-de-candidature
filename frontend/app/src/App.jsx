import CreationCandidature from "./components/CreationCandidature";
import AffichageCandidature from "./components/AffichageCandidature"
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AffichageCandidature />} />
        <Route path='/CreationCandidature' element={<CreationCandidature />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
