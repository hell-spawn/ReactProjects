import './App.css'
import Accordion from './components/accordion/Accordion'

function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col col-12">
          <div className="row">
            <div className="col col-10 offset-1">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
