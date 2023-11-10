import './global.css'
import { Header } from './components/header.jsx'
import { Board } from './components/board.jsx'
import { Card } from './components/cards.jsx'
import { Analytics } from '@vercel/analytics/react';

export function App() {
  return (

    <div>

      <header>
        <nav>
          <img src={"/static/images/logo.svg"} alt="USTAY logo" />
        </nav>
      </header>

      <body>
    
        <div className="firstContainer">
          <Header />
        </div>

        <div className='secondContainer'>
          <Board />
        </div>

        <div className="thirdContainer">
          <Card />
        </div>

        <footer>
          <p> @joaodk3 </p>
        </footer>
        
        <Analytics />
      </body>

    </div>

  )
}
  
