import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MainContainer = styled.div`
  display: flex;
`;

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;

  padding: 10px 15px;
  background-color: #ffffff;

  position: fixed;
  top: 0;
  z-index: 2;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const HamburgerIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  margin-right: 25px;
  cursor: pointer;
`;
export const YoutubeIcon = styled(FontAwesomeIcon)`
  width: 35px;
  height: 35px;
  color: #df1111;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  margin: 0 90px;
  align-items: center;
`;

export const SearchBar = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  width: 215px;
  padding: 8px 16px;
  border: 1px solid #d4d4d4;
  border-right: none;
  border-radius: 20px 0 0 20px;
  outline: none;
`;
export const SearchButton = styled.button`
  padding: 8px 20px;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 20px 20px 0;
  background-color: #f8f8f8;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #e5e5e5;
  }
`;
export const MicIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const VoiceIconContainer = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const MoreOptions = styled.div`
  cursor: pointer;
`;
export const MoreIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const LoginButton = styled.div`
  background-color: #fff;
  color: #065fd4;
  border: 1px solid #065fd4;
  border-radius: 20px;
  padding: 6px 16px;

  display: flex;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    background-color: #e5e5e5;
  }
`;

export const LoginIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  `;

export const LoginText = styled.span`
  font-size: 14px;
`;

export const PageWrapper = styled.div`
  display: flex;
  padding: 35px 0;
`;
export const SidebarContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 72px; 
  background-color: #ffffff;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SidebarItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  text-decoration: none;
  color: #000000;
  transition: background-color 0.2s, border-radius 0.2s;
  
  &:hover {
    background-color: #f0f0f0;
    border-radius: 10px;
  }
`;
export const SidebarIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
`;

export const SidebarText = styled.span`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
`;

export const ContentContainer = styled.div`
  margin-left: 75px;
`;

