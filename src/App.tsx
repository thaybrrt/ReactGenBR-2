import './App.css'
import Contador from './paginas/contador/Contador'
import Home from './paginas/home/Home'


function App() {


  return (
    <>
      <Home titulo="Esse é um componente com props"
      texto="agora já estamos trabalhando com props - componente chamado com sucesso" />

      <Home titulo="Agora estamos testando"
      texto="esse é um texto parava comprovar a teoria do props" />
      <Contador />
    </>
  )
}

export default App
