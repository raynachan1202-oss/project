import { React, useState } from 'react';
import {
  StyledLink,
  VideoDetails,
  ChannelUser,
  VideoInfo,
  Title,
  ChannelName,
  VideoData,
  ChannelLiveState,
  ChannelUserContainer,
} from '@components/videocard.components/videocard.style.components';

import VideoCardThumbnail from '@/components/videocard.components/videocardthumbnail.component'
import VideoCardMenu from '@components/videocard.components/menu.component'

function VideoCard({ video }) {
  const { isLive, videoUrl, isSeries} = video; 
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const handleMenuToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsMenuOpen(prev => !prev);
  };
  
  const handleLinkClick = (e) => {
    if (isMenuOpen) {
      e.preventDefault();
      return; 
    }
  };

  return (
    <StyledLink 
      to={`/watch/${video.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleLinkClick} 
    >
      <VideoCardThumbnail 
        video={video} 
        isHovered={isHovered} 
        isSeries={isSeries} 
        isLive={isLive} 
        videoUrl={videoUrl}
      />

      <VideoDetails>
        {/* 如果不是合輯會顯示頭像和 */}
        {!isSeries && (
          <ChannelUserContainer $isLive={isLive}>
            <ChannelUser src={video.channelUserPicture} alt={video.channelName}/>

            {/* 如果是直播， 會有直播標籤 */}
            {isLive && (<ChannelLiveState>直播</ChannelLiveState>)}
          </ChannelUserContainer>
        )}

        <VideoInfo $isSeries={isSeries}> 
          <Title>
            {isSeries ? `合輯-${video.title}` : video.title}
          </Title>
          
          {isSeries ? (
            <>
              <ChannelName $isSeries={isSeries}>{video.seriesName}</ChannelName>
              <VideoData>{video.uploadedTime}</VideoData>
            </>
          ) : (
            <>
              <ChannelName> {video.channelName}</ChannelName>
              <VideoData>觀看次數：{video.views} 次 • {video.uploadedTime}</VideoData>
            </>
          )}

          <VideoCardMenu
            isMenuOpen={isMenuOpen}
            handleMenuToggle={handleMenuToggle}
            handleMenuClose={() => setIsMenuOpen(false)}
          />
          
        </VideoInfo>
      </VideoDetails>
      
    </StyledLink>
  );
}

export default VideoCard;