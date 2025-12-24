import styled from 'styled-components';

export const SectionContainer = styled.div`
    width: 100%;
    padding-top: 20px;
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
`;

export const MetadataRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #e5e5e5; 
    padding-bottom: 16px;
`;

export const ChannelInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const ChannelPicture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
`;

export const ChannelText = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ChannelName = styled.p`
    font-weight: 500;
    font-size: 16px;
    margin: 0;
`;

export const SubscriberCount = styled.p`
    font-size: 12px;
    color: #606060;
    margin: 0;
`;

export const SubscribeButton = styled.button`
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

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LikeDislikeGroup = styled.div`
    display: flex;
    border-radius: 20px;
    overflow: hidden;
`;

export const ActionButton = styled.button`
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
export const LikeButton = styled(ActionButton)`
    border-right: 1px solid #e5e5e5; 
`;
export const MoreOptions = styled.div`
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
export const DescriptionContainer = styled.div`
    margin-top: 16px;
    background-color: #f2f2f2;
    padding: 12px;
    border-radius: 12px;
`;

export const MetadataText = styled.p`
    font-weight: 500;
    font-size: 14px;
    margin: 0 0 5px 0;
`;

export const DescriptionText = styled.p`
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
export const ShowMoreButton = styled.span`
    font-weight: 500;
    color: #606060;
    cursor: pointer;
    display: block;
    margin-top:5px;
`;