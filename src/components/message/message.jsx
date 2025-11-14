import { React, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBarsStaggered, 
    faFaceSmile,
    faThumbsUp,
    faThumbsDown,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

import { formatRelativeTime } from '@components/time'


const MessagesContainer = styled.div`
    margin-top: 24px;
    padding-top: 8px;
`;

const MessagesHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const MessageCount = styled.h2`
    font-size: 20px;
    font-weight: 500;
    margin-right: 24px;
`;

const SortButton = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    font-size: 14px;
    cursor: pointer;

    svg{
        margin-right: 8px;
    }
`;
const AddMessage = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

const MessageInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 6px 0;
    font-size: 14px;

    &:focus {
        outline: none;
        border-bottom: 2px solid #0f0f0f;
        padding-bottom: 5px;
    }
    
`;

const MessageActions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
    gap: 10px;
`;
const Emoji = styled.span`
    margin-right: auto; 
    cursor: pointer;
    font-size: 20px;
    color: #606060;
`;

const ActionButton = styled.button`
    background-color: ${props => props.$primary ? '#0f0f0f' : 'transparent'};
    padding: 8px 16px;
    border: none;
    border-radius: 20px;
    font-weight: 500;
    cursor: pointer;
    font-size: 14px;

    ${props => props.$primary && `
        background-color: ${props.disabled ? '#f2f2f2' : '#1140e9ed'};
        color: ${props.disabled ? '#909090' : '#fff'};
    `}

    &:hover {
        background-color: #e5e5e5;
        ${props => props.$primary && `
            background-color: ${props.disabled ? '#f2f2f2' : '#1330af'};
        `}
    }
`;

const UserPicture = styled.div`
    width: ${props => props.$size || '40px'};
    height: ${props => props.$size || '40px'};
    border-radius: 50%;
    margin-right: 16px;
    flex-shrink: 0;
    
    background-image: url(${props => props.$url});
    background-size: cover;
    background-position: center;

    background-color: #909090;
`;

const InputWrapper = styled.div`
    width: 100%;
`;

const MessageItem = styled.div`
    display: flex;
    margin-bottom: 16px;
    padding: 4px 0;
    position: relative;
`;

const MessageBody = styled.div`
    width: 100%;
    padding-right: 30px;
`;

const MessageHeader = styled.div`
    font-size: 13px;
    color: #606060;
    margin-bottom: 4px;
`;

const MessageAuthor = styled.span`
    font-weight: 500;
    color: #0f0f0f;
    margin-right: 8px;
`;

const MessageText = styled.p`
    font-size: 14px;
    margin: 0;
    line-height: 1.4;
`;
const MessageInteraction = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
`;
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px; 
    height: 32px;
    border-radius: 50%;
    color: #606060;

    &:hover {
        background-color: #f2f2f2;
    }

    svg {
        font-size: 15px;
    }
`;
const InteractionButton = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: #606060;
    font-weight: 500;
    padding: 0;
    margin-right: 8px;
    margin-left: -8px;

    span {
        margin: 0 4px; 
        font-size: 12px; 
        color: #606060; 
        font-weight: 400;
    }
`;

const ReplyButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    color: #0f0f0f;
    
    padding: 7px 13px;
    border-radius: 20px;

    &:hover {
        background-color: #f2f2f2;
    }
`;
const MoreIconContainer = styled.div`
    position: absolute;
    top: 4px;
    right: 0;
    color: #0f0f0f;
    padding: 4px; 
    
    &:hover {
        cursor: pointer;
    }
`;


const MessageSection = ({ videoMessages = [], currentUserPhotoUrl }) => {
    const totalMessages = videoMessages.length; 
    const [messageText, setMessageText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    // 目前使用者的頭像
    const defaultUrl = 'https://cdn.pixabay.com/photo/2025/02/21/10/33/cat-9421720_1280.jpg';
    const currentUserPictureUrl = currentUserPhotoUrl || defaultUrl;
    
    const inputPictureSize = isFocused ? '40px' : '24px'; 
    const handleCancel = () => {
    setMessageText('');
    setIsFocused(false);
};

    return (
        <MessagesContainer>

            {/* 留言標題和排序區 */}
            <MessagesHeader>
                <MessageCount>{totalMessages} 則留言</MessageCount> 
                <SortButton>
                    <FontAwesomeIcon icon={faBarsStaggered} />
                    排序依據
                </SortButton>
            </MessagesHeader>
            
            {/* 目前使用者的留言輸入區 */}
            <AddMessage>
                <UserPicture 
                    $url={currentUserPictureUrl}
                    $size={inputPictureSize}
                /> 
                <InputWrapper>
                    <MessageInput
                        placeholder={isFocused ? "" : "發表留言..."}
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        
                    />

                    {isFocused && (
                        <MessageActions>
                            <Emoji>
                                <FontAwesomeIcon icon={faFaceSmile} />
                            </Emoji> 
                            <ActionButton
                                onClick={handleCancel}>
                                取消
                            </ActionButton>
                            <ActionButton 
                                $primary
                                disabled={!messageText.trim()}
                            >
                                留言
                            </ActionButton>
                        </MessageActions>
                    )}
                </InputWrapper>
            </AddMessage>
            
            {/* 留言列表 */}
            <>
                {videoMessages.map(message => {
                    const messageRelativeTime = formatRelativeTime(message.time); 

                    return (
                        <MessageItem key={message.id}>
                            <UserPicture $url={message.authorPicture}/>
                            <MessageBody>
                                <MessageHeader>
                                    <MessageAuthor>@{message.author}</MessageAuthor>
                                    {messageRelativeTime}
                                </MessageHeader>
                                <MessageText>{message.text}</MessageText>

                                <MessageInteraction>
                                    <InteractionButton>
                                        <IconContainer>
                                            <FontAwesomeIcon icon={faThumbsUp} />
                                        </IconContainer>

                                        <span>{message.likes > 0 ? message.likes : ''}</span>
                                    </InteractionButton>
                                    
                                    <InteractionButton>
                                        <IconContainer>
                                            <FontAwesomeIcon icon={faThumbsDown} />
                                        </IconContainer>
                                    </InteractionButton>
                                    
                                    <ReplyButton>回覆</ReplyButton>
                                </MessageInteraction>
                                
                            </MessageBody>
                            <MoreIconContainer>
                                <FontAwesomeIcon 
                                    icon={faEllipsisVertical} 
                                />
                            </MoreIconContainer>
                        </MessageItem>
                    );
                })}
            </>

        </MessagesContainer>
    );
};

export default MessageSection;