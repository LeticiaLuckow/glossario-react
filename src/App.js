import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArrayPage from './Pages/Declarações/Array/ArrayPage';
import Constantes from './Pages/Declarações/Constantes/Constantes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Constantes />}></Route>
        <Route path="/array" element={<ArrayPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
