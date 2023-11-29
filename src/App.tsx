
import './App.css'
import Header from './components/header/header'
import ListPokemon from './components/body/list/listPkemon'

function App() {
  

  return (
    <>
      <div className="pokedex-app">
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <div className="list-pokemon">
            <ListPokemon />
          </div>

        </div>
      </div>

      
    </>
  )
}

export default App
