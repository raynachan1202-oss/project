import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faCircleUser as farCircleUser 
} from '@fortawesome/free-regular-svg-icons';


export const Container = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    width: 300px;
    /* height: 100px; */
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    z-index: 1000;
    padding: 10px 0;
    font-size: 14px;
    color: #0f0f0f;
    overflow: hidden;
`;

export const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 8px;
`;

export const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    object-fit: cover;
`;

export const DefaultUserIcon = styled(FontAwesomeIcon).attrs({ icon: farCircleUser })`
    width: 40px;
    height: 40px;
    color: #606060;
    margin-right: 15px;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const UserName = styled.span`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 2px;
`;

export const UserHandle = styled.span`
    color: #606060;
`;

export const ChannelLink = styled.a`
    color: #065fd4;
    font-weight: 500;
    margin-top: 8px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
        text-decoration: underline;
    }
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    line-height: 1.5;

    &:hover {
        background-color: #f2f2f2;
    }
`;

export const MenuIcon = styled(FontAwesomeIcon)`
    width: 18px;
    margin-right: 15px;
    color: #606060;
`;

export const Separator = styled.hr`
    border: none;
    border-top: 1px solid #e5e5e5;
    margin: 8px 0;
`;