// import { For, block } from 'million/react'
import { css } from '../styled-system/css'

const Row = ({ value, index }: { value: number; index: number }) => {
  return (
    <tr>
      <td>Row {index}</td>
      <td>{value}</td>
    </tr>
  )
}

// millionjs version
// export const Table = block(({ rows }: { rows: number }) => {
//   return (
//     <table
//       className={css({
//         borderCollapse: 'collapse',
//         boxSizing: 'border-box',

//         width: '100%',
//         '& th, td': {
//           border: '1px solid black',
//           padding: '8px',
//           textAlign: 'left',
//           fontSize: 'lg',
//         },
//         '& th': {
//           backgroundColor: 'lightgray',
//         },
//       })}
//     >
//       <thead>
//         <tr
//           className={css({
//             '& th': {
//               fontWeight: 'bold',
//             },
//           })}
//         >
//           <th>Name</th>
//           <th>Value</th>
//         </tr>
//       </thead>
//       <tbody>
//         <For
//           each={Array.from({ length: rows }).map((_, i) => ({
//             value: Math.random(),
//             key: i,
//           }))}
//         >
//           {(item) => <Row {...item} />}
//         </For>
//       </tbody>
//     </table>
//   )
// })

// react version
export const Table = ({ rows }: { rows: number }) => {
  return (
    <table
      className={css({
        borderCollapse: 'collapse',
        boxSizing: 'border-box',

        width: '100%',
        '& th, td': {
          border: '1px solid black',
          padding: '8px',
          textAlign: 'left',
          fontSize: 'lg',
        },
        '& th': {
          backgroundColor: 'lightgray',
        },
      })}
    >
      <thead>
        <tr
          className={css({
            '& th': {
              fontWeight: 'bold',
            },
          })}
        >
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows })
          .map((_, i) => ({
            value: Math.random(),
            index: i,
          }))
          .map((item) => (
            <Row key={`row-${item.index}`} {...item} />
          ))}
      </tbody>
    </table>
  )
}
