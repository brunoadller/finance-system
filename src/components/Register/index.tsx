import React, {useState} from 'react'
import { Item } from '../../types/Item'
import { getYearMonthDateForSetInList } from '../../helpers/dateFilter'

type Props ={
  isRegister: (item: Item) => void
}
const category= ["food" , "rent" , "salary"]

const Register = ({isRegister}: Props) => {
  const [getDate, setGetDate] = useState('')
  const [getCategory, setGetCategory] = useState('')
  const [getTitle, setGetTitle] = useState('')
  const [getValue, setGetValue] = useState('')

  const handleClickValues =  (e: React.FormEvent) => {
    e.preventDefault()
    const errors: string[] = []

    if(isNaN(new Date(getDate).getTime())){
      errors.push('Data Inválida')
    }
    if(getTitle === ''){
      errors.push("Título vazio")
    }
    if(getCategory === ''  ){
      errors.push("Título vazio")
      for(let i = 0; i < category.length; i++ ){
        if(getCategory !== category[i]){
          errors.push("Preencha com a categoria correta!")
          break
        }
      }
    }
    
    if(parseInt(getValue) <= 0){
      errors.push("Valor inválido")
    }

    if(errors.length > 0){
      alert(errors.join("\n"))
    }else{
      isRegister({
        date: getYearMonthDateForSetInList(getDate),
        category: getCategory,
        title: getTitle,
        value: parseInt(getValue)
      })
      clearFields()
    }
  }
  const clearFields = () => {
    setGetDate('');
    setGetCategory('');
    setGetTitle('');
    setGetValue('');
  }
  return (
    <div className = " flex flex-col items-center m-auto max-w-7xl mb-[50px]">
      <h1
      className="text-2xl font-bold p-5"
      >Coloque os dados de suas despesas ou receitas</h1>
      <form 
        onSubmit={handleClickValues}
        className="flex flex-col items-center w-full gap-5"
      >
        <input className="text-md bg-white shadow-3xl rounded-[10px] w-full px-5 py-3 text-center"
        value = {getDate}
        name='date'  
        type="date"  placeholder='Informe a Data' onChange={(e) => setGetDate(e.target.value)}/>
        
        <select name="Category"
            className="text-md bg-white shadow-3xl rounded-[10px] w-full px-5 py-3 text-center"
            onChange={(e) => setGetCategory(e.target.value)}
        >
          <option value="" disabled selected>Selecione...</option>
          <option value = {"food"} >food (Alimentação)</option>
          <option value = {"rent"} >rent (Aluguel) </option>
          <option value = {"salary"} >Salary (Salário)</option>
        </select>
       
        <input className="text-md bg-white shadow-3xl rounded-[10px] w-full px-5 py-3 text-center"
        value = {getTitle} 
        name='title'
        type="text"  placeholder='Informe o Título' onChange={(e) => setGetTitle(e.target.value)}/>
        <input className="text-md bg-white shadow-3xl rounded-[10px] w-full px-5 py-3 text-center"
        value = {getValue} 
        name='value'
        type="number" placeholder='Informe o valor' onChange={(e) => setGetValue(e.target.value)} />
        <button 
        type='submit'
        className="shadow-3xl rounded-[10px] bg-slate-900 text-white font-bold w-full text-center py-3 ">Cadastrar</button>
      </form>
    </div>
  )
}

export default Register