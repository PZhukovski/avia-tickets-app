import './App.css';
import Flights from './components/fligths/Fligths.js';
import Aside from './components/filters/Aside.js';


function App() {

  return (
    <div className="App">
      <div className='aside'>
        <Aside/>
      </div>
      <div className='tickets'>
        <Flights/>
      </div>
    </div>
  );
}

export default App;
