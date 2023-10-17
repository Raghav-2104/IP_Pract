import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 0 1rem;
    }

    a {
        color: #fff;
        text-decoration: none;
        font-size:20px;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #2596be;
`;

const Logo = styled.h1`
    margin: 0;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>Career Counseling</Logo>
            <Nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/service">Services</Link>
                    </li>
                    <li>
                        <Link to="/book">Book an Appointment</Link>
                    </li>
                </ul>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;