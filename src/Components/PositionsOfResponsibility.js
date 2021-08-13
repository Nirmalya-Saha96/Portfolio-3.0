import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ResumeItem from '../Components/ResumeItem';

function PositionOfResponsibility() {
    return (
        <ResumeStyled>
            <Title title={'Position of Responsibility'} span={'Position'} />
            <InnerLayout>
                <div className="resume-content">
                    <ResumeItem
                        year={'June21 - Present'}
                        title={'Web Developer'}
                        subTitle={'HITian Inside'}
                        text={'Media Activist at Haldia Institute of Technology, providing various information related to Workshops, Events, Fests and all other things occurring inside the institute premises.'}
                    />
                    <ResumeItem
                        year={'July21 - Present'}
                        title={'Web Developer'}
                        subTitle={'HIT Needs'}
                        text={'Official social working club of HIT, organises funds for poor children'}
                    />
                    <ResumeItem
                        year={'June21 - Present'}
                        title={'Web Developer'}
                        subTitle={'Taru Guardians'}
                        text={'Taruguardians is devoted to the protection, conservation, and betterment of Mother Nature and Humanity. Our sole purpose is to create a greener and better world for present and future generations.'}
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
