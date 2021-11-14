import React, { useEffect } from 'react'
import styled from 'styled-components';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';
import { init } from 'ityped';
import { Wave1 } from '../data/examples.js';


function HomePage() {

    useEffect(() => {
        const myElement = document.querySelector('#myElement')
      	init(myElement, { showCursor: false, strings: ['Full Stack Developer', 'Android Developer ✨', '< Coder >' ] });
    },[]);
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h2> <Wave1 /> </h2>
                <h3>Hi, I'm <span id='myElement'></span></h3>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/nirmalya-saha-625993201/" rel="noreferrer" target="_blank" className="icon i-youtube">
                        <LinkedIcon />
                    </a>
                    <a href="https://github.com/Nirmalya-Saha96" rel="noreferrer" target="_blank" className="icon i-github">
                        <GithubIcon />
                    </a>
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

export default HomePage;
