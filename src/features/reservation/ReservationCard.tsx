import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../customer/slice'
import { removeReservation } from './slice'
import {v4 as uuidv4} from 'uuid'

interface IReservationProps {
  name: string,
  index: number
}

export const ReservationCard = ({name, index}: IReservationProps) => {
  const dispatch = useDispatch()
  const removeReservationHandler = () => {
    dispatch(removeReservation(index))
    dispatch(addCustomer({id: uuidv4(), name: name, food:[]}))
  }
  return (
    <div className="reservation-card-container" onClick={removeReservationHandler}>{name}</div>
  )
}
