import React from 'react'
import styled from 'styled-components';
import resume from '../img/me.jpg';
import PrimaryButton from './PrimaryButton';
import { Wave1 } from '../data/examples.js';
import Fade from 'react-reveal/Fade';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume"/>
            </div>
            <div className="right-content">
                <h4>I am <span> <Wave1 /></span></h4>
                <Fade top>
                  <p className="paragraph">
                  Second year student of HALDIA INSTITUTE OF TECHNOLOGY ||CSE|| with 9.97 CGPA 1st & 9.62 CGPA 2nd Year
                  Providing Service in Full Stack BlackChain Development and Android Development ( with experience of managing 7+ real world projects).
                  Industry Experience in FrontEnd Developer Intern @Delta-V Robotics Pvt Ltd ||
                  Full Stack Developer Intern @NamaSYS || 
                  Web Development and Designing Intern @The Sparks Foundation || 
                  Web Developer Intern @LetsGrowMore || 
                  Web Developer Intern @SSB Pvt Ltd || 
                  Campus Manager @GeeksForGeeks || 
                  Core team member of taru guardians || 
                  web developer at Hitian Inside and Hit needs || 
                  ISP @ Internshala
                  </p>
                </Fade>
                <Fade bottom>
                <div className="about-info">
                    <div className="info-title">
                        <p>First Name</p>
                        <p>Last Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Location</p>
                        <p>Role</p>
                    </div>
                    <div className="info">
                        <p>: Nirmalya</p>
                        <p>: Saha</p>
                        <p>: 21</p>
                        <p>: Indian </p>
                        <p>: West Bengal</p>
                        <p>: Full Stack BlockChain & Android Developer</p>
                    </div>
                </div>
                </Fade>
                <PrimaryButton title={'Download Cv'} link={'https://docs.google.com/document/d/10LX1nVAK4ELYrUCBrn1AzD4eQrYcMuAnk3UM6-uCxz0/edit?usp=sharing'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        padding: 40px;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 1.5rem;
            }
        }
        .paragraph{
            padding: 1rem 0rem;
            @media screen and (max-width: 496px){
                font-size: 0.8rem;
            }
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
