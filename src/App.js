import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Porcategoria from './components/pages/Porcategoria';
import TVs from './components/pages/TVs';
import Pornoh from './components/pages/Pornoh';
import Pornof from './components/pages/Pornof';
import Pornosj from './components/pages/Pornosj';
import Daddyp from './components/pages/Daddyp';
import Livecam from './components/pages/Livecam';
import Tvgangbang from './components/pages/Tvgangbang';
import Filmes from './components/pages/Flimes';
import Tvlivec from './components/pages/Tvllivec';
import Tvplayboy from './components/pages/Tvplayboy';
import Venustv from './components/pages/Venustv';
import Hustler from './components/pages/Hustler';
import Redlight1 from './components/pages/Redlight1';
import Brazzers from './components/pages/Brazzers';
import Sextreme from './components/pages/Sextreme';
import Hot from './components/pages/Hot';
import Teensni from './components/pages/Teensni';
import Dorcel from './components/pages/Dorcel';
import Vividxxx from './components/pages/Vividxxx';
import Milf from './components/pages/Milf';
import Bigdick from './components/pages/Bigdick';
import Braziliantl1 from './components/pages/Braziliantl1';
import Bigtits from './components/pages/Bigtits';
import Fetish from './components/pages/Fetish';
import Teend3 from './components/pages/Teend3';
import Pornstar from './components/pages/Pornstar';
import Bigass from './components/pages/Bigass';
import Videosc from './components/pages/Videosc';
import Interracial from './components/pages/Interracial';












function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/porcategoria' component={Porcategoria} />
        <Route path='/tvs' component={TVs} />
        <Route path='/pornoh' component={Pornoh} />
        <Route path='/pornof' component={Pornof} />
        <Route path='/pornosj' component={Pornosj} />
        <Route path='/daddyp' component={Daddyp} />
        <Route path='/livecam' component={Livecam} />
        <Route path='/tvgangbang' component={Tvgangbang} />
        <Route path='/filmes' component={Filmes} />
        <Route path='/tvlivec' component={Tvlivec} />
        <Route path='/tvplayboy' component={Tvplayboy} />
        <Route path='/venustv' component={Venustv} />
        <Route path='/hustler' component={Hustler} />
        <Route path='/redlight1' component={Redlight1} />
        <Route path='/brazzers' component={Brazzers} />
        <Route path='/sextreme' component={Sextreme} />
        <Route path='/hot' component={Hot} />
        <Route path='/teensni' component={Teensni} />
        <Route path='/dorcel' component={Dorcel} />
        <Route path='/vividxxx' component={Vividxxx} />
        <Route path='/milf' component={Milf} />
        <Route path='/bigdick' component={Bigdick} />
        <Route path='/braziliantl1' component={Braziliantl1} />
        <Route path='/bigtits' component={Bigtits} />
        <Route path='/fetish' component={Fetish} />
        <Route path='/teend3' component={Teend3} />
        <Route path='/pornstar' component={Pornstar} />
        <Route path='/bigass' component={Bigass} />
        <Route path='/videosc' component={Videosc} />
        <Route path='/interracial' component={Interracial} />
        
        



 



        
        
   

        




        


        
      </Switch>

    </Router>
    
  );
}

export default App;
