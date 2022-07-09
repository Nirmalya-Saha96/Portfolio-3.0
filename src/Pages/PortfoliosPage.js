import React, { useState } from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import portfolios from '../data/portfolios';
import Menu from '../Components/Menu';
import Button from '../Components/Button';
import Particle from '../Components/Particle';
import ScrollToTop from 'react-scroll-up';
import { KeyboardArrowUpRounded } from '@material-ui/icons';

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

function PortfoliosPage() {
    const [menuItem, setMenuItems] = useState(portfolios);
    const button = allButtons;

    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <MainLayout>
        <HomePageStyled>
            <div className="particle-con particles">
                <Particle />
            </div>
            <ScrollToTop showUnder={250}>
                    <KeyboardArrowUpRounded style={{width: "45px", border: "solid", borderRadius: "0.5px"}} />
            </ScrollToTop>
            <Title title={'Projects'} span={'projects'} />
            <InnerLayout>

                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </HomePageStyled>
        </MainLayout>
    )
}

const HomePageStyled = styled.header`
        .particles{
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
      }
    `;

export default PortfoliosPage
