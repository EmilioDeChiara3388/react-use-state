import AppHeader from './components/AppHeader'
import languages from "./languages.js"
import './App.css'


function App() {


  return (
    <>
      <AppHeader />
      <main>
        <div className="container">
          <div className="buttonList">
            {languages.map((item, index) =>
              <div className='buttonRow' key={item.id}>
                <button>{item.title}</button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
