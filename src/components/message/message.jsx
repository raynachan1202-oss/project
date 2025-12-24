import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBarsStaggered, 
    faFaceSmile,
    faThumbsUp,
    faThumbsDown,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

import {
    MessagesContainer,
    MessagesHeader,
    MessageCount,
    SortButton,
    AddMessage,
    MessageInput,
    MessageActions,
    Emoji,
    ActionButton,
    UserPicture,
    InputWrapper,
    MessageItem,
    MessageBody,
    MessageHeader,
    MessageAuthor,
    MessageText,
    MessageInteraction,
    IconContainer,
    InteractionButton,
    ReplyButton,
    MoreIconContainer,
} from '@components/message/message.style'

import { formatRelativeTime } from '@components/time'



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