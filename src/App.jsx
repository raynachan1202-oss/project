import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAccess } from '@/context/authcontext'

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
import WatchPage from './pages/watch/index.watchpage';

import MiniSidebar from './pages/sidebar/minisidebar.jsx';
import ExtendSidebar from './pages/sidebar/extendsidebar.jsx';

import LoginPage from './pages/logpage/login';
import UnLoggin from './pages/logpage/unloggin';

function App() {
  const [collapse, setCollapse] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { isLoggedIn, logout } = useAccess(); 

  const isWatchPage = location.pathname.startsWith('/watch/');
  // 判斷是否在登入頁面
  const isLoginPage = location.pathname === '/login';
  useEffect(() => {}, [location.pathname]);

  const goToHome = () => {
    navigate('/');
  };


  const handleLoginOrLogout = () => {
    if (isLoggedIn) {
      logout();
      if (location.pathname !== '/') {
          navigate('/'); // 登出後回首頁
      }
    } else {
      // 未登入就到login
      navigate('/login');
    }
  };

  // 根據登入狀態決定首頁要渲染哪個部分
  const HomeContent = isLoggedIn 
    ? <HomePage />
    : <UnLoggin onLoginClick={() => navigate('/login')} />; 

  // 如果在登入頁面，只渲染 LoginPage
  if (isLoginPage) {
    return <LoginPage />;
  }

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
          <LoginButton onClick={handleLoginOrLogout}>
            <LoginIcon icon={farCircleUser} />
            <LoginText>{isLoggedIn ? '登出' : '登入'}</LoginText>
          </LoginButton>
        </ProfileContainer>
      </NavBarContainer>

      <PageWrapper>
        <ContentContainer $collapse={collapse} $isWatchPage={isWatchPage}>
          <Routes>
            <Route path="/" element={HomeContent} />
            <Route path="/shorts" element={<ShortsPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/personal" element={<PersonalPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/watch/:videoId" element={<WatchPage />} />
            <Route path="/login" element={<LoginPage />} />

          </Routes>
        </ContentContainer>
      </PageWrapper>
    </MainContainer>
  );
}

export default App;
