import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import { CustomerCard } from "./features/customer/CustomerCard";
import { ICustomer } from "./features/customer/slice";
import { ReservationCard } from "./features/reservation/ReservationCard";
import { addReservation } from "./features/reservation/slice";

interface IReservationstate {
  name: string
}

function App() {
  const reservations: string[] = useSelector((state: RootState) => state.reservation.reservations)
  const customers: ICustomer['customers'] = useSelector((state: RootState) => state.customer.customers)

  const renderreservations: JSX.Element[] = reservations.map((reservation, index) => <ReservationCard name={reservation} index={index} />)
  const renderCustomers: JSX.Element[] = customers.map((customer) => <CustomerCard id={customer.id} name={customer.name} food={customer.food} />)

  const dispatch = useDispatch()

  const [name, setName] = useState<IReservationstate['name']>('')
  const addReservationHandler = () => {
    if (!name) return
    dispatch(addReservation(name))
    setName('')
  }
   
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {renderreservations}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={addReservationHandler}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {renderCustomers}
        </div>
      </div>
    </div>
  );
}

export default App;