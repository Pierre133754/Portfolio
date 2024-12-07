import { useEffect, useState } from 'react'
import './App.scss'
import GHlink from './components/GHlink'
import Projets from './components/Projets'
import ProjetsContent from './components/ProjetsContent'
import Balls from './components/Balls'
import Test from './components/Test'

function App() {
  const [projet, setProjet] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false
  })
  const [buttoned, setButtoned] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show')
          }
      })
    })
    
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))
  }, [])

  return (
    <>
      <header>
        <img src='./hap.png' alt='happy face'></img>
        <nav>
          <a href='#presentation'>Présentation</a>
          <a href='#projetsOC'>Projets Openclassrooms</a>
          <a href='#compétences'>Compétences</a>
          <div className='navMenu' onClick={() => {
            setButtoned(!buttoned)
          }}>
            <div className={`bar1 ${buttoned ? 'change' : ''}`}></div>
            <div className={`bar2 ${buttoned ? 'change' : ''}`}></div>
            <div className={`bar3 ${buttoned ? 'change' : ''}`}></div>
            <div className={'drop'+(buttoned ? 'On' : 'Off')}>
              <a href='#presentation'>Présentation</a>
              <a href='#projetsOC'>Projets Openclassrooms</a>
              <a href='#compétences'>Compétences</a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section id='presentation' className='hidden'>
          <div className='me'>
            <h1>Portfolio de Pierre Bourguignon</h1>
            <p>Développeur qui fais des trucs</p>
          </div>
          <div className='presentationCanvas'>
            <GHlink />
          </div>
        </section>
        <section id='projetsOC' className='hidden'>
          <div className='POCintro'>
            <h2>Projets OpenClassrooms</h2>
            <p>Projets réalisés durant la formation OpenClassrooms dans le but d'appendre les bases du développement web</p>
            <p className='indication'>Scroller sur l'image pour changer le projet</p>
          </div>
          <div className='POCprojets'>
            <div className='POCprojetsContent'>
              <ProjetsContent projet={projet} />
            </div>
            <div className='POCprojetsCanvas'>
              <Projets projet={projet} setProjet={setProjet} />
            </div>
          </div>
        </section>
        <section id='compétences' className='hidden'>
          <div className='CPTintro'>
            <h2>Mes Compétences</h2>
            <p>Je connais les langages et librairies suivantes : HTML, CSS, JavaScript, React, Node.js</p>
          </div>
          <div className='CPTcanvas'>
            <Balls />
          </div>
        </section>
        <section id='test' className='hidden'>
          <Test />
        </section>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
