import React, { useState } from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import ContactItem from '../Components/ContactItem';
import Chatbot from 'react-chatbot-kit';
import Particle from '../Components/Particle';

import ActionProvider from '../Chatbot/ActionProvider';
import MessageParser from '../Chatbot/MessageParser';
import config from '../Chatbot/config';
const dotenv = require('dotenv');
dotenv.config();




function ContactPage() {
  const [formData, setFormData] = useState({
   name: '',
   sub: '',
   text:''
 });

 const { name, sub, text } = formData;

 const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

 const onSubmit = e => {
   e.preventDefault();

 }
    return (
        <MainLayout>

            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled >
            <div className="particle-con particles">
                <Particle />
            </div>
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Get In Touch</h4>
                    </div>
                    <form  className="form" onSubmit={e => onSubmit(e)}>
                        <div className="form-field">
                            <label htmlFor="name"  >Enter your name*</label>
                            <input type="text" id="name"  />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"  >Enter your email*</label>
                            <input type="email" id="email" name="name" value={name} onChange={e => onChange(e)} required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject"  >Enter subject</label>
                            <input type="text" id="subject" name="sub" value={sub} onChange={e => onChange(e)} required/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Enter recommendation*</label>
                            <textarea name="textarea" id="textarea" cols="30" rows="10" name="text" value={text} onChange={e => onChange(e)} required></textarea>
                        </div>
                        <div className="form-field f-button">

                            <input type="submit" className="btn" />
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <header className="App-header">
                      <Chatbot
                        config={config}
                        actionProvider={ActionProvider}
                        messageParser={MessageParser}
                      />
                  </header>

                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
      .particles{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
      }
      .btn{
        background-color: var(--primary-color);
        padding: .8rem 2.5rem;
        color: black;
        cursor: pointer;
        display: inline-block;
        font-size: inherit;
        text-transform: uppercase;
        position: relative;
        transition: all .4s ease-in-out;
        &::after{
            content: "";
            position: absolute;
            width: 0;
            height: .2rem;
            transition: all .4s ease-in-out;
            left: 0;
            bottom: 0;
            opacity: .7;
        }
        &:hover::after{
            width: 100%;
            background-color: var(--white-color);
        }
      }

    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            padding: 40px;
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            width: 100%;
            padding: 0;
            .App-header {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;

              font-size: 0.5rem;
              color: rgb(98, 220, 236);
            }
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
                padding: 40px;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }


        }
    }
`;

export default ContactPage
