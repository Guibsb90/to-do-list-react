import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluídas" contador={2} />
        <FiltroCard legenda="urgentes" contador={3} />
        <FiltroCard legenda="importantes" contador={4} />
        <FiltroCard legenda="normais" contador={5} />
        <FiltroCard ativo legenda="todas" contador={8} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default SideBar
