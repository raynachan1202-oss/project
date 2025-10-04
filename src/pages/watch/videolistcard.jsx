import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
  faEllipsisV,
  faClock,
  faListUl,
} from '@fortawesome/free-solid-svg-icons';

import {
  Thumbnail,
  VideoLength,
  LiveState,
  MoreIcon,
} from '@components/videocard.components/videocard.style.components';

const ListCardContainer = styled(Link)`
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

const ListThumbnailContainer = styled.div`
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

const IconOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  
`;

const OverlayButton = styled.button`
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

const ListVideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 0;

  @media (max-width: 1000px) {
    padding: 12px 30px 12px 0;
    position: relative;
  }
`;

const ListTitle = styled.p`
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

const ListChannelName = styled.p`
  font-size: 12px;
  color: #606060;
  margin-top: 3px;
`;


const ListVideoData = styled.p`
  font-size: 12px;
  color: #606060;
  margin-top: 3px;
`;

const ListMoreOptions = styled.div`
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


function VideoListCard({ video }) {
    const { isLive } = video; 
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ListCardContainer 
            to={`/watch/${video.id}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
            <ListThumbnailContainer>
                <Thumbnail src={video.videoPicture} alt={video.title} />
                {isLive ? (
                    <LiveState>直播</LiveState>
                ) : isHovered ? (
                    // 如果不是live，且hover就顯示
                    <IconOverlay>
                        <OverlayButton title="稍後觀看">
                            <FontAwesomeIcon icon={faClock} />
                        </OverlayButton>
                        <OverlayButton title="新增至播放清單">
                            <FontAwesomeIcon icon={faListUl} />
                        </OverlayButton>
                    </IconOverlay>
                ) : (
                    // 如果不是live，且沒有hover就顯示長度
                    video.videoLength && <VideoLength>{video.videoLength}</VideoLength>
                )}
            </ListThumbnailContainer>

            <ListVideoInfo>
                <ListTitle>{video.title}</ListTitle>
                
                <ListChannelName>{video.channelName}</ListChannelName>
                
                <ListVideoData>
                    觀看次數：{video.views} 次 • {video.uploadedTime}
                </ListVideoData>

                <ListMoreOptions>
                    <MoreIcon icon={faEllipsisV} />
                </ListMoreOptions>

            </ListVideoInfo>
        </ListCardContainer>
    );
}

export default VideoListCard;