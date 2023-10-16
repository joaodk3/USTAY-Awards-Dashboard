import './global.css'
import { Header } from './components/header.jsx'
import { Board } from './components/board.jsx'
import { Card } from './components/cards.jsx'

export function App() {
  return (

    <div>

      <header>
        <nav>
          <img src="./src/assets/logo.svg" alt="USTAY logo" />
        </nav>
      </header>
    
      <div className="firstContainer">
        <Header />
      </div>

      <div className='secondContainer'>
        <Board />
      </div>

      <div className="thirdContainer">
        <Card />
      </div>

    </div>

  )
}
  
