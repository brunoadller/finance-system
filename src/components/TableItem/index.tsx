import React from 'react'
import { Item } from '../../types/Item'
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'
type ItemProps = {
  item: Item
}
const TableItem = ({ item }:ItemProps) => {
 
  return (
    <tr className="">
      <td className="py-[10px] px-4">{formatDate(item.date)}</td>
      <td className="py-[10px]">
        <div className= {
          `inline-block px-[10px] py-[5px] 
          rounded-[5px] text-white  
          ${categories[item.category].color}`}>
          {categories[item.category].title}
        </div>
      </td>
      <td className="py-[10px]">{item.title}</td>
      <td className="py-[10px]">
        <div className={`
          
          ${categories[item.category].expense ? 'text-red-700': 'text-green-900'}
        `}>
          R$ {item.value}
        </div>
      </td>      
   </tr>
  )
}

export default TableItem