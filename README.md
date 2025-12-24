# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


npm run dev
npm run build

# database

eachVideos = [
  {
    id: 1,
    title: '澳洲墨爾本最近滑雪場Mount Buller攻略',
    videoPicture: 'https://cdn.pixabay.com/photo/2020/02/10/01/24/skiing-4835024_1280.jpg',
    videoLength: '10:51',
    channelUserPicture: 'https://cdn.pixabay.com/photo/2014/10/22/18/04/man-498473_1280.jpg',
    channelName: 'Jack123',
    views: '6.6萬',
    uploadedTime: '13 天前',
    isLive: false,
    isSeries: false,
    category: '旅遊',
    description:
      '這是一個非常詳細的澳洲墨爾本最近滑雪場Mount Buller旅遊攻略。\n' + 
      '我們將分享如何前往、租賃裝備、最佳滑雪路線，以及周邊住宿和美食推薦！\n'+
      '快來計畫你的下一次雪地探險吧！歡迎訂閱我的頻道！\n'+
      'asfjnakjgn;kjankdjnvjdn;jnwpinskjva;sn;eiaoejfoij',
    videoUrl: 'https://cdn.pixabay.com/video/2019/02/19/21511-318977956_tiny.mp4', 
    subscriberCount: '2.8萬',
    likeCount: '1.2萬'
  }, {...}]

Messages = [
  { 
        id: 1, 
        videoId: 1,
        author: '@enzdellaemmna',
        time: '7 小時前',
        text: 'Thank you to share good infomations.',
        authorPicture: 'https://cdn.pixabay.com/photo/2025/09/18/14/08/woman-9841247_1280.jpg',
  }, {...}]

relateTabs = [
    {
        id: 'all',
        Name: '全部',
        taglist: 'all',
        isLiveValue: null,
    },{...}]

# architecture

App
main
component
∟ list \\觀看頁面右側的播放清單標籤篩選功能
∟ message \\影片下方的留言區
∟ profilemenu \\點擊頭像的登入列表
∟ resize \\用用於響應式佈局偵測與調整

∟ videocard.components
  ∟ describeSection \\影片觀看頁面的資訊介紹區
  ∟ eachvideocard \\首頁中單一影片卡片
  ∟ menu \\ 用於影片卡片的選單
  ∟ videocardthumbnail \\負責影片卡片上方的標籤和動態效果
  ∟ viddeolistcard \\觀看頁面右側的推薦列表

∟ time \\用於時間倒數計時元件
∟ formatviewcount \\用於數字呈現方式的元件
∟ firebase \\用於處理身份驗證及雲端資料庫功能

context
  ∟ auth \\用於身份驗證
  ∟ fetch \\從google excel取得數據(此處連接Google App Script 連結)

page
∟ history \\history頁面內容
∟ home \\資料載入狀態處理
∟ logpage
  ∟ unloggin \\未登入時的頁面

∟ personal \\personal頁面內容
∟ shorts \\shorts頁面內容
∟ sidebar
  ∟ extendsidebar \\側邊欄展開時內容
  ∟ minisidebar \\側邊欄縮小時內容


∟ studio \\YouTube工作室頁面
  ∟ studio.index \\主頁
  ∟ studio.siderbar \\側邊欄

∟ subscription \\subscription頁面內容

∟ watch \\影片觀看頁面
  ∟ index \\主頁
  


