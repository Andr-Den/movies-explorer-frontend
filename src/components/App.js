import '../App.css';
import Footer from './Footer';
// import Header from './Header';
import Promo from './Promo';
import AboutProject from './AboutProject'

function App() {
  return (
    <div className="page">
      {/* <Header /> */}
      <Promo />
      <AboutProject />
      <Footer />
    </div>
  );
}

export default App;
