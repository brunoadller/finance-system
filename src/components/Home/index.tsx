import {useState, useEffect} from 'react'
import { Category } from '../../types/Category'
import { Item } from '../../types/Item'
import { categories } from '../../data/categories'
import { items } from '../../data/items'
import { getCurrentMonth, filterListByMonth } from '../../helpers/dateFilter'
import TableArea from '../TableArea'
import InfoArea from '../InfoArea'

const  Home = () => {
  const [list, setList] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState<number>(0)
  const [expense, setExpense] = useState<number>(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
    
  }, [list, currentMonth])

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0

    filteredList.forEach((item) => {
      if(categories[item.category].expense){
        expenseCount += item.value
      }else{
        incomeCount += item.value
      }
    })
    setIncome(incomeCount)
    setExpense(expenseCount)
  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }
  return (
    <div>
      <main className = "m-auto max-w-7xl mb-[50px]">
        {/*Area de informações*/}
        <InfoArea
        income = {income}
        expense = {expense}
        onMonthChange={handleMonthChange}
        currentMonth = {currentMonth}/>
        {/*Area de inserção*/}

        {/*Area de itens*/}
        <TableArea list = {filteredList}/>
      </main>
    </div>
  )
}

export default Home


