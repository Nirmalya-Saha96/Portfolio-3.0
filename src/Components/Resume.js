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
                    year={'Oct21 - Present'}
                    title={'Freelance Full Stack & Android Developer'}
                    subTitle={'Freelancer'}
                    text={'- Print All Docs(Recent Project)'}
                    text1={'- store , link & print Adhar, Voter, Pan Card details once Admin transfers an amount to the user.'}
                    text2={'- Admin Panel - transfer amount, see all the details given by users, delete unLinked account. Technology used: MERN-stack, JWT-token, Validator'}
                    text3={'- Also,'}
                    text4={'- Experienced in Developing Business Pages'}
                    text5={'- Experienced in Developing and Designing Individual Portfolio Pages'}
                />
                    <ResumeItem
                        year={'June21 - Present'}
                        title={'Campus Mantri'}
                        subTitle={'Geeks For Geeks'}
                        text={'- Campus Manager at GeeksForGeeks, organised events and workshops, online talks about new age technologies'}
                        text1={'- Influenced 1500 students in field of DSA and Git'}
                        text2={''}
                        text3={''}
                        text4={''}
                        text5={''}
                    />
                    <ResumeItem
                        year={'July21 - August21'}
                        title={'Web Developer Intern'}
                        subTitle={'LetsGrowMore'}
                        text={'-student result management portal system'}
                        text1={'- Worked in React.Js frameworks, and Node.JS as a back-end to store student results in MongoDB'}
                        text2={''}
                        text3={''}
                        text4={''}
                        text5={''}
                    />
                    <ResumeItem
                        year={'Sep21 - Oct21'}
                        title={'Web Developer & Design Intern'}
                        subTitle={'The Sparks Foundation'}
                        text={'- Developed payment gateway integration system'}
                        text1={''}
                        text2={''}
                        text3={''}
                        text4={''}
                        text5={''}
                    />
                    <ResumeItem
                        year={'April21 - June21'}
                        title={'Web Developer Intern'}
                        subTitle={'SSB Info Pvt Ltd'}
                        text={'- Designed the business page and client records page with React.JS as the main framework'}
                        text1={'- Collaborated and solved client issued technical faults'}
                        text2={''}
                        text3={''}
                        text4={''}
                        text5={''}
                    />
                    <ResumeItem
                        year={'February21 - June21'}
                        title={'Internshala Student Partner'}
                        subTitle={'Internshala'}
                        text={'- Conducted sessions online talk about internships and jobs.'}
                        text1={'- Organised semminars and social meet across campus'}
                        text2={''}
                        text3={''}
                        text4={''}
                        text5={''}
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
                        text={'- Bachelor of Technology in Computer Science and Engineering at HIT-Haldia'}
                        text1={'- CGPA: 9.97/10 '}
                        text2={''}
                        text3={''}
                        text4={''}
                        text5={''}
                    />
                    <ResumeItem
                        year={'2018 - 2020'}
                        title={'CBSE 12 Science'}
                        subTitle={'Sudhir Memorial Institute'}
                        text={'- Central Board of Secondary Education (Class XII), '}
                        text1={'- with Computer Science, Maths, Physics, Chemistry, English as subjects'}
                        text2={'- Aggregate: 90%'}
                        text3={''}
                        text4={''}
                        text5={''}
                    />
                    <ResumeItem
                        year={'2016 - 2017'}
                        title={'ICSE 12 Science'}
                        subTitle={'Methodist School Dankuni'}
                        text={'- Indian Certificate of Secondary Education (Class X)'}
                        text1={'- with Computer Science, Maths, Physics, Chemistry, English as subjects'}
                        text2={'- Percentage: 90%'}
                        text3={''}
                        text4={''}
                        text5={''}
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
