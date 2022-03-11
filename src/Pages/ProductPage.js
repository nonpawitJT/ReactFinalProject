import React from 'react'
import ProductTable from '../Components/ProductTable'
import Title from '../Components/Title'
import {MainLayout,InnerLayout} from "../styles/Layout"
const ProductPage = () => {
  return (
    <MainLayout>
    <InnerLayout>
    <Title title={'Product'} span={'Product'}/>
    <ProductTable></ProductTable>
    </InnerLayout>
    </MainLayout>
  )
}

export default ProductPage