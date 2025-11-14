import React from 'react';
import styled from 'styled-components';
import VideoCard from '@/components/videocard.components/homepage.components';
import { eachVideos } from '@/context/videodata.context';

import { FetchUseContext } from '@/context/fetch.context';

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 12px;
  gap: 16px;
  margin-left: 65px;
  @media (max-width: 792px) {
    margin: 0px;

  }
`;

const HomePage = () => {
  const { data, isLoading, error } = FetchUseContext();

  if (isLoading || data === null) {
    return <FlexContainer><div>Loading...</div></FlexContainer>;
  }

  if (error) {
    return <FlexContainer><div>error無法載入{error}</div></FlexContainer>;
  }

  const videosToRender = data.eachVideos || [];

  return (
    <FlexContainer>
      {videosToRender.length === 0 && (
          <div>目前沒有影片數據。</div>
      )}
      {videosToRender.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </FlexContainer>
  );
};

export default HomePage;