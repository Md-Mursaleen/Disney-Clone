import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="CTA Logo 1" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="CTA Logo 2" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  margin-bottom: 10vw;
  min-height: 100vh;
  padding: 80px 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  width: 100%;
  display: block;
`;

const SignUp = styled.a`
  padding: 16.5px 0;
  margin-bottom: 12px;
  width: 100%;
  background-color: #0063e5;
  font-size: 18px;
  font-weight: bold;
  color: #f9f9f9;
  border: 1px solid transparent;
  border-radius: 4px;
  letter-spacing: 1.5px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  margin: 0 0 24px;
  font-size: 11px;
  color: hsla(0, 0%, 95.3%, 1);
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  width: 100%;
  display: inline-block;
  vertical-align: bottom;
`;

export default Login;
