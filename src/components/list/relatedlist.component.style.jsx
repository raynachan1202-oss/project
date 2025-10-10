import styled from 'styled-components';

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    `;

export const TabsContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

export const Tab = styled.button`
    border-radius: 8px;
    background: none;
    border: none;
    padding: 8px 12px;
    margin-right: 8px;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;

    background-color: ${props => (props.$active ? '#000' : '#f2f2f2')};
    color: ${props => (props.$active ? '#ffffff' : '#000000')};
  
`;

export const VideoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px; 

    @media (max-width: 1000px){
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 16px;
    }
`;
