import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faMagnifyingGlass,
  faMicrophone,
  faBars,
  faEllipsisV,
  faHouse as fasHouse,
  faCirclePlay as fasCirclePlay,
  faRectangleList as fasRectangleList,
  faCircleUser as fasCircleUser,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHouse as farHouse,
  faCirclePlay as farCirclePlay,
  faRectangleList as farRectangleList,
  faCircleUser as farCircleUser
} from '@fortawesome/free-regular-svg-icons';

import {
  MainContainer,
  NavBarContainer,
  LogoContainer,
  HamburgerIcon,
  YoutubeIcon,
  SearchContainer,
  SearchBar,
  SearchInput,
  SearchButton,
  MicIcon,
  VoiceIconContainer,
  ProfileContainer,
  MoreOptions,
  MoreIcon,
  LoginButton,
  LoginIcon,
  LoginText,
  PageWrapper,
  SidebarContainer,
  SidebarItem,
  ContentContainer,
  SidebarText,
  SidebarIcon,
} from './App.style.jsx';


import HomePage from './pages/home';
import ShortsPage from './pages/shorts';
import SubscriptionsPage from './pages/subscription';
import PersonalPage from './pages/personal';
import HistoryPage from './pages/history';

function App() {
  const location = useLocation();
  useEffect(() => {}, [location.pathname]);

  return (
    <MainContainer>
      <NavBarContainer>

        <LogoContainer>
          <HamburgerIcon icon={faBars} />
          <YoutubeIcon icon={faYoutube} />
        </LogoContainer>

        <SearchContainer>
          <SearchBar>
            <SearchInput placeholder="搜尋"/>
            <SearchButton>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchButton>
          </SearchBar>

          <VoiceIconContainer>
            <MicIcon icon={faMicrophone} />
          </VoiceIconContainer>
        </SearchContainer>

        <ProfileContainer>
          <MoreOptions>
            <MoreIcon icon={faEllipsisV} />
          </MoreOptions>

          <LoginButton>
            <LoginIcon icon={farCircleUser} />
            <LoginText>登入</LoginText>
          </LoginButton>

        </ProfileContainer>
      </NavBarContainer>

      <PageWrapper>
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

          <SidebarItem to="/personal">
            <SidebarIcon icon={location.pathname === '/personal' ? fasCircleUser : farCircleUser} />
            <SidebarText>個人中心</SidebarText>
          </SidebarItem>

          <SidebarItem to="/history">
            <SidebarIcon icon={faClockRotateLeft} />
            <SidebarText>觀看紀錄</SidebarText>
          </SidebarItem>
        </SidebarContainer>

        <ContentContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shorts" element={<ShortsPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/personal" element={<PersonalPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </ContentContainer>
      </PageWrapper>
    </MainContainer>
  );
}

export default App;
