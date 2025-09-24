import React from 'react';
import {
  faBars, 
  faHouse as fasHouse, 
  faRectangleList as fasRectangleList,
  faClockRotateLeft, 
  faFire, 
  faMusic, 
  faFilm, 
  faGamepad, 
  faNewspaper, 
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHouse as farHouse,
  faRectangleList as farRectangleList, 
  faCircleUser,
} from '@fortawesome/free-regular-svg-icons';
import youtubeLogo from '../../images/YouTube_Logo_2017.svg.png';
import {
  SidebarWrapper,
  SidebarContainer,
  SidebarHeader,
  HamburgerIcon,
  YoutubeIcon,
  SidebarItem,
  SidebarIcon,
  SidebarText,
}from '@pages/sidebar/extendsiderbar.styled'


function ExtendSidebar({ collapse, setCollapse, location }) {
  return (
    <SidebarWrapper $collapse={collapse} onClick={() => setCollapse(false)}>
    <SidebarContainer $collapse={collapse} onClick={(e) => e.stopPropagation()}>
      <SidebarHeader>
        <HamburgerIcon icon={faBars} onClick={() => setCollapse(false)} />
        <YoutubeIcon src={youtubeLogo} alt="YouTube Logo" />
      </SidebarHeader>
      <SidebarItem to="/">
        <SidebarIcon icon={location.pathname === '/' ? fasHouse : farHouse} />
        <SidebarText>首頁</SidebarText>
      </SidebarItem>
      <SidebarItem to="/subscriptions">
        <SidebarIcon icon={location.pathname === '/subscriptions' ? fasRectangleList : farRectangleList} />
        <SidebarText>訂閱內容</SidebarText>
      </SidebarItem>
      <SidebarItem to="/history">
        <SidebarIcon icon={faClockRotateLeft} />
        <SidebarText>觀看紀錄</SidebarText>
      </SidebarItem>

      <hr style={{width: '90%', border: '0.5px solid #ccc', margin: '10px 0'}} />

      <SidebarItem to="/trending">
        <SidebarIcon icon={faFire} />
        <SidebarText>發燒影片</SidebarText>
      </SidebarItem>
      <SidebarItem to="/music">
        <SidebarIcon icon={faMusic} />
        <SidebarText>音樂</SidebarText>
      </SidebarItem>
      <SidebarItem to="/movies">
        <SidebarIcon icon={faFilm} />
        <SidebarText>電影</SidebarText>
      </SidebarItem>
      <SidebarItem to="/gaming">
        <SidebarIcon icon={faGamepad} />
        <SidebarText>遊戲</SidebarText>
      </SidebarItem>
      <SidebarItem to="/news">
        <SidebarIcon icon={faNewspaper} />
        <SidebarText>新聞</SidebarText>
      </SidebarItem>
      <SidebarItem to="/sports">
        <SidebarIcon icon={faTrophy} />
        <SidebarText>體育</SidebarText>
      </SidebarItem>

      <hr style={{width: '90%', border: '0.5px solid #ccc', margin: '10px 0'}} />

      <SidebarItem to="/personal">
        <SidebarIcon icon={faCircleUser} />
        <SidebarText>個人中心</SidebarText>
      </SidebarItem>

    </SidebarContainer>
    </SidebarWrapper>
  );
}

export default ExtendSidebar;