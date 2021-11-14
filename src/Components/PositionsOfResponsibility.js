import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ResumeItem from '../Components/ResumeItem';

function PositionOfResponsibility() {
    return (
        <ResumeStyled>
            <Title title={'Position of Responsibility'} span={''} />
            <InnerLayout>
                <div className="resume-content">
                    <ResumeItem
                        year={'June21 - Present'}
                        title={'Web Developer'}
                        subTitle={'HITian Inside'}
                        text={'- Media Activist at Haldia Institute of Technology, '}
                        text1={'- providing various information related to Workshops, Events, Fests and all other things occurring inside the institute premises.'}
                        text2={'- Designed and Developed the WEBSITE to collect media across the college students'}
                        text3={'- and to manage online events, Using MERN-stack'}
                        text4={''}
                        text5={''}
                    />
                    <ResumeItem
                        year={'June21 - Present'}
                        title={'Web Developer'}
                        subTitle={'Taru Guardians'}
                        text={'- Taruguardians is devoted to the protection, conservation, and betterment of Mother Nature and Humanity. '}
                        text1={'- Our sole purpose is to create a greener and better world for present and future generations.'}
                        text2={'- Designed and Developed the WEBSITE to spread awarness'}
                        text3={'- Using MERN-stack'}
                        text4={''}
                        text5={''}
                    />
                    <ResumeItem
                        year={'July21 - Present'}
                        title={'Web Developer'}
                        subTitle={'HIT Needs'}
                        text={'Official social working club of HIT, organises funds for poor children'}
                        text1={''}
                        text2={''}
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
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default PositionOfResponsibility;
