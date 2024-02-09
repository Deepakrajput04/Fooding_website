import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Delivery from './components/Delivery';
import About from './components/About';
import Recipes from './components/Recipes';
import TopCollection from './components/TopCollection';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();




function App() {


  return (
    <>
    <Navbar />
    <Home />
    <Delivery />
    <About />
    <Recipes />
    <TopCollection />
    <Team />
    <Testimonial />
    <Footer />
    </>
  );
}

export default App
