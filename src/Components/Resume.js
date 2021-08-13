import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'June21 - Present'}
                        title={'Campus Mantri'}
                        subTitle={'Geeks For Geeks'}
                        text={'Campus Manager at GeeksForGeeks, organised events and workshops, online talks about new age technologies'}
                    />
                    <ResumeItem
                        year={'July21 - August21'}
                        title={'Web Developer Intern'}
                        subTitle={'LetsGrowMore'}
                        text={'Successfully made a student result management portal system || Worked in React.Js frameworks, and Node.JS as a back-end to store student results in MongoDB || contributed open source'}
                    />
                    <ResumeItem
                        year={'April21 - June21'}
                        title={'Web Developer Intern'}
                        subTitle={'SSB Info Pvt Ltd'}
                        text={'Designed the business page and client records page with React.JS as the main framework. || Collaborated and solved client issued technical faults '}
                    />
                    <ResumeItem
                        year={'February21 - June21'}
                        title={'Internshala Student Partner'}
                        subTitle={'Internshala'}
                        text={'Conducted sessions online talk about internships and jobs. Organised semminars and social meet across campus'}
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem
                        year={'2020 - 2024'}
                        title={'Computer Science and Engineering'}
                        subTitle={'Haldia Institute of Technology'}
                        text={'B-tech in Computer Science and Engineering at HIT-Haldia || CGPA: 9.95/10 '}
                    />
                    <ResumeItem
                        year={'2018 - 2020'}
                        title={'CBSE 12 Science'}
                        subTitle={'Sudhir Memorial Institute'}
                        text={'CBSE(Class XII), with Computer Science, Maths, Physics, Chemistry, English as subjects || Aggregate: 90%'}
                    />
                    <ResumeItem
                        year={'2016 - 2017'}
                        title={'ICSE 12 Science'}
                        subTitle={'Methodist School Dankuni'}
                        text={'ICSE (Class X), with Computer Science, Maths, Physics, Chemistry, English as subjects || Percentage: 90%'} 
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
