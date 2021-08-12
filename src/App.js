import React from 'react';
import Categories from './homePage/Categories';
import Home from './homePage/Home';
import Nav from './homePage/Nav';
import '../src/styles/main.scss'
import SmartWatch from './Recommendation/SmartWatch';
import Ads from './ads/Ads';
import NewCollect from './NewCollection/NewCollect';

function App() {
  return (
    <div className="App">
      <Nav />
      <Categories />
      <Home />
      <SmartWatch />
      <Ads />
      <NewCollect/>
    </div>
  );
}

export default App;
