import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SidebarContainer = styled.nav`
  position: fixed;
  top: 62px;
  left: 0;
  bottom: 0;
  width: 72px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  @media (max-width: 792px) {
    visibility: ${({ $collapse }) => ($collapse ? 'visible' : 'hidden')};
  }
`;

export const SidebarItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px 0;
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
  margin-bottom: 10px;
`;

export const SidebarText = styled.span`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
`;