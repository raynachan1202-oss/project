import { React, useState, useEffect, useRef } from 'react';
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

import { formatRelativeTime } from '@components/time'
import { formatViewCount } from '@components/viewcount'


//時間倒數部分
const formatTime = (totalSeconds) => {
  if (typeof totalSeconds !== 'number' || totalSeconds <= 0) return '0:00';
  
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  const formattedSeconds = String(seconds).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  if (hours > 0) {
    return `${hours}:${formattedMinutes}:${formattedSeconds}`;
  }
  return `${minutes}:${formattedSeconds}`;
};



function VideoCard({ video }) {
  const { isLive, videoUrl, isSeries, videoLengthInSeconds: length = 0 } = video; 
  const videoLengthInSeconds = Number(length);

  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timerRef = useRef(null);

  const [countdown, setCountdown] = useState(videoLengthInSeconds); 

  const relativeTime = formatRelativeTime(video.uploadedTime);
  const formattedViews = formatViewCount(video.views);
  
  const startCountdown = () => {
    setIsHovered(true);
    setCountdown(videoLengthInSeconds);
    
    // 如果是直播、合輯、計時器已運行或長度為 0，則不啟動
    if (isLive || isSeries || timerRef.current || videoLengthInSeconds === 0) return;

    timerRef.current = setInterval(() => {
        setCountdown(prev => {
            if (prev > 1) { 
                return prev - 1;
            }
            clearInterval(timerRef.current);
            timerRef.current = null;
            return 0; 
        });
    }, 1000); 
  };
  
  const stopCountdown = () => {
    setIsHovered(false);
    if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
    };
  }, []);
 
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
      onMouseEnter={startCountdown}
      onMouseLeave={stopCountdown}
      onClick={handleLinkClick} 
    >
      <VideoCardThumbnail 
        video={video} 
        isHovered={isHovered} 
        isSeries={isSeries} 
        isLive={isLive} 
        videoUrl={videoUrl}
        countdownTime={countdown}
        formatTime={formatTime}
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
              <VideoData>{relativeTime}</VideoData>
            </>
          ) : (
            <>
              <ChannelName> {video.channelName}</ChannelName>
              <VideoData>觀看次數：{formattedViews} 次 • {relativeTime}</VideoData>
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