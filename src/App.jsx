import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './pages/Home/home';     
import Footer from './components/footer';
import Vendor from './pages/Vendor/vendor';
import Pemesanan from './pages/Pemesanan/pemesanan';
import Pembayaran from './pages/Pembayaran/pembayaran';
import EditProfile from './pages/Profile/editProfile';

function App() {
  return (
    <Router>
      <div>
        <div style={{zIndex:999, position:'relative'}}>
        <Header/>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />       
          <Route path="/vendor" element={<Vendor />} />          
          <Route path="/pemesanan" element={<Pemesanan />} />          
          <Route path="/pembayaran" element={<Pembayaran />} />        
          <Route path="/edit-profile" element={<EditProfile />} />          
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
