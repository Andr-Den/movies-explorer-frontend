import '../App.css';
import Footer from './Footer';
// import Header from './Header';
import Promo from './Promo';
import AboutProject from './AboutProject'
import Techs from './Techs';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="page">
      {/* <Header /> */}
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
