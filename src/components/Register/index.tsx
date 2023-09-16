import React, {useState} from 'react'
import { Item } from '../../types/Item'

const Register = () => {
  const [getItems, setGetItems] = useState<Item[]>([])

  const handleClickValues = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(getItems)
  }
  const onChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGetItems({...getItems, [e.target.name]: e.target.value})
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
        name='date'  
        type="date"  placeholder='Informe a Data' onChange={onChangeValues}/>
        <input className="text-md bg-white shadow-3xl rounded-[10px] w-full px-5 py-3 text-center" 
        name='category'
        type="text"   placeholder='Informe a Categoria' onChange={onChangeValues}/>
        <input className="text-md bg-white shadow-3xl rounded-[10px] w-full px-5 py-3 text-center" 
        name='title'
        type="text"  placeholder='Informe o Título' onChange={onChangeValues}/>
        <input className="text-md bg-white shadow-3xl rounded-[10px] w-full px-5 py-3 text-center" 
        name='value'
        type="number" placeholder='Informe o valor' onChange={onChangeValues} />
        <button 
        type='submit'
        className="shadow-3xl rounded-[10px] bg-slate-900 text-white font-bold w-full text-center py-3 ">Cadastrar</button>
      </form>
    </div>
  )
}

export default Register