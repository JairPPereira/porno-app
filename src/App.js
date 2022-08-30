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



 



        
        
   

        




        


        
      </Switch>

    </Router>
    
  );
}

export default App;
