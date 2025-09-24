import React from 'react';
import styled from 'styled-components';
import VideoCard from '@/components/videocard.components/videocard.components';


const eachVideos = [
  {
    id: 1,
    title: '澳洲墨爾本最近滑雪場Mount Buller攻略',
    videoPicture: 'https://cdn.pixabay.com/photo/2020/02/10/01/24/skiing-4835024_1280.jpg',
    videoLength: '10:51',
    channelUserPicture: 'https://cdn.pixabay.com/photo/2014/10/22/18/04/man-498473_1280.jpg',
    channelName: 'Jack123',
    views: '6.6萬',
    uploadedTime: '13 天前',
  },
  {
    id: 2,
    title: '[Playlist] you are falling in love',
    videoPicture: 'https://cdn.pixabay.com/photo/2024/10/22/07/06/shoes-9138796_1280.jpg',
    videoLength: '52:20',
    channelUserPicture: 'https://cdn.pixabay.com/photo/2016/10/28/21/16/couple-1779066_1280.jpg',
    channelName: 'Lumin',
    views: '176萬',
    uploadedTime: '5個月前',
  },
  {
    id: 3,
    title: '[黑白大主廚] 最美味的料理驚嚇全場！',
    videoPicture: 'https://cdn.pixabay.com/photo/2024/05/31/17/07/ai-generated-8800957_1280.png',
    videoLength: '14:32',
    channelUserPicture: 'https://cdn.pixabay.com/photo/2019/05/19/10/14/chef-4213716_1280.jpg',
    channelName: '美食小天才',
    views: '4.3萬',
    uploadedTime: '1個月前',
  },
  {
    id: 4,
    title: '隨機找西班牙人文化交流！',
    videoPicture: 'https://cdn.pixabay.com/photo/2025/04/21/14/46/podcast-9547655_1280.jpg',
    videoLength: '10:29',
    channelUserPicture: 'https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_1280.jpg',
    channelName: 'LaLa Teacher',
    views: '2189',
    uploadedTime: '9小時前',
  },
  {
    id: 5,
    title: '🌿Feel-Good Piano for a Gentle Afternoon｜3HR 放鬆木質風音樂・閱讀・靜心・療癒背景BGM 🎹',
    videoPicture: 'https://cdn.pixabay.com/photo/2023/11/26/10/26/piano-8413277_1280.jpg',
    videoLength: '3:57',
    channelUserPicture: 'https://cdn.pixabay.com/photo/2023/03/31/18/44/piano-7890735_1280.jpg',
    channelName: 'piano man',
    views: '1.3萬',
    uploadedTime: '3個月前',
  },
  {
  id: 6,
    title: '80s Rock Songs Everyone Knows - Best of 80s Rock Music Playlist - Hits 1980 Rock Mix',
    videoPicture: 'https://cdn.pixabay.com/photo/2016/09/10/11/11/musician-1658887_1280.jpg',
    videoLength: '1:04:29',
    channelUserPicture: 'https://cdn.pixabay.com/photo/2015/08/12/16/16/hostile-886029_1280.jpg',
    channelName: '經典搖滾音樂',
    views: '286萬',
    uploadedTime: '3年前',
  },
];

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20px 0px 0px;
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