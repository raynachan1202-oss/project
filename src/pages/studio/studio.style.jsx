import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StudioPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f9f9f9;
`;

export const StudioContentWrapper = styled.div`
    display: flex;
    flex-grow: 1;
`;

//主內容區
export const DashboardArea = styled.main`
    flex-grow: 1;
    padding: 20px;
    
    margin-left: 240px;

    @media (max-width: 950px) {
        margin-left: 72px;
    }
`;

export const DashboardTitleH1 = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const DashboardFlexRow = styled.div`
    display: flex; 
    /* flex-wrap: wrap;  */
    /* margin-top: 20px; */

`;

//頁面底部連結
export const FooterContainer = styled.div`
    display: flex;
    font-size: 12px;
    color: #606060;
    margin-top: 40px;
    padding-left: 20px;
`;

export const FooterLink = styled.a.attrs({
    href: '#',
})`
    margin-right: 15px;
    color: #606060;
    text-decoration: none;
    cursor: pointer;
`;


//卡片的內容(左邊)
export const Card = styled.div`
    width: 350px;
    height: 450px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    padding: 20px;
    margin-bottom: 20px;
`;

export const UploadCardWrapper = styled(Card)`
    /* flex-grow: 1; */
    margin-right: 20px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const UploadContentCenter = styled.div`
    text-align: center;
    max-width: 300px;
`;

export const IconPlaceholder = styled.div`
    width: 150px;
    height: 120px;
    background-color: #e8f0fe;
    margin: 0 auto 20px;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
`;

export const StudioSidebarIcon = styled(FontAwesomeIcon).attrs({
    // 設定 FontAwesomeIcon 的屬性
    size: "3x", 
    color: "#1a73e8" 
})`
    margin-top: 30px; 
`;

export const UploadTextP = styled.p`
    margin: 0;
    text-align: center;
`;

export const UploadMarginP = styled.p`
    margin-bottom: 20px;
    text-align: center;
`;

export const UploadButton = styled.button`
    background-color: #0f0f0f; 
    color: white; 
    border: none; 
    padding: 10px 20px; 
    border-radius: 50px;
    font-weight: bold;
    cursor: pointer;
`;


//數據分析卡片的內容(右邊)
export const AnalyticsCardWrapper = styled(Card)`
    width: 350px;
`;

export const CardTitleH4 = styled.h4`
    margin: 0 0 10px 0;
`;

export const CardTitleH1 = styled.h1`
    font-size: 48px;
    margin: 10px 0;
`;

export const CardSummaryP = styled.p`
    color: #606060;
    font-size: 12px;
    margin: 15px 0;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
`;

export const AnalyticsDataSection = styled.div`
    padding: 10px 0;
`;

export const DataPeriodP = styled.p`
    color: #606060;
    margin: 0 0 5px 0;
`;

export const DataRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    
    &:nth-last-child(2) {
        border-bottom: 1px solid #eee;
    }
`;
export const DataTextSpan = styled.span`
`;
export const AnalyticsH4Spacing = styled.h4`
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const AnalyticsSmallText = styled.p`
    color: #606060;
    font-size: 12px;
    margin: 5px 0 15px 0;
`;
export const AnalyticsButton = styled.button`
    background-color: transparent; 
    color: #606060; 
    border: 1px solid #606060; 
    padding: 8px 15px; 
    border-radius: 50px; 
    cursor: pointer;
    font-weight: 500;
`;

/* -------------------------- *\
	sliderbar區域
\* -------------------------- */

// 展開版容器
export const StudioSidebarExpanded = styled.nav`
    width: 240px; 
    background-color: white;
    padding-top: 10px;
    flex-shrink: 0;
    height: calc(100vh - 50px);
    position: fixed;
    top: 50px;
    left: 0;
    overflow-y: auto;
    border-right: 1px solid #e5e5e5;
    
    @media (max-width: 950px) {
        display: none; 
    }
`;
export const ChannelHeader = styled.div`
    padding: 0 24px 10px; 
    margin-bottom: 10px;
    text-align: center;
`;
export const UserAvatar = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #5c6bc0;
    margin: 15px 0 0 0;

    &[as="img"] {
        object-fit: cover;
    }
`;

export const ChannelTitle = styled.p`
    font-weight: bold;
    font-size: 14px;
    margin: 0 0 2px 0;
`;
export const ChannelHandle = styled.p`
    color: #606060;
    font-size: 12px;
    margin: 0;
`;

// 摺疊版
export const StudioSidebarCollapsed = styled.nav`
    width: 72px; 
    background-color: white;
    padding-top: 10px;
    flex-shrink: 0;
    height: calc(100vh - 50px);
    position: fixed;
    top: 50px;
    left: 0;
    overflow-y: auto;
    border-right: 1px solid #e5e5e5;
    
    @media (min-width: 950px) {
        display: none; 
    }
`;

// 側邊欄選項樣式
export const SidebarItemExpanded = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 24px;
    cursor: pointer;
    color: #606060;
    text-decoration: none;
    
    &.active {
        background-color: #f2f2f2;
        color: black;
    }
    &:hover {
        background-color: #f2f2f2;
    }
`;

export const SidebarItemCollapsed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
    color: #606060;
    
    &.active {
        background-color: #f2f2f2;
        color: black;
    }
    &:hover {
        background-color: #f2f2f2;
    }
`;

export const SidebarIcon = styled(FontAwesomeIcon)`
    width: 24px;
    height: 24px;
    margin-right: ${({ $isExpanded }) => ($isExpanded ? '15px' : '0')};
    margin-bottom: ${({ $isExpanded }) => ($isExpanded ? '0' : '4px')};
`;

export const SidebarText = styled.span`
    font-size: ${({ $isExpanded }) => ($isExpanded ? '14px' : '10px')};
    white-space: nowrap;
`;

