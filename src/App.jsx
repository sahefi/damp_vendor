
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';


import Header from './components/header';

function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path = "/header" element = {<Header/>}/>
          </Routes>
        </Router>
      </div>

  )
}

export default App
