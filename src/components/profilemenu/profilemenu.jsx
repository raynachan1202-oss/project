import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUserCircle, 
    faExchangeAlt, 
    faSignOutAlt,
    faMoon, 
    faLanguage, 
    faGlobe, 
    faKeyboard,
    faCogs,
    faQuestionCircle,
    faCommentDots 
} from '@fortawesome/free-solid-svg-icons';
import {
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import {
    faCircleUser as farCircleUser 
} from '@fortawesome/free-regular-svg-icons';



const Container = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    width: 300px;
    height: 100px;
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    z-index: 1000;
    padding: 10px 0;
    font-size: 14px;
    color: #0f0f0f;
    overflow: hidden;
`;

const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 8px;
`;

const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    object-fit: cover;
`;

const DefaultUserIcon = styled(FontAwesomeIcon).attrs({ icon: farCircleUser })`
    width: 40px;
    height: 40px;
    color: #606060;
    margin-right: 15px;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserName = styled.span`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 2px;
`;

const UserHandle = styled.span`
    color: #606060;
`;

const ChannelLink = styled.a`
    color: #065fd4;
    font-weight: 500;
    margin-top: 8px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
        text-decoration: underline;
    }
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    line-height: 1.5;

    &:hover {
        background-color: #f2f2f2;
    }
`;

const MenuIcon = styled(FontAwesomeIcon)`
    width: 18px;
    margin-right: 15px;
    color: #606060;
`;

const Separator = styled.hr`
    border: none;
    border-top: 1px solid #e5e5e5;
    margin: 8px 0;
`;


const handleAction = (text, closeMenu) => {
    console.log(`執行動作: ${text}`);
    closeMenu(); 
};


function ProfileMenu({ user, logout, closeMenu, goToStudio }) {

    const handleLogout = () => {
        logout();
        closeMenu();
    };

    const displayName = user?.displayName || '未命名使用者';
    const email = user?.email || '@無電子郵件';

    return (
        <Container onClick={(e) => e.stopPropagation()}> 
            
            <ProfileHeader>
                {user?.photoURL ? (
                    <UserImage src={user.photoURL} alt="User Avatar" />
                ) : (
                    <DefaultUserIcon />
                )}
                <UserInfo>
                    <UserName>{displayName}</UserName>
                    <UserHandle>@{email.split('@')[0]}</UserHandle> 
                    <ChannelLink href="#" onClick={() => handleAction('查看頻道', closeMenu)}>
                        查看頻道
                    </ChannelLink>
                </UserInfo>
            </ProfileHeader>
            
        
            <MenuItem onClick={() => handleAction('Google 帳戶', closeMenu)}>
                <MenuIcon icon={faGoogle} />Google 帳戶
            </MenuItem>
            <MenuItem onClick={() => handleAction('切換帳戶', closeMenu)}>
                <MenuIcon icon={faExchangeAlt} />切換帳戶
            </MenuItem>
            <MenuItem onClick={handleLogout}> 
                <MenuIcon icon={faSignOutAlt} />登出
            </MenuItem>
            
            <Separator />
            
            <MenuItem 
                onClick={() => {
                    goToStudio();
                    closeMenu();
                }}
            >
                <MenuIcon icon={faUserCircle} />YouTube 工作室
            </MenuItem>
            <MenuItem onClick={() => handleAction('購買內容與會籍', closeMenu)}>
                <MenuIcon icon={faUserCircle} />購買內容與會籍
            </MenuItem>
            
            <Separator />
            
            {/* 個人化設定 */}
            <MenuItem onClick={() => handleAction('你在 YouTube 中的資料', closeMenu)}>
                <MenuIcon icon={faUserCircle} />你在 YouTube 中的資料
            </MenuItem>
            <MenuItem onClick={() => handleAction('外觀：裝置主題', closeMenu)}>
                <MenuIcon icon={faMoon} />外觀：裝置主題
            </MenuItem>
            <MenuItem onClick={() => handleAction('顯示語言：中文 (台灣)', closeMenu)}>
                <MenuIcon icon={faLanguage} />顯示語言：中文 (台灣)
            </MenuItem>
            <MenuItem onClick={() => handleAction('嚴格篩選模式：停用', closeMenu)}> 
                <MenuIcon icon={faUserCircle} />嚴格篩選模式：停用
            </MenuItem>
            <MenuItem onClick={() => handleAction('位置：澳洲', closeMenu)}>
                <MenuIcon icon={faGlobe} />位置：澳洲
            </MenuItem>
            <MenuItem onClick={() => handleAction('鍵盤快速鍵', closeMenu)}>
                <MenuIcon icon={faKeyboard} />鍵盤快速鍵
            </MenuItem>
            
            <Separator />
            
            {/* 設定 */}
            <MenuItem onClick={() => handleAction('設定', closeMenu)}>
                <MenuIcon icon={faCogs} />設定
            </MenuItem>
            
            <Separator />

            {/* 幫助/意見回饋 */}
            <MenuItem onClick={() => handleAction('說明', closeMenu)}>
                <MenuIcon icon={faQuestionCircle} />說明
            </MenuItem>
            <MenuItem onClick={() => handleAction('提供意見', closeMenu)}>
                <MenuIcon icon={faCommentDots} />提供意見
            </MenuItem>

        </Container>
    );
}

export default ProfileMenu;