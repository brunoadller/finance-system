import React from 'react'
import { formatCurrentMonth } from '../../helpers/dateFilter';
import ResumeItem from '../ResumeItem';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void
  income: number
  expense: number
}
const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => {
  const handlePrevMonth = () => {
    const [year, month] = currentMonth.split('-')
    const currentDate = new Date(parseInt(year), parseInt(month), 1)

    currentDate.setMonth(currentDate.getMonth() - 1)

    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}`)
  }
  const handleNextMonth = () => {
    const [year, month] = currentMonth.split('-')
    const currentDate = new Date(parseInt(year), parseInt(month), 1)

    currentDate.setMonth(currentDate.getMonth() + 1)

    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}`)
  }
  return (
    <div className="flex items-center  bg-white shadow-3xl rounded-[10px] p-5 mt-[-25px]">
        <div className="flex-1 flex items-center">
          <AiOutlineArrowLeft
          onClick={handlePrevMonth}
          className="cursor-pointer"
          size = {25}
          />
          <div className="flex-1 text-center">{formatCurrentMonth(currentMonth)}</div>
          <AiOutlineArrowRight 
          onClick={handleNextMonth}
          className="cursor-pointer"
          size = {25}
          />
          
        </div>
        <div className="w-[60%] flex text-center">
          <ResumeItem title = "Receitas" value={income}></ResumeItem>
          <ResumeItem title = "Despesas" value={expense}></ResumeItem>
          <ResumeItem title = "Balanço" value={income - expense}></ResumeItem>
        </div>
    </div>
  )
}

export default InfoArea