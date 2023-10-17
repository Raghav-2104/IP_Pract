import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
    text-align: center;
`;

const Subtitle = styled.p`
    font-size: 18px;
    text-align: center;
`;

const LatestArticles = styled.h2`
    font-size: 24px;
    margin-top: 40px;
`;

const ArticleList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ArticleListItem = styled.li`
    margin-bottom: 20px;
`;

const ArticleLink = styled(Link)`
    font-size: 20px;
    color: #333;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const Home = () => {
    return (
        <Container>
            <Title>Welcome to the Career Counseling Blog</Title>
            <Subtitle>Here you will find helpful articles and resources to guide you in your career journey.</Subtitle>
            <img src='https://bcdn.mindler.com/bloglive/wp-content/uploads/2021/06/15133900/5-professional-challenges-faced-by-career-counsellors_blog-.png' alt='Image' height={'250px'} width={'250px'} style={{ display: 'block', margin: 'auto' }}></img>
            <LatestArticles>Latest Articles</LatestArticles>
            <ArticleList>
                <ArticleListItem>
                    <ArticleLink to="/articles/1">How to Ace Your Next Job Interview</ArticleLink>
                </ArticleListItem>
                <ArticleListItem>
                    <ArticleLink to="/articles/2">5 Tips for Writing a Winning Resume</ArticleLink>
                </ArticleListItem>
                <ArticleListItem>
                    <ArticleLink to="/articles/3">Navigating a Career Change</ArticleLink>
                </ArticleListItem>
            </ArticleList>
        </Container>
    );
};

export default Home;
