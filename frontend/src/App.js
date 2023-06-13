import './App.css';
import { Headers } from './components/containers/header/Headers';
import { Footers } from './components/containers/footer/Footers';
import { Home } from './components/containers/home/Home';
import { Vendas } from './components/containers/vendas/Vendas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Headers />
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendas" element={<Vendas />} />
        </Routes>
      </BrowserRouter>
      <Footers />
    </div>
  );
}

export default App;
