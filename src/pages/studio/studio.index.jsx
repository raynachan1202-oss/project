// ./pages/studio/StudioPage.jsx

import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, } from '@fortawesome/free-solid-svg-icons'; 


import {
    StudioPageContainer,
    StudioContentWrapper,
    DashboardArea,
    FooterContainer,
    AnalyticsCardWrapper,
    CardTitleH1,
    CardSummaryP,
    AnalyticsDataSection,
    DataPeriodP,
    DataRow,
    AnalyticsButton,
    UploadCardWrapper,
    UploadContentCenter,
    IconPlaceholder,
    UploadButton,
    DashboardTitleH1,
    DashboardFlexRow,
    CardTitleH4,
    AnalyticsH4Spacing,
    AnalyticsSmallText,
    UploadTextP,
    UploadMarginP,
    FooterLink,
    DataTextSpan,
    StudioSidebarIcon
} from '@pages/studio/studio.style.jsx';

import StudioSidebar from '@pages/studio/studio.siderbar';

const ContentPage = () => <DashboardTitleH1>內容管理頁面</DashboardTitleH1>;
const AnalyticsPage = () => <DashboardTitleH1>數據分析頁面</DashboardTitleH1>;
const CommunityPage = () => <DashboardTitleH1>社群頁面</DashboardTitleH1>;
const SubtitlesPage = () => <DashboardTitleH1>字幕頁面</DashboardTitleH1>;
const CopyrightPage = () => <DashboardTitleH1>內容偵測頁面</DashboardTitleH1>;
const MonetizationPage = () => <DashboardTitleH1>營利頁面</DashboardTitleH1>;
const CustomizationPage = () => <DashboardTitleH1>自訂頁面</DashboardTitleH1>;
const SettingsPage = () => <DashboardTitleH1>設定頁面</DashboardTitleH1>;
const FeedbackPage = () => <DashboardTitleH1>提供意見頁面</DashboardTitleH1>;

const StudioPage = () => {
    const location = useLocation();

    const activePathName = location.pathname.split('/')[2] || 'dashboard';
    
    const handleStudioNav = (path) => {
        setActiveStudioPath(path);
        console.log(`切換到 Studio 路徑: ${path}`);
    };
    
    // 卡片的內容(左邊)
    const renderUploadCard = () => (
        <UploadCardWrapper>
            <UploadContentCenter>
                <IconPlaceholder>
                    <StudioSidebarIcon icon={faPen} />
                </IconPlaceholder>
                <UploadTextP>想要檢視近期影片的各項指標資訊嗎？</UploadTextP>
                <UploadMarginP>上傳並發布影片後就立即開始！</UploadMarginP>
                <UploadButton>上傳影片</UploadButton>
            </UploadContentCenter>
        </UploadCardWrapper>
    );

    // 數據分析卡片的內容(右邊)
    const renderAnalyticsCard = () => (
        <AnalyticsCardWrapper>
            <CardTitleH4>頻道數據分析</CardTitleH4>
            <CardTitleH1>0</CardTitleH1>
            <CardSummaryP>摘要</CardSummaryP>
            
            <AnalyticsDataSection>
                <DataPeriodP>過去 28 天</DataPeriodP>
                <DataRow>
                    <DataTextSpan>觀看次數</DataTextSpan>
                    <DataTextSpan>0</DataTextSpan>
                </DataRow>
                <DataRow>
                    <DataTextSpan>觀看時間 (小時)</DataTextSpan>
                    <DataTextSpan>0.0</DataTextSpan>
                </DataRow>
            </AnalyticsDataSection>
            
            <AnalyticsH4Spacing>熱門影片</AnalyticsH4Spacing>
            <AnalyticsSmallText>過去 48 小時，觀看次數</AnalyticsSmallText>
            <AnalyticsButton>前往頻道數據分析頁面</AnalyticsButton>
        </AnalyticsCardWrapper>
    );

    {/* 頻道資訊主頁 */}
    const DashboardContent = () => (
        <>
            <DashboardTitleH1>頻道資訊主頁</DashboardTitleH1>
            <DashboardFlexRow>
                {renderUploadCard()}
                {renderAnalyticsCard()}
            </DashboardFlexRow>

            {/* 頁面底部連結 */}
            <FooterContainer>
                <FooterLink href="#">使用條款</FooterLink>
                <FooterLink href="#">隱私權政策</FooterLink>
                <FooterLink href="#">政策與安全性</FooterLink>
            </FooterContainer>
        </>
    );

    return (
        <StudioPageContainer>
            <StudioContentWrapper>
                {/* 側邊欄元件 */}
                <StudioSidebar 
                    activePath={activePathName}
                />

                {/* 畫面切換 */}
                <DashboardArea>
                    <Routes>
                        {/* 資訊主頁 */}
                        <Route path="/" element={<DashboardContent />} />
                        
                        {/* 內容 */}
                        <Route path="content" element={<ContentPage />} /> 
                        
                        {/* 數據分析 */}
                        <Route path="analytics" element={<AnalyticsPage />} />

                        {/* 社群 */}
                        <Route path="community" element={<CommunityPage />} />

                        {/* 字幕 */}
                        <Route path="subtitles" element={<SubtitlesPage />} />

                        {/* 內容偵測 */}
                        <Route path="copyright" element={<CopyrightPage />} />
                        
                        {/* 營利 */}
                        <Route path="monetization" element={<MonetizationPage />} />

                        {/* 自訂 */}
                        <Route path="customization" element={<CustomizationPage />} />

                        {/* 設定 */}
                        <Route path="settings" element={<SettingsPage />} />

                        {/* 提供意見 */}
                        <Route path="feedback" element={<FeedbackPage />} />
                        
                    </Routes>

                    
                </DashboardArea>
                
            </StudioContentWrapper>
        </StudioPageContainer>
    );
};

export default StudioPage;