import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title';
import ProgressBar from './Progress';
import {InnerLayout} from "../styles/Layout"


function Skills() {
    return (
        <SkillsStyled>
            
          
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'English'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Video Editing'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'55%'}
                            text={'55%'}
                        />
                        <ProgressBar 
                            title={'JAVA'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'UNITY'}
                            width={'85%'}
                            text={'85%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
