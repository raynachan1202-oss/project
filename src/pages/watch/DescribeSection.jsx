import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faThumbsDown,
    faShare,
    faDownload,
    faEllipsis,
} from '@fortawesome/free-solid-svg-icons';

const SectionContainer = styled.div`
    width: 100%;
    padding-top: 20px;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
`;

const MetadataRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #e5e5e5; 
    padding-bottom: 16px;
`;

const ChannelInfo = styled.div`
    display: flex;
    align-items: center;
`;

const ChannelPicture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
`;

const ChannelText = styled.div`
    display: flex;
    flex-direction: column;
`;

const ChannelName = styled.p`
    font-weight: 500;
    font-size: 16px;
    margin: 0;
`;

const SubscriberCount = styled.p`
    font-size: 12px;
    color: #606060;
    margin: 0;
`;

const SubscribeButton = styled.button`
    background-color: #000;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 20px;
    font-weight: 600;
    margin-left: 20px;
    cursor: pointer;
    height: 36px;
    white-space: nowrap; 
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
const LikeDislikeGroup = styled.div`
    display: flex;
    border-radius: 20px;
    overflow: hidden;
`;

const ActionButton = styled.button`
    background-color: #f2f2f2;
    color: #000;
    padding: 8px 16px;
    border: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    height: 36px;
    white-space: nowrap;
    border-radius: 20px;


    &:hover {
        background-color: #e5e5e5;
    }
    ${(props) => props.$isGrouped && `
        border-radius: 0;
    `}
`;
const LikeButton = styled(ActionButton)`
    border-right: 1px solid #e5e5e5; 
`;
const MoreOptions = styled.div`
    background-color: #f2f2f2;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 36px;
    height: 36px;
    white-space: nowrap;
    border-radius: 50%;

  &:hover {
    background-color: #e5e5e5;
  }
`;
const DescriptionContainer = styled.div`
    margin-top: 16px;
    background-color: #f2f2f2;
    padding: 12px;
    border-radius: 12px;
`;

const MetadataText = styled.p`
    font-weight: 500;
    font-size: 14px;
    margin: 0 0 5px 0;
`;

const DescriptionText = styled.p`
    font-size: 14px;
    line-height: 160%;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    cursor: pointer;

    ${props => !props.$isExpanded && `
        -webkit-line-clamp: 3; //只顯示3行
        white-space: pre-wrap; //保留換行效果
  ` }

    ${props => props.$isExpanded && `
        -webkit-line-clamp: unset; //展開時顯示所有行數
        white-space: pre-wrap;
  ` }
`;
const ShowMoreButton = styled.span`
    font-weight: 500;
    color: #606060;
    cursor: pointer;
    display: block;
    margin-top:5px;
`;


const DescribeSection = ({ video }) => {    

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <SectionContainer>
            <Title>{video.title}</Title>
            
            <MetadataRow>
                <ChannelInfo>
                    <ChannelPicture src={video.channelUserPicture} alt={video.channelName} />
                    <ChannelText>
                        <ChannelName>{video.channelName}</ChannelName>
                        <SubscriberCount>{video.subscriberCount}訂閱</SubscriberCount> 
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
                    觀看次數: {video.views}次 • {video.uploadedTime}
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