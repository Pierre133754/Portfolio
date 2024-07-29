import './App.scss'
import { P5sketch } from './P5sketch'
import Bod from './components/Bod'

function App() {
  localStorage.setItem("f", 0);

  return (
    <>
      <P5sketch></P5sketch>
      <header>
        <h1>Portfolio de Pierre BOURGUIGNON</h1>
        <nav>
          <div className='gitFill' onClick={() => (document.getElementById("gitLink").click())}>
            <div className='gitLink'>
              <a href='https://github.com/Pierre133754' target='_blank' id='gitLink'>Mon Github</a>
            </div>
          </div>
          <div className='slider'>
            <label htmlFor="framerate">Game of life Framerate</label>
            <input id='framerate' type='range' min={1} max={60} defaultValue={10} 
            onMouseMove={(e) => (
              localStorage.setItem("f", 1)
            )}
            onMouseDown={(e) => (
              localStorage.setItem("f", 1)
            )}
            ></input>
          </div>
        </nav>
      </header>
      <Bod></Bod>
    </>
  )
}

export default App
