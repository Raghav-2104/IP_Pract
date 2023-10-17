import React from 'react';

import styled from 'styled-components';

const ServicesContainer = styled.div`
    text-align: center;
`;

const ServicesTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 2rem;
`;

const ServicesList = styled.ul`
    list-style: none;
    padding: 0;
`;

const ServicesListItem = styled.li`
    font-size: 1.2rem;
    margin-bottom: 1rem;
`;

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesTitle>Our Services</ServicesTitle>
            <ul>
                <li><ServicesListItem>Time Management<p>Time management is important to help you prioritise better and increase your productivity. Good time management also makes you more intentional about how to invest your time. Managing your time helps you work smarter, not harder so you can get more done in less time and capture bigger opportunities.</p></ServicesListItem></li>
                <li><ServicesListItem>Choose Profession <p>Career is a very important thing in one’s life. Whatever career path you choose to follow, it will impact your life greatly. Your career will define your status in a society in addition to your lifestyle. In other words, your career will determine your social circle and relationships.</p></ServicesListItem></li>
                <li><ServicesListItem>Advance Your Career <p>A career goals essay refers to a piece of writing that explains which career path you wish to pursue and what you want to achieve. In the essay, you’ll write about your career aspirations, relevant achievements that put you in a better position to fulfill your goals and ways your ambitions can help you go even further. Depending on the purpose of the essay, you may be required to write about your short-term or long-term career goals.</p> </ServicesListItem></li>
            </ul>
        </ServicesContainer>
    );
};

export default Services;
