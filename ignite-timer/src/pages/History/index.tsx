import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20:00</td>
              <td>ha 2 meses</td>
              <td>concluída</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20:00</td>
              <td>ha 2 meses</td>
              <td>concluída</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20:00</td>
              <td>ha 2 meses</td>
              <td>concluída</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20:00</td>
              <td>ha 2 meses</td>
              <td>concluída</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20:00</td>
              <td>ha 2 meses</td>
              <td>concluída</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20:00</td>
              <td>ha 2 meses</td>
              <td>concluída</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}