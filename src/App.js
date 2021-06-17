import React, {Component} from 'react'
import './App.css';
import Palett from './Palett'; 
// eslint-disable-next-line no-unused-vars
import SeedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors';
import {Switch,Route} from 'react-router-dom';
import PalatteList from './PalatteList';
import SingleColorComponent from './SingleColorComponent';

import NewPaletteComponent from './NewPaletteComponent';

class App extends Component{

  findPalatte=(id)=>{
  return seedColors.find(palatte => palatte.id === id)
    
    

  }
  
  render(){
    console.log(seedColors[0].id)
    
  return (
  
      <div>

        
      <Switch>

      <Route exact path='/palette/new' render={()=>  <NewPaletteComponent  />}  />
      
      <Route exact path='/' render={(routeProps)=> <PalatteList palettes={seedColors}  {...routeProps}/>} />

        <Route exact path='/palette/:id' render={(routerProps) => <Palett palatte={generatePalette(this.findPalatte(routerProps.match.params.id))} />} />
        

      <Route exact path='/palette/:paletteId/:colorId' render={(routerProps)=> <SingleColorComponent palette={generatePalette(this.findPalatte(routerProps.match.params.paletteId))}  colorId={routerProps.match.params.colorId}  />}     />
      </Switch>

     {/* <Palett  palatte={generatePalette(seedColors[2])}/> */}
    
    </div> 
  );
  }
}

export default App;
