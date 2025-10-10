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

function VideoCardThumbnail({ video, isHovered, isSeries, isLive, videoUrl }) {
    return (
        <>
            {isSeries && <Series/>}

            <ThumbnailContainer 
                $isHovered={isHovered} 
                $isSeries={isSeries}
            >
                <Thumbnail src={video.videoPicture} alt={video.title} />

                {/* 影片預覽：非合輯、非直播、且有 hover 時才顯示 */}
                {!isSeries && !isLive && isHovered && videoUrl && (
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
                    video.videoLength && <VideoLength>{video.videoLength}</VideoLength>
                )}
            </ThumbnailContainer>
        </>
    );
}

export default VideoCardThumbnail;