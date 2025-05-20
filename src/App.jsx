import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './pages/Home/home';     
import Footer from './components/footer';
import Vendor from './pages/Vendor/vendor';
import Pemesanan from './pages/Pemesanan/pemesanan';
import Pembayaran from './pages/Pembayaran/pembayaran';
import EditProfile from './pages/Profile/editProfile';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Search from './pages/Search/Search';
import Detail from './pages/Detail/Detail';
import Chat from './pages/Chat/Chat';
// import Register from './pages/Register/Register'; // jika ada

function AppContent() {
  const location = useLocation();

  // Daftar route tanpa header/footer
  const noLayoutRoutes = ['/login', '/register'];

  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <div>
      {!hideLayout && (
        <div style={{ zIndex: 999, position: 'relative' }}>
          <Header />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/pemesanan" element={<Pemesanan />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/search" element={<Search />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
