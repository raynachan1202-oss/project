import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33.33% - (16px * 2 / 3));

  @media (max-width: 931px) {
    width: calc(50% - (16px / 2));
  }

  @media (max-width: 552px) {
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  ${CardContainer.componentStyle.rules}; //繼承樣式寫法
  text-decoration: none;
  color: inherit;

  position: relative; 
`;

export const VideoPreview = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  cursor: pointer;
  border-radius: ${({ $isHovered, $isSeries}) => ($isSeries ? '8px' : ($isHovered ? '0px' : '8px'))};
  overflow: hidden; 
`;
export const Series = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 16 / 9;

  &::before {  
    content:'';
    display: block;
    position: absolute;

    background-color: #b0adad;
    border: solid 1px #fff;

    transform: scale(92%) translateY(-22px); 
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  /* 第二層堆疊：::after */
  &::after{
    content: '';
    display: block;
    position: absolute;

    background-color: #6b6868;
    border: solid 1px #fff;

    transform: scale(96%) translateY(-11px);
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const SeriesState = styled.span`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.6); 
  color: #fff;
  padding: 2px 4px; 
  border-radius: 4px; 
  font-size: 12px;
  
`;

export const VideoLength = styled.span`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 12px;
`;

export const VideoDetails = styled.div`
  display: flex;
  margin-top: 12px;
  position: relative;

`;

export const MoreOptions = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
  &:active {
    background-color: #cccccc;
    border: solid 1px #b9b8b8;
    transform: scale(0.95);
  }
`;

export const MoreIcon = styled(FontAwesomeIcon)`
  width: 19px;
  height: 19px;
  cursor: pointer;
  
`;
export const ChannelUserContainer = styled.div`
  position: relative;
  width: 40px; 
  height: 40px;
  aspect-ratio: 1 / 1;
  margin-right: 12px;
  cursor: pointer;
  
  /* 紅色外框 */
  ${props => props.$isLive && `
    border: 2px solid #e1002d;
    border-radius: 50%;
  `}
`;
export const ChannelUser = styled.img`
  width: 100%; 
  height: 100%; 
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  
  border: 2px solid #fff;
`;
export const ChannelLiveState = styled.div`
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%); 
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: auto;
  padding: 0px 3px;
  
  background-color: #e1002d;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  border-radius: 4px;
  white-space: nowrap;
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px 25px 0;
  
  `;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ChannelName = styled.p`
  font-size: 14px;
  color: #606060;
  margin: 4px 0 0;
`;

export const VideoData = styled.p`
  font-size: 14px;
  color: #606060;
  margin: 2px 0 0;
`;

export const LiveState = styled.span`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: #e1002d; 
  color: #fff;
  padding: 3px 6px; 
  border-radius: 4px; 
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  z-index: 10;
  
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const MenuContainer = styled.div`
  width: 250px; 
  position: absolute;
  top: 30px;
  right: -10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  z-index: 100;
  overflow: hidden;
`;
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 14px;
  color: #030303;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    background-color: #f2f2f2;
  }

  & > svg {
    margin-right: 16px;
    width: 18px;
    height: 18px;
    color: #000000;
  }
`;
