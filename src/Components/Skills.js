import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>

                <Title title={'Skills'} span={'skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={'JAVA'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar
                            title={'C++'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar
                            title={'REACT JS'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar
                            title={'REDUX'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar
                            title={'NODE JS'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar
                            title={'EXPRESS'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar
                            title={'MONGODB'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar
                            title={'POSTGRESQL'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar
                            title={'SQLITE'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar
                            title={'KOTLIN'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar
                            title={'XML'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar
                            title={'Firebase'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar
                            title={'Cryptography'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar
                            title={'JAVASCRIPT'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar
                            title={'SOCKET.IO'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar
                            title={'GIT'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar
                            title={'Rest-Api'}
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
            padding: 40px;
        }
    }
`;

export default Skills;
