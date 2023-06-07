import './App.scss';
import About from './Components/About';
import Advert from './Components/Advert';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import Review from './Components/Review';

function App() {
  return (
    <div className="body-container">
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Gallery />
      <Review />
      <Advert />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
