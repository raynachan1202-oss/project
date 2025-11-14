import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { eachVideos } from '@/context/videodata.context'; 
import { Messages } from '@/context/message.context'

import DescribeSection from '@/pages/watch/DescribeSection'
import RelatedList from '@/components/list/relatedlist.component'
import MessageSection from '@/components/message/message';
import Resize from '@/components/resize/resize';

import { FetchUseContext } from '@/context/fetch.context';

const WatchPageLayout = styled.div`
  display: flex;
  padding: 24px 20px 0 30px;

  @media (max-width: 1000px) {
    flex-direction: column; 
  }
`;

const MainContent = styled.div`
  flex: 2.4;
  margin-right: 24px;

  @media (max-width: 1000px) {
  margin-right: 0px;

  }
`;

const RelatedContent = styled.div`
  flex: 1;

  @media (max-width: 1000px) {
    flex: none; 
    width: 100%;
    margin-top: 24px;
  }
`;
const WatchSection = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;


  @media (max-width: 1000px) {
    width: 100vw; 
    margin-left: -30px; 
  }
`;
const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const WatchSectionTitle = styled.h2`
  color: white;
  padding: 10px;
  margin: 0; 
`;

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