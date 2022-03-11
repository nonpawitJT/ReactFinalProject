import React from 'react'
import styled from "styled-components";
import Title from '../Components/Title'
import {MainLayout,InnerLayout} from "../styles/Layout"
import avatar2 from '../img/avatar2.jpg'

const AboutPage = () => {
  return (
    
 <MainLayout>
   <InnerLayout>
    <Title title={'About me'} span={'About me'}/>

    <AboutPageStyled>
        
    <div className="left-content">
        <img src={avatar2} alt=''/>
    </div>
    <div className="right-content">
        <h1>I'm <span>Nonpawit Nittaworn </span></h1>
        <p>นักศึกษาสถาบันเทคโนโลยีไทย-ญี่ปุ่น สาขาวิชาเทคโนโลยีมัลติมิเดีย </p>
        <p> NickName &nbsp; : Tan <br/>
            Age: 21 <br/>
            Languages&nbsp;: Thai,Japanese<br/>
  
             </p>
    </div>
</AboutPageStyled>
</InnerLayout>
</MainLayout>
    
  )
}



const AboutPageStyled = styled.div`
    display: flex;
    padding-top : 20px;
    img{
       
        width: 60%;
        border-radius: 30%;
    }
    .left-content{
        width: 50%;
        padding-left: 20px;
        position: relative;
       
    }
    .right-content{
        padding-left: 1.5rem;
        position: relative;
        h1{
            font-size: 2rem;
            padding-bottom: 1rem;
            span{
                font-size: 2rem;
            }
        }
        p{
            font-size: 1rem;
            padding-bottom: 1rem;
            
        }
    }

`;
export default AboutPage