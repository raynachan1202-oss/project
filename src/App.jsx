import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faMagnifyingGlass,
  faMicrophone,
  faBars,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCircleUser as farCircleUser
} from '@fortawesome/free-regular-svg-icons';

import youtubeLogo from './images/YouTube_Logo_2017.svg.png';

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
  MicIconContainer,
  ProfileContainer,
  MoreOptions,
  MoreIcon,
  LoginButton,
  LoginIcon,
  LoginText,
  PageWrapper,
  ContentContainer,
} from './App.style.jsx';


import HomePage from './pages/home/home.jsx';
import ShortsPage from './pages/shorts/shorts.jsx';
import SubscriptionsPage from './pages/subscription/subscription.jsx';
import PersonalPage from './pages/personal/personal.jsx';
import HistoryPage from './pages/history/history.jsx';
import WatchPage from './pages/watch/watchpage';


import MiniSidebar from './pages/sidebar/minisidebar.jsx';
import ExtendSidebar from './pages/sidebar/extendsidebar.jsx';

function App() {
  const [collapse, setCollapse] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isWatchPage = location.pathname.startsWith('/watch/');
  useEffect(() => {}, [location.pathname]);

  const goToHome = () => {
    navigate('/');
  };

  return (
    <MainContainer $collapse={collapse} $isWatchPage={isWatchPage}>
      {!isWatchPage && (
        <MiniSidebar location={location} />
      )}
      
      <ExtendSidebar 
        collapse={collapse} 
        setCollapse={setCollapse} 
        location={location} 
      />

      <NavBarContainer>
        <LogoContainer>
          <HamburgerIcon
            icon={faBars} 
            onClick={()=> setCollapse(!collapse)}/>
          <YoutubeIcon 
            src={youtubeLogo} alt="YouTube Logo"
            onClick={goToHome}
          />
        </LogoContainer>
        <SearchContainer>
          <SearchBar>
            <SearchInput placeholder="搜尋"/>
            <SearchButton>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchButton>
          </SearchBar>
          <MicIconContainer>
            <MicIcon icon={faMicrophone} />
          </MicIconContainer>
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
        <ContentContainer $collapse={collapse} $isWatchPage={isWatchPage}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shorts" element={<ShortsPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/personal" element={<PersonalPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/watch/:videoId" element={<WatchPage />} />

          </Routes>
        </ContentContainer>
      </PageWrapper>
    </MainContainer>
  );
}

export default App;
