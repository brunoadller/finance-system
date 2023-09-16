import React from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import {Link} from 'react-router-dom'
const InputsRoutes = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-3 p-5 text-white">
      <Link to={'/'}>
        <AiOutlineArrowLeft className="cursor-pointer" size={25}/>
      </Link>
      <p className="text-md">Cadastrar Receitas ou Despesas</p>
      <Link to = {'/registrar'}>
        <AiOutlineArrowRight  className="cursor-pointer" size={25} />
      </Link>
    </div>
  )
}

export default InputsRoutes