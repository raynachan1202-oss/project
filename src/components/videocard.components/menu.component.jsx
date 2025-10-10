import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faEllipsisV,
  faDownload,
  faShare,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import {
  faClock,
  faFaceMeh,
  faFaceFrown,
  faFlag,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';

import {
  MoreOptions,
  MoreIcon,
  MenuContainer,
  MenuItem,
} from '@components/videocard.components/videocard.style.components'

// 接收來自index.component裡的videocard的props
function VideoCardMenu({ isMenuOpen, handleMenuToggle, handleMenuClose }) {
    
    const handleMenuItemClick = (e, action) => {
        e.preventDefault();
        e.stopPropagation();
        handleMenuClose(); 
        
        console.log(action);
    };

    return (
        <>
            <MoreOptions onClick={handleMenuToggle}>
                <MoreIcon icon={faEllipsisV} />
            </MoreOptions>

            {isMenuOpen && (
                <MenuContainer>
                    <MenuItem onClick={(e) => handleMenuItemClick(e, '加入待播清單')}><FontAwesomeIcon icon={faRightFromBracket} /> 加入待播清單</MenuItem>
                    <MenuItem onClick={(e) => handleMenuItemClick(e, '儲存至稍後觀看')}><FontAwesomeIcon icon={faClock} /> 儲存至「稍後觀看」清單</MenuItem>
                    <MenuItem onClick={(e) => handleMenuItemClick(e, '儲存至播放清單')}><FontAwesomeIcon icon={faBookmark} /> 儲存至播放清單</MenuItem>
                    <MenuItem onClick={(e) => handleMenuItemClick(e, '下載')}><FontAwesomeIcon icon={faDownload} /> 下載</MenuItem>
                    <MenuItem onClick={(e) => handleMenuItemClick(e, '分享')}><FontAwesomeIcon icon={faShare} /> 分享</MenuItem>
                    <MenuItem onClick={(e) => handleMenuItemClick(e, '不感興趣')}><FontAwesomeIcon icon={faFaceMeh} /> 不感興趣</MenuItem>
                    <MenuItem onClick={(e) => handleMenuItemClick(e, '不要推薦這個頻道')}><FontAwesomeIcon icon={faFaceFrown} /> 不要推薦這個頻道</MenuItem>
                    <MenuItem onClick={(e) => handleMenuItemClick(e, '檢舉')}><FontAwesomeIcon icon={faFlag} /> 檢舉</MenuItem>

                </MenuContainer>
            )}
        </>
    );
}

export default VideoCardMenu;