import { Item } from '../../types/Item'
import TableItem from '../TableItem'

type Props = {
  list: Item[]
}
 const TableArea = ({list}: Props) => {
  return (
    <table className="w-full bg-white mt-5 p-5 rounded-[10px] shadow-3xl" >
      <thead >
        <tr>
          <th className="py-[10px] px-4 w-[100px] text-left">Data</th>
          <th className="py-[10px] w-[130px] text-left">Categoria</th> 
          <th className="py-[10px] text-left">Título</th> 
          <th className="py-[10px] w-[150px] text-left">Valor</th> 
        </tr>
      </thead>
      <tbody>
        {
          list.map((item, index) => {
            return(
             <TableItem key={index} item = {item}/>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default TableArea