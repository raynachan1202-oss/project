import React from 'react';

import {
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

import {
  CardContainer,
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
} from '@components/videocard.components/videocard.style.components';

function VideoCard({ video }) {
  return (
    <CardContainer>
      <ThumbnailContainer>
        <Thumbnail src={video.videoPicture} alt={video.title} />
        {video.videoLength && <VideoLength>{video.videoLength}</VideoLength>}
      </ThumbnailContainer>

      <VideoDetails>
        <ChannelUser src={video.channelUserPicture} alt={video.channelName} />

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
      
    </CardContainer>
  );
}

export default VideoCard;