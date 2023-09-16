import React from 'react'
import InputsRoutes from '../InputsRoutes'
const Header = () => {
  return (
    <header className="flex flex-col items-center  bg-slate-900 h-[150px] text-center">
        <h1 className="m-0 p-0 pt-[30px]  text-white font-bold text-3xl">
          Sistema Financeiro
        </h1>
        <InputsRoutes />
    </header>
  )
}

export default Header