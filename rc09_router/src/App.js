import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/details/:productId" element={<Details />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer/>       
      </BrowserRouter>
    </div>
  );
}

export default App;


//! useNavigate: butona tıklandığında başka bir sayfaya göndermek için e tagi vermeden </Button onClick={(()=>navigate("/")}>Go Home </Button>

//!useParams: bir parametre vererek kalıp bir sayfaya yönlendirir. Mesela her kullanıcı profil sayfası için ayrı ayrı component oluşturmuyoruz da tek kalıp üzerinden oraya gönderiyoruz


//!useLocation:
