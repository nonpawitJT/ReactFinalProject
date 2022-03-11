import React from 'react'
import CartTable from '../Components/CartTable'
import Title from '../Components/Title'
import {MainLayout,InnerLayout} from "../styles/Layout"
const CartPage = () => {
  return (
  
  <MainLayout>
      <InnerLayout>
    <CartTable></CartTable>
    </InnerLayout>
    </MainLayout>
  )
}

export default CartPage