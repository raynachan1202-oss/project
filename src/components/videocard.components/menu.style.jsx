import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MoreOptions = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
  &:active {
    background-color: #cccccc;
    border: solid 1px #b9b8b8;
    transform: scale(0.95);
  }
`;
export const MoreIcon = styled(FontAwesomeIcon)`
  width: 19px;
  height: 19px;
  cursor: pointer;
  
`;
export const MenuContainer = styled.div`
  width: 250px; 
  position: absolute;
  top: 30px;
  right: -10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  z-index: 100;
  overflow: hidden;
`;
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 14px;
  color: #030303;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    background-color: #f2f2f2;
  }

  & > svg {
    margin-right: 16px;
    width: 18px;
    height: 18px;
    color: #000000;
  }
`;