import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { eachVideos } from '@/pages/content/videodata.content'; 

import DescribeSection from '@/pages/watch/DescribeSection'
import RelatedList from '@/components/list/relatedlist.component'


const WatchPageLayout = styled.div`
  display: flex;
  padding: 24px 20px 0 30px;

  @media (max-width: 1000px) {
    flex-direction: column; 
  }
`;

const MainContent = styled.div`
  flex: 2;
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

const WatchPage = () => {
    const { videoId } = useParams(); 
    const currentVideoId = parseInt(videoId);
    
    const currentVideo = eachVideos.find(video => video.id === currentVideoId); 
    const currentCategory = currentVideo.category;

    // 篩選同類型影片
    const relatedVideos = eachVideos.filter(video => 
      // 影片id 不等於當前影片id
      video.id !== currentVideoId &&
      // 影片的category等於當前影片的category )
      video.category === currentCategory
    );

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
            </MainContent>

            <RelatedContent>
                {/* 右側推薦區*/}
                <RelatedList relatedVideos={relatedVideos} />
            </RelatedContent>
            
        </WatchPageLayout>
    );
};

export default WatchPage;