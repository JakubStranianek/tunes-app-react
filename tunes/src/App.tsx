import React from 'react'

import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Home from "./views/Homepage"
import About from "./views/AboutPage"
import Tunes from "./views/TunesPage"
import TheNavigation from './components/TheNavigation'

function App() {
  return (
    <div className="App">
      <header>
        <TheNavigation/>
     </header>

     <hr/>

     <main className='content'>
       <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/about' element={ <About />}/>
        <Route path='/tunes' element={ <Tunes />}/>
       </Routes>
      
     </main>
    </div>
  );
}

export default App;
