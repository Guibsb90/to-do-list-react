import Tarefa from '../../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../../utils/enums/tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Estudar ReactJS',
    descricao: 'Ver a aula 2 da EBAC',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Estudar JavaScript',
    descricao: 'Ver a aula 1 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <>
    <Container>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  </>
)
export default ListaDeTarefas
