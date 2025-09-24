import React from 'react';
import {
  faHouse as fasHouse, 
  faCirclePlay as fasCirclePlay, 
  faRectangleList as fasRectangleList,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHouse as farHouse, 
  faCirclePlay as farCirclePlay, 
  faRectangleList as farRectangleList, 
  faCircleUser,
} from '@fortawesome/free-regular-svg-icons';

import {
  SidebarContainer,
  SidebarItem,
  SidebarIcon,
  SidebarText,
} from '@pages/sidebar/minisidebar.style'

function MiniSidebar({ location }) {
  return (
    <SidebarContainer>
      <SidebarItem to="/">
        <SidebarIcon icon={location.pathname === '/' ? fasHouse : farHouse} />
        <SidebarText>首頁</SidebarText>
      </SidebarItem>
      <SidebarItem to="/shorts">
        <SidebarIcon icon={location.pathname === '/shorts' ? fasCirclePlay : farCirclePlay} />
        <SidebarText>Shorts</SidebarText>
      </SidebarItem>
      <SidebarItem to="/subscriptions">
        <SidebarIcon icon={location.pathname === '/subscriptions' ? fasRectangleList : farRectangleList} />
        <SidebarText>訂閱內容</SidebarText>
      </SidebarItem>
      <SidebarItem to="/history">
        <SidebarIcon icon={faClockRotateLeft} />
        <SidebarText>觀看紀錄</SidebarText>
      </SidebarItem>
      <SidebarItem to="/personal">
        <SidebarIcon icon= {faCircleUser}/>
        <SidebarText>個人中心</SidebarText>
      </SidebarItem>
    </SidebarContainer>
  );
}

export default MiniSidebar;
              