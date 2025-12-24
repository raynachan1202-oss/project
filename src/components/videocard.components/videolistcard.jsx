import React, { useState } from 'react';
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
} from '@/components/videocard.components/videocardthumbnail.style';

import {
  MoreIcon,
} from '@/components/videocard.components/menu.style';

import {
  ListCardContainer,
  ListThumbnailContainer,
  IconOverlay,
  OverlayButton,
  ListVideoInfo,
  ListTitle,
  ListChannelName,
  ListVideoData,
  ListMoreOptions,
} from '@components/videocard.components/videolistcard.style';

import { formatRelativeTime } from '@components/time'
import { formatViewCount } from '@/components/formatviewcount'



function VideoListCard({ video }) {
    const { isLive } = video; 
    const [isHovered, setIsHovered] = useState(false);

    const relativeTime = formatRelativeTime(video.uploadedTime);
    const formattedViews = formatViewCount(video.views);

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
                    觀看次數：{formattedViews} 次 • {relativeTime}
                </ListVideoData>

                <ListMoreOptions>
                    <MoreIcon icon={faEllipsisV} />
                </ListMoreOptions>

            </ListVideoInfo>
        </ListCardContainer>
    );
}

export default VideoListCard;