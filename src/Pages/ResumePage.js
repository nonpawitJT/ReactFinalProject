import React from 'react'
import Title from '../Components/Title'
import {MainLayout,InnerLayout} from "../styles/Layout"
import Skills from '../Components/Skills'
import Resume from '../Components/Resume'

const ResumePage = () => {
  return (
    <MainLayout>
    <InnerLayout>
     <Title title={'Resume'} span={'Resume'}/>
     <Skills></Skills>
     <Resume></Resume>
    </InnerLayout>
 </MainLayout>
 
  )
}

export default ResumePage