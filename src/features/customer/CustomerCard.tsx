import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFood } from './slice'

interface ICustomerProps {
  id: string
  name: string
  food: string[]
}

export const CustomerCard = ({id, name, food}: ICustomerProps) => {
  const [foodItem, setfoodItem] = useState<string>('')

  const dispatch = useDispatch()
  const addFoodHandler = () => {
    if(!foodItem) return
    dispatch(addFood({id, foodItem}))
    setfoodItem('')
  }

  const renderFood = food.map(food => food + ' ')
  return (
    <div className="customer-food-card-container">
    <p>{name}</p>
    <div className="customer-foods-container">
      <div className="customer-food">{renderFood}</div>
      <div className="customer-food-input-container">
        <input value={foodItem} onChange={e => setfoodItem(e.target.value)} />
        <button onClick={addFoodHandler}>Add</button>
      </div>
    </div>
  </div>
  )
}
