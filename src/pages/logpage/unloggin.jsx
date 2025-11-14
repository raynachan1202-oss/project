import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
    display: flex;
    padding: 15px 12px;
    gap: 16px;
    justify-content: center;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 13px 150px;

    border-radius: 17px;
    box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);

`;
const Title = styled.p`
    font-size: 28px;
    margin-bottom: 10px;
    font-weight: 900;
`;
const Text = styled.p`
    font-size: 17px;
    margin-bottom: 10px;
    color: #606060;
`;

const UnLoggin = ({ onLoginClick }) => {
  return (
    <TextContainer>
        <Container>
            <Title>
                輸入搜尋字詞，開始使用 YouTube
            </Title>
            <Text>
                開始觀看影片，我們就能在動態中顯示你感興趣的內容。
            </Text>
        </Container>
    </TextContainer>
  );
};

export default UnLoggin;