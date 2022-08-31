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
        
        



 



        
        
   

        




        


        
      </Switch>

    </Router>
    
  );
}

export default App;
