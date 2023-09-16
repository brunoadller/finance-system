import {Item} from "../types/Item"

export const items: Item[] = [
  {
    date: new Date(2023, 9, 15),
    category: 'food', 
    title: "McDonalds",
    value: 32.52
  },
  {
    date: new Date(2023, 9, 2),
    category: 'food', 
    title: "Burger King",
    value: 28
  },
  {
    date: new Date(2023, 9, 16),
    category: 'rent', 
    title: "Aluguel Apt",
    value: 2300
  },
  {
    date: new Date(2023, 10, 18),
    category: 'salary', 
    title: "Salario ACME",
    value: 4500
  }
];