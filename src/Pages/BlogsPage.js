import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import blogs from '../data/blogs';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Particle from '../Components/Particle';
import Zoom from 'react-reveal/Zoom';

function BlogsPage() {
    return (
        <MainLayout>
            <BlogsStyled>
            <div className="particle-con particles">
                <Particle />
            </div>
            <Title title={'Achievements'} span={'Achievements'} />
                <InnerLayout className={'blog'}>
                    {
                        blogs.map((blog)=>{
                            return <div key={blog.id} className={'blog-item'}>
                              <Zoom>
                                  <div className="image">
                                      <img src={blog.image} alt=""/>
                                  </div>
                                </Zoom>
                                <div className="title">
                                    <a href={blog.link}>
                                        {blog.title}
                                    </a>
                                </div>
                            </div>
                        })
                    }
                </InnerLayout>
            </BlogsStyled>
        </MainLayout>
    )
}

const BlogsStyled = styled.div`
    .particles{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
    .blog{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
            padding: 40px;
        }
        .blog-item{
            background-color: var(--background-dark-grey);
            padding: 1rem 1rem;
        }
        .image{
            width: 100%;
            overflow: hidden;
            padding-bottom: .5rem;
            img{
                width: 100%;
                height: 90%;
                object-fit: cover;
                transition: all .4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: rotate(3deg) scale(1.1);
                }
            }
        }

        .title{
            a{
                font-size: 1.8rem;
                padding: 2rem 0;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
            }
        }
    }
    .blog-item:hover{
      transition: all .4s ease-in-out;
      background-color: lightgrey;
      color: black;
      .title{
        color: black;
      }
    }
`;

export default BlogsPage
