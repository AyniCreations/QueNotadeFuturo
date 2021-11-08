import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Album } from './paginas/album';
import { Donadores } from './paginas/donadores';
import { Footer } from './componentes/footer';
import { Header } from './componentes/header';
import { Home } from './paginas/home';
import { Instituciones } from './paginas/instituciones';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='donadores' element={<Donadores />} />
        <Route path='instituciones' element={<Instituciones />} />
        <Route path='album' element={<Album />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
