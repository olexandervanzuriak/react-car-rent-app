import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import './App.css';
import { CarForm } from './components/CarForm/CarForm';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <CarForm />
    </div>
  );
}

export default App;
