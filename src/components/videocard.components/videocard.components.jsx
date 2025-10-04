import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faEllipsisV,
  faTowerBroadcast,
} from '@fortawesome/free-solid-svg-icons';

import {
  StyledLink,
  ThumbnailContainer,
  Thumbnail,
  VideoLength,
  VideoDetails,
  MoreOptions,
  MoreIcon,
  ChannelUser,
  VideoInfo,
  Title,
  ChannelName,
  VideoData,
  ChannelLiveState,
  ChannelUserContainer,
  LiveState,
  VideoPreview
} from '@components/videocard.components/videocard.style.components';

function VideoCard({ video }) {
  const { isLive, videoUrl } = video; 
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledLink 
      to={`/watch/${video.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <ThumbnailContainer>
        <Thumbnail src={video.videoPicture} alt={video.title} />

        {/* isHovered=true 且有videoUrl就可以預覽 */}
        {isHovered && videoUrl && (
            <VideoPreview
                src={videoUrl} 
                autoPlay 
                muted
                loop 
            />
        )}
        
        {/* 直播中情況 */}
        {isLive ? (
            <LiveState>
                <FontAwesomeIcon icon={faTowerBroadcast} />
                {isHovered ? '直播中' : '直播'} 
            </LiveState>
        ) : (
            video.videoLength && <VideoLength>{video.videoLength}</VideoLength>
        )}
        
      </ThumbnailContainer>

      <VideoDetails>
        <ChannelUserContainer $isLive={isLive}>
          <ChannelUser src={video.channelUserPicture} alt={video.channelName}/>
          
          {isLive && (
              <ChannelLiveState>直播</ChannelLiveState>
          )}
        </ChannelUserContainer>

        <VideoInfo>
          <Title> {video.title}</Title>
          <ChannelName> {video.channelName}</ChannelName>
          <VideoData>
            觀看次數：{video.views} 次 • {video.uploadedTime}
          </VideoData>

          <MoreOptions>
            <MoreIcon icon={faEllipsisV} />
          </MoreOptions>

        </VideoInfo>
      </VideoDetails>
      
    </StyledLink>
  );
}

export default VideoCard;