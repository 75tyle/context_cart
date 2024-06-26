import React,{useContext} from 'react'
import { CartContext } from './context/Cart'


const Cart = () => {
    const cart = useContext(CartContext)
    const total = cart.item.reduce((a,b) => a + b.price,0)
  return (
    <div className='cart'>
      {cart&&cart.item.map((item)=>(
        <li>{item.name} - {item.price}</li>
      ))}
      <h5>Total bill: ${total}</h5>
    </div>
  )
}

export default Cart
