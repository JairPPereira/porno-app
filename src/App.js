import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Porcategoria from './components/pages/Porcategoria';
import TVs from './components/pages/TVs';
import Pornoh from './components/pages/Pornoh';











function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/porcategoria' component={Porcategoria} />

        <Route path='/tvs' component={TVs} />
        <Route path='/pornoh' component={Pornoh} />



 



        
        
   

        




        


        
      </Switch>

    </Router>
    
  );
}

export default App;
