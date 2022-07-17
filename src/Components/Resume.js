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
                    year={'July22-Present'}
                    title={'FrontEnd Developer Intern'}
                    subTitle={'Delta-V Robotics Pvt Ltd'}
                    text={'- Designed complex satellite simulation interface in a Konva Minimap & zoom controls'}
                    text1={' with  seamless functionality using react, redux'}
                    text2={'- Programmed functionalities include sharing & custom linking simulations '}
                    text3={'- Staged large responses in redux, increasing efficiency'}
                    text4={''}
                    text5={''}
                />
                <ResumeItem
                    year={'March22-June22'}
                    title={'Full Stack Developer Intern'}
                    subTitle={'NamaSYS'}
                    text={'- Migrated static response to json with it’s FrontEnd integrations increasing efficiency by 45%'}
                    text1={'- Admin Panel to control core functionalities with create upload delete and custom update '}
                    text2={'- engines, subscriptions, user managements, categories, UI-fonts & colors'}
                    text3={'- Improving user retention & business logic by 12% by developing recurring subscription using Stripe'}
                    text4={' Payments and custom search, errors & alerts managements with 30+ Apis tests in postman-cli and newman'}
                    text5={'- Designed Json Previewer with RealTime editor & image uploading in IPFS-network with base64 encoding & 7+ Html Jinja Email Templates'}
                />
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
                        year={'June21 - May22'}
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
                        text1={'- Worked in React.Js & Redux.Js frameworks, and Node.JS as a back-end to store student results in MongoDB'}
                        text2={''}
                        text3={''}
                        text4={''}
                        text5={''}
                    />
                    <ResumeItem
                        year={'Sep21 - Oct21'}
                        title={'Web Developer & Design Intern'}
                        subTitle={'The Sparks Foundation'}
                        text={'- Developed payment gateway integration system using stripe-api'}
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
                        text={'- Designed the business page and client records page with React.JS and Redux.Js as the main framework with custom filters and pagination '}
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
                        text1={'- CGPA: 9.97/10 in 1st year and 9.62 in 2nd Year'}
                        text2={''}
                        text3={''}
                        text4={''}
                        text5={''}
                    />
                    <ResumeItem
                        year={'2018 - 2020'}
                        title={'CBSE 12 Science'}
                        subTitle={'Sudhir Memorial'}
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
