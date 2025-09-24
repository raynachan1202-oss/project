import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

export const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
    background-color: #e5e5e5;
  }
`;
export const MoreIcon = styled(FontAwesomeIcon)`
  width: 19px;
  height: 19px;
  cursor: pointer;
  
`;

export const ChannelUser = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;

  object-fit: cover;
  cursor: pointer;
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px 0 0;
  
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