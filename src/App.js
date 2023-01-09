import './App.css';
import AllTemplates from './components/AllTemplates/AllTemplates';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import GrowFaster from './components/GrowFaster/GrowFaster';
import Header from './components/Header/Header';
import WatchVideo from './components/WatchVideo/WatchVideo';

function App() {
  return (
    <>
      <Header></Header>
      <WatchVideo></WatchVideo>
      <GrowFaster></GrowFaster>
      <CustomerReviews></CustomerReviews>
      <GetStarted></GetStarted>
      <AllTemplates></AllTemplates>
      <Footer></Footer>
    </>
  );
}

export default App;
