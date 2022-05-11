import React from 'react'
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>
                GET ALL THERE
            </SignUp>

            <Description>
            Enjoy the big screen experience on your TV, or watch on your tablet, laptop, phone and more. You can watch an ever-growing selection of titles in 4K. Plus, you can stream on 4 screens at once, so everyone’s happy.
            </Description>

            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
    </Container>
  )
}

export default Login;

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: '';
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-cover: cover;
        background-repeat: no-repeat;
        z-index: -1;
        opacity: 0.7;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`;

const CTALogoOne = styled.img`

`;


const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-top: 12px;

    &:hover{
        background: #0483ee;
    }
`;

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`;

const CTALogoTwo = styled.img`
    width: 90%;
`;