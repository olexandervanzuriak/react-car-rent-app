import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import './App.css';
import { CarForm } from './components/CarForm/CarForm';
import { Benefits } from './components/Benefits/Benefits';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <CarForm />
      <Benefits />
    </div>
  );
}

export default App;
