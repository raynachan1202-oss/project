import React from 'react';
import styled from 'styled-components';
import VideoCard from '@/components/videocard.components/videocard.components';
import { eachVideos } from '@/pages/content/videodata.content';

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 12px;
  gap: 16px;
`;

const HomePage = () => {
  return (
    <FlexContainer>
      {eachVideos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </FlexContainer>
  );
};

export default HomePage;