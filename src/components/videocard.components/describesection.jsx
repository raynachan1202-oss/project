import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faThumbsDown,
    faShare,
    faDownload,
    faEllipsis,
} from '@fortawesome/free-solid-svg-icons';

import {
    SectionContainer,
    Title,
    MetadataRow,
    ChannelInfo,
    ChannelPicture,
    ChannelText,
    ChannelName,
    SubscriberCount,
    SubscribeButton,
    Buttons,
    LikeDislikeGroup,
    ActionButton,
    LikeButton,
    MoreOptions,
    DescriptionContainer,
    MetadataText,
    DescriptionText,
    ShowMoreButton,
    
} from '@components/videocard.components/describesection.style';

import { formatRelativeTime } from '@components/time'
import { formatViewCount } from '@/components/formatviewcount'


const DescribeSection = ({ video }) => {    

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const relativeTime = formatRelativeTime(video.uploadedTime);
    const formattedViews = formatViewCount(video.views);

    const formattedSubscriberCount = formatViewCount(video.subscriberCount);
    

    return (
        <SectionContainer>
            <Title>{video.title}</Title>
            
            <MetadataRow>
                <ChannelInfo>
                    <ChannelPicture src={video.channelUserPicture} alt={video.channelName} />
                    <ChannelText>
                        <ChannelName>{video.channelName}</ChannelName>
                        <SubscriberCount>{formattedSubscriberCount}位訂閱者</SubscriberCount> 
                    </ChannelText>
                    <SubscribeButton>訂閱</SubscribeButton>
                </ChannelInfo>

                <Buttons>

                    <LikeDislikeGroup>
                        <LikeButton $isGrouped>
                            <FontAwesomeIcon icon={faThumbsUp} /> {video.likeCount}
                        </LikeButton>
                        <ActionButton $isGrouped>
                            <FontAwesomeIcon icon={faThumbsDown} /> 
                        </ActionButton>
                    </LikeDislikeGroup>
                
                    <ActionButton>
                        <FontAwesomeIcon icon={faShare} /> 分享
                    </ActionButton>
                    <ActionButton>
                        <FontAwesomeIcon icon={faDownload} /> 下載
                    </ActionButton>
                    <MoreOptions>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </MoreOptions>
                </Buttons>
            </MetadataRow>

            <DescriptionContainer>
                <MetadataText>
                    觀看次數: {formattedViews}次 • {relativeTime}
                </MetadataText>

                <DescriptionText $isExpanded={isExpanded}>
                    {video.description}
                </DescriptionText>
                

                <ShowMoreButton onClick={toggleDescription}>
                    {isExpanded ? '只顯示部分內容' : '...更多內容'}
                </ShowMoreButton>

            </DescriptionContainer>
        </SectionContainer>
    );
};

export default DescribeSection;