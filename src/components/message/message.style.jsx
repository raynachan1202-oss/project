import styled from 'styled-components';


export const MessagesContainer = styled.div`
    margin-top: 24px;
    padding-top: 8px;
`;

export const MessagesHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const MessageCount = styled.h2`
    font-size: 20px;
    font-weight: 500;
    margin-right: 24px;
`;

export const SortButton = styled.button`
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
export const AddMessage = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

export const MessageInput = styled.input`
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

export const MessageActions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
    gap: 10px;
`;
export const Emoji = styled.span`
    margin-right: auto; 
    cursor: pointer;
    font-size: 20px;
    color: #606060;
`;

export const ActionButton = styled.button`
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

export const UserPicture = styled.div`
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

export const InputWrapper = styled.div`
    width: 100%;
`;

export const MessageItem = styled.div`
    display: flex;
    margin-bottom: 16px;
    padding: 4px 0;
    position: relative;
`;

export const MessageBody = styled.div`
    width: 100%;
    padding-right: 30px;
`;

export const MessageHeader = styled.div`
    font-size: 13px;
    color: #606060;
    margin-bottom: 4px;
`;

export const MessageAuthor = styled.span`
    font-weight: 500;
    color: #0f0f0f;
    margin-right: 8px;
`;

export const MessageText = styled.p`
    font-size: 14px;
    margin: 0;
    line-height: 1.4;
`;
export const MessageInteraction = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
`;
export const IconContainer = styled.div`
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
export const InteractionButton = styled.button`
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

export const ReplyButton = styled.button`
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
export const MoreIconContainer = styled.div`
    position: absolute;
    top: 4px;
    right: 0;
    color: #0f0f0f;
    padding: 4px; 
    
    &:hover {
        cursor: pointer;
    }
`;


