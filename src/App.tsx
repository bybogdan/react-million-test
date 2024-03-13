import { css } from '../styled-system/css'

import TableContainer from './TableContainer'

function App() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 60px',
      })}
    >
      <TableContainer />
    </div>
  )
}

export default App
