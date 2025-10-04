import React, { useState } from 'react';
import styled from 'styled-components';
import VideoListCard from '@/pages/watch/videolistcard'

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    `;

const TabsContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    
`;

const Tab = styled.button`
    border-radius: 8px;
    background: none;
    border: none;
    padding: 8px 12px;
    margin-right: 8px;
    font-size: 14px;
    cursor: pointer;

    background-color: ${props => (props.$active ? '#000' : '#f2f2f2')};
    color: ${props => (props.$active ? '#ffffff' : '#000000')};
  
`;

const VideoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px; 

    @media (max-width: 1000px){
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 16px;
    }
`;

const RelatedList = ({ relatedVideos }) => {
    const [activeTab, setActiveTab] = useState('全部'); 

    return (
        <ListContainer>

            {/* 上方標籤區 */}
            <TabsContainer>
                <Tab $active={activeTab === '全部'} onClick={() => setActiveTab('全部')}>全部</Tab>
                <Tab $active={activeTab === '系列影片內容'} onClick={() => setActiveTab('系列影片內容')}>系列影片內容</Tab>
            </TabsContainer>

            {/* 影片列表區 */}
            <VideoList>
                {relatedVideos.map(video => (
                    <VideoListCard key={video.id} video={video} />
                ))}
            </VideoList>
        </ListContainer>
    );
};
export default RelatedList;