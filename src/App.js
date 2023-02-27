import logo from './logo.svg';
import './App.css';
import { 
  TestComponent, 
  ListArticles, 
  FormDelivery 
} from './Components'; // import tous les components de Components grace a l'index.js
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import FormDeliveryL7  from './old-components/FormDeliveryL7.js';

const fakeData = [
  {name: 'Margarita', price: 15},
  {name: '4 saisons', price: 10},
  {name: 'Calzone', price: 25},
  {name: 'Reine', price: 20},
]

let point = 0
const addSomePoint = () => {
  point += 1
  console.log(point)
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <Routes>
              <Route path="/Delivery" element={<FormDelivery />}/>
              <Route path="/oldDelivery" element={<FormDeliveryL7 />}/>
              <Route path="/List" element={<ListArticles articles={fakeData} />}/>
              <Route path="/Test" element={<TestComponent functionClick={addSomePoint} points={point}/>}/>
              <Route path="/Pomme" element={<h1>Quelle idée des pommes sur une pizza ?</h1>} />
            </Routes>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
