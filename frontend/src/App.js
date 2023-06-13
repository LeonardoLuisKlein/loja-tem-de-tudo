import './App.css';
import { Headers } from './components/containers/header/Headers';
import { Footers } from './components/containers/footer/Footers';
import { Home } from './components/containers/home/Home';
import { Vendas } from './components/containers/vendas/Vendas';
import { Clientes } from './components/containers/clientes/Clientes';
import { Produtos } from './components/containers/produtos/Produtos';
import { Categorias } from './components/containers/categorias/Categorias';
import { Cidades } from './components/containers/cidades/Cidades';
import { Error404 } from './components/containers/error404/Error404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Headers />
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/cidades" element={<Cidades />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <Footers />
    </div>
  );
}

export default App;
