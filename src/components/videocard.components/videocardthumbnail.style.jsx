import styled from 'styled-components';


export const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  cursor: pointer;
  border-radius: ${({ $isHovered, $isSeries}) => ($isSeries ? '8px' : ($isHovered ? '0px' : '8px'))};
  overflow: hidden; 
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

export const VideoPreview = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
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
