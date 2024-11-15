import { useState } from 'react'
import AppHeader from './components/AppHeader'
import languages from "./languages.js"
import './App.css'


function App() {

  const [active, setActive] = useState(0)

  function handleClick(e) {
    const newActive = Number(e.target.getAttribute("data-index"))
    setActive(newActive)
  }
  return (
    <>
      <AppHeader />
      <main>
        <div className="container">
          <div className='buttonRow'>
            {languages.map((item, index) =>
              <div key={item.id}>
                <button onClick={handleClick} data-index={index}>{item.title}</button>
                <div className={active == index ? "descriptionBox" : "hide"} key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            )}
          </div>

          {/* {languages.map((item, index) =>
            
          )} */}
        </div>
      </main>
    </>
  )
}

export default App
