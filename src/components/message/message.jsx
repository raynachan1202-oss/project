import { React, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

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
    
`;
const UserPicture = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 16px;
    flex-shrink: 0;
    
    background-image: url(${props => props.$url});
    background-size: cover;
    background-position: center;

    background-color: #909090;
`;

const MessageItem = styled.div`
    display: flex;
    margin-bottom: 16px;
    padding: 10px 0;
`;

const MessageBody = styled.div`
    width: 100%;
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

const MessageSection = ({ videoMessages = [] }) => { 
    
    const totalMessages = videoMessages.length; 
    const [messageText, setMessageText] = useState('');

    // 目前使用者的頭像
    const currentUserPictureUrl = 'https://cdn.pixabay.com/photo/2025/02/21/10/33/cat-9421720_1280.jpg';

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
                <UserPicture $url={currentUserPictureUrl}/> 
                <MessageInput
                    placeholder="發表留言..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                />
            </AddMessage>
            
            {/* 留言列表 */}
            <>
                {videoMessages.map(message => (
                    <MessageItem key={message.id}>
                        <UserPicture $url={message.authorPicture}/>
                        <MessageBody>
                            <MessageHeader>
                                <MessageAuthor>{message.author}</MessageAuthor>
                                {message.time}
                            </MessageHeader>
                            <MessageText>{message.text}</MessageText>
                        </MessageBody>
                    </MessageItem>
                ))}
            </>

        </MessagesContainer>
    );
};

export default MessageSection;