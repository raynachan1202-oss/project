import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faTowerBroadcast,
  faCirclePlay,
} from '@fortawesome/free-solid-svg-icons';

import {
  ThumbnailContainer,
  Thumbnail,
  VideoLength,
  LiveState,
  VideoPreview,
  Series,
  SeriesState,
} from '@components/videocard.components/videocard.style.components'

function VideoCardThumbnail({ video, isHovered, isSeries, isLive, videoUrl, countdownTime, formatTime }) {

    const displayTime = isHovered && !isLive && !isSeries && countdownTime >= 0
        ? formatTime(countdownTime)
        : video.videoLength;
    const showPreview = !isSeries && isHovered && videoUrl;
    
    return (
        <>
            {isSeries && <Series/>}

            <ThumbnailContainer 
                $isHovered={isHovered} 
                $isSeries={isSeries}
            >
                <Thumbnail src={video.videoPicture} alt={video.title} />

                {/* 影片預覽 */}
                {showPreview && (
                    <VideoPreview
                        src={videoUrl} 
                        autoPlay 
                        muted
                        loop 
                    />
                )}
                
                {/* 右下角標籤 */}
                {isLive ? (
                    <LiveState>
                        <FontAwesomeIcon icon={faTowerBroadcast} />
                        {isHovered ? '直播中' : '直播'} 
                    </LiveState>
                ) : isSeries ? ( 
                    isHovered ? (
                        video.videoLength && <VideoLength $isSeriesHover={true}>{video.videoLength}</VideoLength>
                    ) : (
                        <SeriesState>
                            <FontAwesomeIcon icon={faCirclePlay} /> 合輯
                        </SeriesState>
                    )
                ) : ( 
                    displayTime && <VideoLength>{displayTime}</VideoLength>
                )}
            </ThumbnailContainer>
        </>
    );
}

export default VideoCardThumbnail;