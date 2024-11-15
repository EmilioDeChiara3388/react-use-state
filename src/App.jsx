import AppHeader from './components/AppHeader'
import languages from "./languages.js"
import './App.css'


function App() {


  return (
    <>
      <AppHeader />
      <main>
        <div className="container">
          <div className='buttonRow'>
            {languages.map((item, index) =>

              <div key={item.id}>
                <button>{item.title}</button>
              </div>

            )}
          </div>

          {languages.map((item, index) =>
            <div className='descriptionBox' key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          )}

        </div>
      </main>
    </>
  )
}

export default App
