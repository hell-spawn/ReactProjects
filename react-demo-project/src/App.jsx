import './App.css'
import RandomColor from './components/random-color/RandomColor'
import Accordion from './components/accordion/Accordion'
import RatingSection from './sections/RatingSection'

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
      <div className="row">
        <div className="col col-12">
          <RandomColor />
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <RatingSection />
        </div>
      </div>
    </div>
  )
}

export default App
