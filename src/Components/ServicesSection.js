import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Profecient'} span={'profecient'} />
                <div className="services">
                    <ServiceCard
                        image={design}
                        title={'Full Stack Development'}
                        paragraph={'1 year of experience as a Full Stack Developer'}
                    />
                    <div className="mid-card">
                        <ServiceCard
                            image={intelligence}
                            title={'Android Development'}
                            paragraph={'Experienced in publishing kotlin Apps'}
                        />
                    </div>
                    <ServiceCard
                        image={gamedev}
                        title={'Coder'}
                        paragraph={'Compitive Coder with profiles in GFG and CodeChef'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
            padding: 40px;
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
            padding: 40px;
        }

    }
`;

export default ServicesSection;
