import './App.css';
import Flights from './components/fligths/Fligths';
import Aside from './components/filters/Aside';


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
