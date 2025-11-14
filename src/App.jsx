import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAccess } from '@/context/auth'

import {
  faMagnifyingGlass,
  faMicrophone,
  faBars,
  faEllipsisV,

  faPlus,
  faBell,
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
  CreateButton,
  UserImage,
} from './App.style.jsx';


import HomePage from './pages/home/home.jsx';
import ShortsPage from './pages/shorts/shorts.jsx';
import SubscriptionsPage from './pages/subscription/subscription.jsx';
import PersonalPage from './pages/personal/personal.jsx';
import HistoryPage from './pages/history/history.jsx';
import WatchPage from './pages/watch/index.watchpage';

import MiniSidebar from './pages/sidebar/minisidebar.jsx';
import ExtendSidebar from './pages/sidebar/extendsidebar.jsx';

import UnLoggin from './pages/logpage/unloggin';

function App() {
  const [collapse, setCollapse] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { isLoggedIn, logout, user, signInWithGoogle } = useAccess(); 
  const userPhotoUrl = user?.photoURL;

  const isWatchPage = location.pathname.startsWith('/watch/');
  
  useEffect(() => {}, [location.pathname]);

  const goToHome = () => {
    navigate('/');
  };


  const handleLoginOrLogout = async () => {
    if (isLoggedIn) {
      logout();
      if (location.pathname !== '/') {
          navigate('/'); // 登出後回首頁
      }
    } else {
      // 未登入就到login
      const result = await signInWithGoogle();
      if (result.success) {
        console.log("Google 登入成功");
      } else {
          console.log("Google 登入失敗");
      }
    }
  };

  // 根據登入狀態決定首頁要渲染哪個部分
  const HomeContent = isLoggedIn 
    ? <HomePage />
    : <UnLoggin />; 


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
          {isLoggedIn ? (
            <>
              <CreateButton>
                <MoreIcon icon={faPlus} />
                <span>建立</span>
              </CreateButton>

              {/* 建立鈴鐺 */}
              <MoreOptions>
                  <MoreIcon icon={faBell} /> 
              </MoreOptions>
            </>
            ) : (
                <MoreOptions>
                    <MoreIcon icon={faEllipsisV} />
                </MoreOptions>
            )}
            
          <LoginButton onClick={handleLoginOrLogout} $isLoggedIn={isLoggedIn}>

            {/* 已登入且有頭像 顯示圖像 */}
            {isLoggedIn && user && user.photoURL ? (
              <UserImage 
                src={user.photoURL}
              />
            ) : (
              // 未登入，或已登入但無頭像 顯示預設圖示
              <>
                <LoginIcon icon={farCircleUser} />
                <LoginText>登入</LoginText>
              </>
            )}
          </LoginButton>
        </ProfileContainer>
      </NavBarContainer>

      <PageWrapper>
          <Routes>
            <Route path="/" element={HomeContent} />
            <Route path="/shorts" element={<ShortsPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/personal" element={<PersonalPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route 
                path="/watch/:videoId" 
                element={<WatchPage currentUserPhotoUrl={userPhotoUrl} />} 
            />
          </Routes>
      </PageWrapper>
    </MainContainer>
  );
}

export default App;
