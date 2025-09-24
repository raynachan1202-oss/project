import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  background-color: ${({ $collapse }) => ($collapse ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)')};
  opacity: ${({ $collapse }) => ($collapse ? '1' : '0')};
  visibility: ${({ $collapse }) => ($collapse ? 'visible' : 'hidden')};
  transition: 
    background-color 0.3s ease-in-out,
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  z-index: 101;
`;

export const SidebarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 240px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  transition: transform 0.3s ease-in-out;
  transform: ${({ $collapse }) => ($collapse ? 'translateX(0)' : 'translateX(-100%)')};
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  height: 62px;
`;

export const HamburgerIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  margin: 0 25px 0 10px;
  cursor: pointer;
`;

export const YoutubeIcon = styled.img`
  width: 100px;
  cursor: pointer;
`;

export const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 24px;
  text-decoration: none;
  color: #000000;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SidebarIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;

export const SidebarText = styled.span`
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
`;