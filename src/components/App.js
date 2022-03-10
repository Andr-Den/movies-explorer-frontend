import '../App.css';
import Footer from './Footer';
// import Header from './Header';
import Promo from './Promo';
import AboutProject from './AboutProject'
import Techs from './Techs';

function App() {
  return (
    <div className="page">
      {/* <Header /> */}
      <Promo />
      <AboutProject />
      <Techs />
      <Footer />
    </div>
  );
}

export default App;
