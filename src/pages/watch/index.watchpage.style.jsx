import styled from 'styled-components';

export const WatchPageLayout = styled.div`
  display: flex;
  padding: 24px 20px 0 30px;

  @media (max-width: 1000px) {
    flex-direction: column; 
  }
`;

export const MainContent = styled.div`
  flex: 2.4;
  margin-right: 24px;

  @media (max-width: 1000px) {
  margin-right: 0px;

  }
`;

export const RelatedContent = styled.div`
  flex: 1;

  @media (max-width: 1000px) {
    flex: none; 
    width: 100%;
    margin-top: 24px;
  }
`;
export const WatchSection = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;


  @media (max-width: 1000px) {
    width: 100vw; 
    margin-left: -30px; 
  }
`;
export const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const WatchSectionTitle = styled.h2`
  color: white;
  padding: 10px;
  margin: 0; 
`;
