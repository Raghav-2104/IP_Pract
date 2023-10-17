import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #be4d25;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height:50px;
`;

const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

const ContactLink = styled.a`
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const Heading=styled.p`
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    
`;
const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <FooterContainer>
            <ContactContainer>
                <ContactLink>Mobile Number: 9987380617</ContactLink>
                <Heading>&copy; {year} Career Counseling</Heading>
                <ContactLink href="mailto:mundhararaghav16@gmail.com">Email: mundhararaghav16@gmail.com</ContactLink>
            </ContactContainer>
        </FooterContainer>
    );
};

export default Footer;
