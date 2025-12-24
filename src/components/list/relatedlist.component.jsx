import { React, useState } from 'react';

import VideoListCard from '@/components/videocard.components/videolistcard'
import { relateTabs } from '@/context/relatedtabs';

import { 
    ListContainer,
    TabsContainer,
    Tab,
    VideoList,
} from'@/components/list/relatedlist.component.style';


const RelatedList = ({ allVideos, relatedContext }) => {
    const [activeTabId, setActiveTabId] = useState( relateTabs[0].id ); //這邊不太懂relateTabs的props從哪裡來

    const activeTab = relateTabs.find(tab => tab.id === activeTabId);

    // 如果其中一個值是空的就將結果設為空陣列
    if (!activeTab || !relatedContext || !allVideos) {
        var relatedVideos = []; 

    } else {   
        var relatedVideos = allVideos.filter(video => {
            // 排除正在觀看的影片
            if (video.id === relatedContext.currentVideoId) {
                return false;
            }

            // 根據選中的標籤進行篩選
            if (activeTab.taglist === 'all') {
                return true; 
            } 
            
            //只返回與 currentCategory 相同的影片
            else if (activeTab.taglist === 'category') {
                return video.category === relatedContext.currentCategory;
            } 
            //只返回與 channelName 相同的影片
            else if (activeTab.taglist === 'channelName') {
                return video.channelName === relatedContext.currentChannelName;
            } 
            //根據標籤定義的 isLiveValue 來篩選影片
            else if (activeTab.taglist === 'isLive') {
                const targetIsLive = (typeof activeTab.isLiveValue === 'string')
                    ? activeTab.isLiveValue.toUpperCase() === 'TRUE'
                    : activeTab.isLiveValue;

                return video.isLive === targetIsLive; 
            }
        });
    }

    return (
        <ListContainer>
            {/* 上方標籤區 */}
            <TabsContainer>
                {relateTabs.map(tab => (
                    <Tab 
                        key={tab.id}
                        $active={activeTabId === tab.id} 
                        onClick={() => setActiveTabId(tab.id)}
                    >
                        {tab.Name}
                    </Tab>
                ))}
            </TabsContainer>

            {/* 右邊影片區，顯示篩選後的結果 */}
            <VideoList>
                {relatedVideos.map(video => (
                    <VideoListCard key={video.id} video={video} />
                ))}
            </VideoList>
        </ListContainer>
    );
};
export default RelatedList;