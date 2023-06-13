import './App.css';
import { Headers } from './components/containers/header/Headers';
import { Footers } from './components/containers/footer/Footers';
import { Home } from './components/containers/home/Home';

function App() {
  return (
    <div className="App">
      <Headers />
      <Home />
      <Footers />
    </div>
  );
}

export default App;
