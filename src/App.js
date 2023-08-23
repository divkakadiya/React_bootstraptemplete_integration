import Navbar from './component/Navbar';
import Menu from './component/Menu';
import Banner from './component/Banner';
import Footer from './component/Footer';
import './App.css'
import Preloader from './component/Preloader';

function App() {
  return (
    <div className="App">
      <Preloader />
      <Navbar />
      <Menu />
      <Banner />
      <Footer />
    </div>
  )
}

export default App;
