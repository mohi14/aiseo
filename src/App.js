import './App.css';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import GrowFaster from './components/GrowFaster/GrowFaster';
import Header from './components/Header/Header';
import WatchVideo from './components/WatchVideo/WatchVideo';

function App() {
  return (
    <div>
      <Header></Header>
      <WatchVideo></WatchVideo>
      <GrowFaster></GrowFaster>
      <CustomerReviews></CustomerReviews>
    </div>
  );
}

export default App;
