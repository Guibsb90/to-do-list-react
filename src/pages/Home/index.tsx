import BotaoAdicionar from '../../components/BotaoAdicionar'
import SideBar from '../../containers/sidebar'
import ListaDeTarefas from '../../containers/sidebar/ListaDeTarefa'

const Home = () => (
  <>
    <SideBar />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
