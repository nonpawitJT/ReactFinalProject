import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import YouTubeIcon from '@material-ui/icons/YouTube'
import styled from "styled-components";
const HomePage = () => {
    return (
        <HomePageStyled>
            <div className='typography'>
                <h1>Hi I'm<span> Nonpawit Nittaworn</span></h1>
                <p>I am studying at Thai-Nichi Institute of Technology. since I was a kid Technology multimedia has been my passion. I always take my time to practice and learning about web developer and game design.</p>
                       <div className='icons'>
                       <a href='https://www.facebook.com/TaN2554/'>  <div className='icon i-facebook'>  <FacebookIcon/> </div></a>
                       <a href="https://github.com/nonpawitJT">  <div className='icon i-github'> <GitHubIcon/> </div></a>
                       <a href='https://www.youtube.com/channel/UCfbK7xwffD8BQwnV3lcmDyw'>  <div className='icon i-youtube'> <YouTubeIcon/> </div></a>
            </div>

            </div>
         
        </HomePageStyled>
    )
}
const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;
export default HomePage