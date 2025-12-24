import React from 'react';
import { useParams } from 'react-router-dom';

import { 
  WatchPageLayout,
  MainContent,
  RelatedContent,
  WatchSection,
  VideoPlayer,
  WatchSectionTitle,
} from '@pages/watch/index.watchpage.style'


import DescribeSection from '@/components/videocard.components/describeSection'
import RelatedList from '@/components/list/relatedlist.component'
import MessageSection from '@/components/message/message';
import Resize from '@/components/resize/resize';



import { FetchUseContext } from '@/context/fetch.context';



const WatchPage = ({ currentUserPhotoUrl }) => {

    const { data, isLoading, error } = FetchUseContext(); 
    
    const { videoId } = useParams(); 
    const currentVideoId = parseInt(videoId, 10);

    //這邊控制畫面縮放
    const windowsSize = Resize();
    const { width } = windowsSize;
    const isMobileLayout = width >= 1000;
    
    if (isLoading || data === null) {
        return <WatchPageLayout>資料載入中...</WatchPageLayout>;
    }
    if (error) {
        return <WatchPageLayout>載入錯誤：{error}</WatchPageLayout>;
    }
    
    
    const eachVideos = data.eachVideos || []; 
    const Messages = data.Messages || [];

    const currentVideo = eachVideos.find(video => 
      video.id === currentVideoId
    ); 
    
    if (!currentVideo) {
        return <WatchPageLayout>找不到此影片{currentVideoId}</WatchPageLayout>;
    }

    
    const videoMessage = Messages.filter(
      message => message.videoId === currentVideoId
    );
    
    const relatedContext = {
        currentVideoId: currentVideoId,
        currentCategory: currentVideo.category,
        currentChannelName: currentVideo.channelName,
    };

    
     return (
        <WatchPageLayout>
            <MainContent>
                {/* 觀看區 */}
                <WatchSection>
                   {currentVideo && currentVideo.videoUrl ? (
                      <VideoPlayer 
                        src={currentVideo.videoUrl}
                        controls
                        autoPlay
                        loop
                      />
                   ) : (
                      <WatchSectionTitle>找不到影片網址</WatchSectionTitle>
                   )}
                </WatchSection>
                
                {/* 影片資訊區 */}
                <DescribeSection video={currentVideo} />

                {/* 留言區 */}
                {isMobileLayout && 
                  <MessageSection 
                    videoMessages={videoMessage}
                    currentUserPhotoUrl={currentUserPhotoUrl}
                  />
                }
            </MainContent>

            <RelatedContent>
                {/* 右側推薦區*/}
                <RelatedList 
                  allVideos={eachVideos}
                  relatedContext={relatedContext}
                />
            </RelatedContent>

            {/* 留言區 */}
            {!isMobileLayout && 
                <MessageSection videoMessages={videoMessage} currentUserPhotoUrl={currentUserPhotoUrl}/>
            }
            
        </WatchPageLayout>
    );
};

export default WatchPage;