import { Item } from '../types/Item';

export const getCurrentMonth = () => {
  const now = new Date();

  return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {  
  //primeiro item antes do tracinho joga em year e o segundo em month
  const [year, month] = date.split('-');
  
  const newList: Item[] = list.filter(l => 
    l.date.getFullYear() === parseInt(year) &&
    l.date.getMonth() === parseInt(month))
  return newList
}

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() 
  const day = date.getDate()
  return `${formatMonthAndDay(day)}/${formatMonthAndDay(month)}/${year}`

}
const formatMonthAndDay = (n: number): string => n < 10 ? `0${n}`: `${n}`

export const formatCurrentMonth = (currentMonth: string): string => {
  const [year, month] = currentMonth.split('-')
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  return `${months[parseInt(month) - 1]} de ${year}`
}

export const getYearMonthDateForSetInList = (date: string): Date =>{
  const [year, month, day] = date.split('-')
  return new Date(parseInt(year), parseInt(month), parseInt(day))
}