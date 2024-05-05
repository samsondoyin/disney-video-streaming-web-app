import styled from "styled-components";
const Login = (props) =>{
    return(
            <Container>
                <Content>
                    <CTA>
                        <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                        <SignUp>Get All Here</SignUp>
                        <Description>Get Premier Access to Raya and the last Drag with a Disney+ Subscription. As of 7/01/2023, and the Disnet Bundle will increase by $1</Description>
                        <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
                    </CTA>
                    <BgImage />
                </Content>
            </Container>
    );
}


const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition-opacity: 0.2s;
    width: 100%;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-width: 1px;
    display: block;
    width: 100%;

    @media(max-width: 768px){
        width: 50%;
    }
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #fafafa;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 19px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover{
        background-color: #0483ee;
    }

    @media(max-width: 768px){
        width: 50%;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 34px;
    line-height: 1.5;
    letter-spacing: 1.5px;

    @media(max-width: 768px){
        width: 50%;
    }
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: block;
    vertical-align: bottom;
    width: 100%;

    @media(max-width: 768px){
        width: 50%;
        margin-top: -20px;
    }
`;
export default Login;