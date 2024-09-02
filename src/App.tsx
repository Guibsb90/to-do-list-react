import End from './components/Footer'
import SideBar from './containers/sidebar'
import ListaDeTarefas from './containers/sidebar/ListaDeTarefa'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <ListaDeTarefas />
      </Container>
      <End />
    </>
  )
}

export default App
