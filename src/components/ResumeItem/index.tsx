import React from 'react'

type Props = {
  title: string
  value: number
}
const ResumeItem = ({title, value}: Props) => {
  return (
    <div className="flex-1">
      <span className="font-bold text-gray-500">{title}</span>
      <p
      className= 
      {`font-bold ${value < 0 ?'text-red-700':
        title === "Balanço" ? 'text-green-700':
        'text-black'
      }`}
      >R$ {value}</p>
    </div>
  )
}

export default ResumeItem