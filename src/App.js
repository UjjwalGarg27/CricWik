import React from 'react';
import {Route} from "react-router-dom";
import Home from './components/Parts/Home/Home';
import Tableau from './components/Parts/Tableau/Tableau';
import KeyFindings from './components/Parts/KeyFindings';
import AboutUs from './components/Parts/AboutUs';
import MatchDetails from './components/Parts/Home/MatchDetails';
import Temp from './components/Parts/Home/API';
import MatchCards from './components/Parts/MatchCards/MatchCards';

const App = () => {
  return (
    <>


      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Tableau" component={Tableau} />
      <Route exact path="/KeyFindings" component={KeyFindings} />
      <Route exact path="/AboutUs" component={AboutUs} />

    </>
  )
}

export default App;
