import React from 'react';
import styled from 'styled-components';
import SchoolIcon from '@material-ui/icons/School';
import Title from '../Components/Title'
import ResumeItem from '../Components/Resumeitem'
import SmallTitle from '../Components/SmallTitle';
import {InnerLayout} from "../styles/Layout"


function Resume() {
 
    const school = <SchoolIcon/>
    return (
        <ResumeStyled>
            <Title title={"History of education"}  />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={school} title={"Educational Qualifications"} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={"2019-Present"} 
                        title={"Thai-Nichi Institute of Technology"}
                        subTitle={"Bachelor's degree"}
            
                    />
                    <ResumeItem 
                        year={"2016-2019"} 
                        title={"Princess Chulabhorn Science High School Trang"}
                        subTitle={"High School"}
                        text={"Mathematics-Science"} 
                    />
                      <ResumeItem 
                        year={"2014-2016"} 
                        title={"Princess Chulabhorn Science High School Trang"}
                        subTitle={"Middle School"}
                        text={"Mathematics-Science"} 
                    />
               
                </div>
             
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
    
`;
export default Resume
