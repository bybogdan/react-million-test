import { lazy, useState } from 'react'
import { css } from '../styled-system/css'

const Table = lazy(() =>
  import('./Table').then((module) => ({ default: module.Table }))
)

export default function TableContainer() {
  const [rows, setRows] = useState(10000)

  return (
    <>
      <div
        className={css({
          display: 'flex',
          gap: '30px',
          alignItems: 'center',
        })}
      >
        <p
          className={css({
            fontSize: 'xl',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '32px 0',
          })}
        >
          Total rows amount: <strong>{rows}</strong>
        </p>
        <button
          className={css({
            padding: '20px 30px',
            fontSize: 'lg',
            fontWeight: 'bold',
            margin: '32px 0',
            backgroundColor: 'lightblue',
            borderRadius: 'md',
            cursor: 'pointer',
            transition: 'all 0.2s linear',
            '&:hover': {
              scale: '1.1',
            },
          })}
          onClick={() => setRows((curr) => curr + 100)}
        >
          🐼 Add 100 rows
        </button>
      </div>

      <Table rows={rows} />
    </>
  )
}
