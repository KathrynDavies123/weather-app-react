import './App.css';
import HeaderSection from './components/sections/headersection';
import ForecastSection from './components/sections/forecastsection';
import DetailsSection from './components/sections/detailssection';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <ForecastSection />
      <DetailsSection />
    </div>
  );
}

export default App;
