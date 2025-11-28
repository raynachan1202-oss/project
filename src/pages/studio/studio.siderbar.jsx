// ./pages/studio/StudioSidebar.jsx

import React from 'react';
import { useAccess } from '@/context/auth'
import { useNavigate } from 'react-router-dom';
import { 
    faTachometerAlt,
    faPlayCircle,
    faChartBar,
    faUsers, 
    faClosedCaptioning,
    faCopyright,
    faDollarSign,
    faWrench, 
    faCog,
    faCommentDots, 
} from '@fortawesome/free-solid-svg-icons';

import { 
    StudioSidebarExpanded,
    StudioSidebarCollapsed,
    ChannelHeader, 
    UserAvatar,
    ChannelTitle,
    ChannelHandle,
    SidebarItemExpanded,
    SidebarItemCollapsed, 
    SidebarIcon,
    SidebarText 
} from '@pages/studio/studio.style';


const sidebarItems = [
    { icon: faTachometerAlt, text: '資訊主頁', path: 'dashboard' },
    { icon: faPlayCircle, text: '內容', path: 'content' },
    { icon: faChartBar, text: '數據分析', path: 'analytics' },
    { icon: faUsers, text: '社群', path: 'community' },
    { icon: faClosedCaptioning, text: '字幕', path: 'subtitles' },
    { icon: faCopyright, text: '內容偵測', path: 'copyright' },
    { icon: faDollarSign, text: '營利', path: 'monetization' },
    { icon: faWrench, text: '自訂', path: 'customization' },
    { icon: faCog, text: '設定', path: 'settings' },
    { icon: faCommentDots, text: '提供意見', path: 'feedback' },
];

const StudioSidebar = ({ activePath }) => {
    const { user, isLoggedIn } = useAccess();
    const navigate = useNavigate();

    const displayName = user?.displayName || '未登入使用者';
    const channelHandle = `@${user?.email.split('@')[0] || 'guest'}`;
    const photoURL = user?.photoURL;


    const renderItem = (item, isExpanded) => {
        const ItemComponent = isExpanded ? SidebarItemExpanded : SidebarItemCollapsed;
        
        const targetPath = (item.path === 'dashboard') ? '/studio' : `/studio/${item.path}`;

        return (
            <ItemComponent 
                key={item.path} 
                className={item.path === activePath ? 'active' : ''}
                onClick={() => navigate(targetPath)}
            >
                <SidebarIcon 
                    icon={item.icon} 
                    $isExpanded={isExpanded}
                    className={item.path === activePath ? 'active' : ''}
                />
                <SidebarText $isExpanded={isExpanded}>{item.text}</SidebarText>
            </ItemComponent>
        );
    };

    return (
        <>
            {/* 展開 */}
            <StudioSidebarExpanded>
                <ChannelHeader>
                    {isLoggedIn && photoURL ? (
                        <UserAvatar 
                            as="img"
                            src={photoURL}
                            alt={displayName}
                            style={{ backgroundColor: 'transparent' }}
                        />
                    ) : (
                        // 預設的藍色圓圈
                        <UserAvatar />
                    )}
                    
                    {/* 顯示名稱 */}
                    <ChannelTitle>{displayName}</ChannelTitle>
                    <ChannelHandle>{channelHandle}</ChannelHandle>
                </ChannelHeader>
                {sidebarItems.map(item => renderItem(item, true))}
            </StudioSidebarExpanded>
            
            {/* 隱藏 */}
            <StudioSidebarCollapsed>
                {sidebarItems.map(item => renderItem(item, false))}
            </StudioSidebarCollapsed>
        </>
    );
};

export default StudioSidebar;