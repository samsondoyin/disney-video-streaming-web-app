import './App.css';
import Login from "./components/Login"
import Home from "./components/Home"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
