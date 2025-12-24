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

import ProfileMenu from '@components/profilemenu/profilemenu'
import StudioPage from '@/pages/studio/studio.index'

function App() {
  const [collapse, setCollapse] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { isLoggedIn, logout, user, signInWithGoogle } = useAccess(); 
  const userPhotoUrl = user?.photoURL;

  const isWatchPage = location.pathname.startsWith('/watch/');
  
  const isStudioPage = location.pathname.startsWith('/studio');
  const shouldRenderSidebar = !isWatchPage && !isStudioPage;

  useEffect(() => {}, [location.pathname]);
  
  useEffect(() => {
    // 只有當用戶處於登出狀態時才執行檢查
    if (!isLoggedIn) {
      // 檢查當前路徑是否為 Studio 頁面
      if (isStudioPage) {
        // 如果在 Studio 頁面登出，則跳轉回首頁 (/)
        navigate('/');
      }
    }
  }, [isLoggedIn, navigate, isStudioPage]);

  const goToHome = () => {
    navigate('/');
  };
  
  // 導航到工作室
  const goToStudio = () => {
    navigate('/studio'); 
  };


  const handleLoginOrLogout = async () => {
    if (isLoggedIn) {
      // 已登入狀態：點擊頭像時，切換選單的顯示狀態
      setIsMenuOpen(!isMenuOpen); 
    } else {
      // 未登入狀態：執行登入流程
      const result = await signInWithGoogle();
      if (result.success) {
        console.log("Google 登入成功");
      } else {
          console.log("Google 登入失敗");
      }
    }
  };

  useEffect(() => {
    // 只有選單開啟時才需要監聽
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      setIsMenuOpen(false); 
    };

    // 在下一個事件循環中添加監聽，防止打開選單的點擊事件立即觸發關閉。
    const timeoutId = setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
    }, 0);
    
    return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('click', handleClickOutside);
    };
    
  }, [isMenuOpen]);

  // 根據登入狀態決定首頁要渲染哪個部分
  const HomeContent = isLoggedIn 
    ? <HomePage />
    : <UnLoggin />; 


  return (
    <MainContainer $collapse={collapse} $isWatchPage={isWatchPage}>

      {shouldRenderSidebar && (
        <MiniSidebar location={location} />
      )}
      
      {shouldRenderSidebar &&(
        <ExtendSidebar 
          collapse={collapse} 
          setCollapse={setCollapse} 
          location={location} 
        />
      )}

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
          <div style={{ position: 'relative' }}>
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
            {isLoggedIn && isMenuOpen && (
              <ProfileMenu 
                user={user} 
                logout={logout}
                closeMenu={() => setIsMenuOpen(false)} // 傳遞關閉選單的函式
                goToStudio={goToStudio}
              />
            )}
          </div>
        </ProfileContainer>
      </NavBarContainer>

      <PageWrapper>
          <Routes>
            <Route path="/" element={HomeContent} />
            <Route path="/shorts" element={<ShortsPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/personal" element={<PersonalPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/studio/*" element={<StudioPage />} />
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
