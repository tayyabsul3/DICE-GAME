import { useState } from 'react'
import './App.css'
import Playgame from './components/playgame'
import Dicegame from './components/dicegame';
function App() {
 const [isGamestarted,SetGameStarted] = useState(true);

 function toggle()
 {
  SetGameStarted((prev) => !prev);

  return isGamestarted;
 }

  return (
    <>

    <div >
     {isGamestarted ? <Dicegame/> : <Playgame toggle={toggle}/>}
    </div>
      
      
    </>
  )
}

export default App
