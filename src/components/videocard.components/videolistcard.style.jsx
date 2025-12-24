import styled from 'styled-components';
import { Link } from 'react-router-dom';

export  const ListCardContainer = styled(Link)`
  display: flex;
  width: 100%;
  padding: 4px 0;
  text-decoration: none;
  color: #0f0f0f;
  cursor: pointer;
  position: relative;

  @media (max-width: 1000px){
    width: calc(33.333% - (16px * 2 / 3)); 
    flex-direction: column;
    padding: 0;
  }

  @media (max-width: 920px){
    width: calc(50% - (16px / 2));
    flex-direction: column;
    padding: 0;
  }

  @media (max-width: 620px) {
    width: 100%;
    flex-direction: column;
    padding: 0;
  }
`;

export const ListThumbnailContainer = styled.div`
  position: relative;
  width: 168px; 
  aspect-ratio: 16 / 9;
  flex-shrink: 0;
  margin-right: 8px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const IconOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  
`;

export const OverlayButton = styled.button`
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;

  svg {
    font-size: 18px;
  }
`;

export const ListVideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 0;

  @media (max-width: 1000px) {
    padding: 12px 30px 12px 0;
    position: relative;
  }
`;

export const ListTitle = styled.p`
  font-size: 14px;
  font-weight: 500; 
  line-height: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0;
  color: #0f0f0f;
`;

export const ListChannelName = styled.p`
  font-size: 12px;
  color: #606060;
  margin-top: 3px;
`;


export const ListVideoData = styled.p`
  font-size: 12px;
  color: #606060;
  margin-top: 3px;
`;

export const ListMoreOptions = styled.div`
  position: absolute;
  top: -5px;
  right: -15px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }

  @media (max-width: 1000px) {
    top: 4px;
    right: -8px;
  }
`;