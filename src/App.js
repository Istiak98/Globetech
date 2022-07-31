import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import ServicePage from './pages/ServicePage/ServicePage';
import Login from './pages/Login/Login';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/service" element={<ServicePage />} />
      <Route exact path="/login" element={<Login/>} />
      
      </Routes>
    </div>
  );
}

export default App;
