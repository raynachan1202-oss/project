// // src/pages/logpage/login.jsx (LoginPage)

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { useAccess } from '@/context/authcontext'; 

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//     faCircleUser, 
//     faUserMinus, 
//     faCaretDown,
//     faArrowLeft,
// } from '@fortawesome/free-solid-svg-icons';

// const FullScreenContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     min-height: 100vh;
//     background-color: #f8f9fa;
//     position: relative;
//     padding: 0px 30px;
// `;

// const LoginCard = styled.div`
//     display: flex;
//     width: 100%;
//     height: 384px;
//     padding: 48px;
//     justify-content: space-around;
//     border: 1px solid #dadce0;
//     border-radius: 28px;
//     box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08);

//     position: relative;
// `;

// const LeftSection = styled.div`
//     display: flex;
//     width: 350px;
//     flex-direction: column;
//     align-items: flex-start;
// `;

// const RightSection = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start; 
//     justify-content: center;
//     padding: 24px;
// `;

// const GoogleLogo = styled.img`
//     width: 45px;
//     margin-bottom: 20px;
// `;

// const MainTitle = styled.p`
//     font-size: 35px;
//     font-weight: 400;
// `;
// const Text = styled.p`
//     font-size: 15px;
//     font-weight: 400;
//     padding: 10px 0;

// `;

// const AccountItem = styled.div`
//     display: flex;
//     align-items: center;
//     width: 350px;
//     padding: 16px 10px;
//     cursor: pointer;

//     border-bottom: 1px solid #e1e1e1;

//     &:hover {
//         background-color: #e8f0fe;
//         border-radius: 20px; 
//     }
// `;

// const UserInfo = styled.div`
//     display: flex;
//     align-items: center;
//     text-align: left;
    
// `;
// const OptionText = styled.span`
//     margin-left: 6px; 
//     font-size: 14px;
// `;

// const UserAvatar = styled.div`
//     width: 32px;
//     height: 32px;
//     border-radius: 50%;
//     background-color: #4285f4; 
//     color: white;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 14px;
//     font-weight: bold;
//     margin-right: 16px;
// `;
// const UserDetails = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const UserName = styled.span`
//     font-size: 14px;
//     font-weight: 500;
// `;

// const UserEmail = styled.span`
//     font-size: 12px;
// `;

// const StatusText = styled.span`
//     font-size: 12px;
//     margin-left: auto;
// `;


// const OptionIcon = styled(FontAwesomeIcon)`
//     font-size: 20px;
//     margin-right: 16px;
// `;

// const LoginFormContainer = styled.form`
//     width: 100%;
//     padding-top: 20px;
// `;

// const Input = styled.input`
//     width: 100%;
//     padding: 15px;
//     margin-bottom: 15px;
//     border: 1px solid #dadce0;
//     border-radius: 4px;
//     box-sizing: border-box;
//     font-size: 16px;
//     &:focus {
//         border-color: #1a73e8;
//         outline: 2px solid #e8f0fe;
//     }
// `;

// const SubmitButton = styled.button`
//     width: auto;
//     padding: 10px 24px;
//     background-color: #1a73e8;
//     color: white;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 14px;
//     font-weight: 500;
//     transition: background-color 0.3s;

//     &:hover {
//         background-color: #1669c5;
//     }
// `;

// const ErrorMessage = styled.p`
//     color: red;
//     font-size: 14px;
//     margin-bottom: 10px;
// `;

// const BackButton = styled.button`
//     background: none;
//     color: #1669c5;
//     border: none;
//     cursor: pointer;
//     font-size: 12px;
//     padding: 0;
//     margin-bottom: 10px;
//     display: flex;
//     align-items: center;
    
//     &:hover {
//         text-decoration: underline;
//     }
// `;

// const GlobalFooterLinksBar = styled.div`
//     position: absolute;
//     bottom: 160px;
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     font-size: 12px;
//     color: #5f6368;
//     padding: 0 40px;
//     z-index: 10;
// `;

// const HelpLinksGroup = styled.div`
//     display: flex;
//     align-items: center;
// `;

// const FooterLink = styled.a`
//     margin-left: 16px; 
//     text-decoration: none;
//     color: #5f6368;

//     &:hover {
//         text-decoration: underline;
//     }
// `;

// const LanguageSelector = styled.span`
//     cursor: pointer;
//     display: flex;
//     align-items: center;
// `;


// const VIEWS = {
//     SELECT_ACCOUNT: 'SELECT_ACCOUNT', 
//     LOGIN_FORM: 'LOGIN_FORM',         
// };

// const LoginPage = () => {
//     const [view, setView] = useState(VIEWS.SELECT_ACCOUNT);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const navigate = useNavigate(); 
//     const { login } = useAccess();

//     // 用戶的假資料
//     const account = {
//         name: "Rayna Chan",
//         email: "raynachan1202@gmail.com",
//         initial: "R",
//         isLoggedOut: true,
//     };
    
//     // 空白登入表單
//     const handleSwitchToLogin = (text = '') => {
//         setUsername(text);
//         setPassword('');
//         setError('');
//         setView(VIEWS.LOGIN_FORM);
//     };

//     const handleLogin = (e) => {
//         e.preventDefault();
//         setError('');

//         if (login(username, password)) {
//             navigate('/'); 
//         } else {
//             setError('登入失敗，請檢查帳號密碼。');
//         }
//     };

//     // 返回帳戶選擇畫面
//     const handleBack = () => {
//         setView(VIEWS.SELECT_ACCOUNT);
//         setUsername('');
//         setError('');
//         setPassword('');
//     };

//     const renderAccountSelect = () => (
//         <>
//             {/* 用戶的假資料 */}
//             <AccountItem>
//                 <UserInfo>
//                     <UserAvatar>{account.initial}</UserAvatar>
//                     <UserDetails>
//                         <UserName>{account.name}</UserName>
//                         <UserEmail>{account.email}</UserEmail>
//                     </UserDetails>
//                 </UserInfo>
//                 <StatusText>{account.isLoggedOut ? '已登出' : ''}</StatusText>
//             </AccountItem>

//             {/* 點擊使用其他帳戶後進入空白登入表單*/}
//             <AccountItem onClick={() => handleSwitchToLogin()}>
//                 <OptionIcon icon={faCircleUser} />
//                 <OptionText>使用其他帳戶</OptionText>
//             </AccountItem>

//             {/* 移除帳戶 */}
//             <AccountItem onClick={() => console.log('點擊移除帳戶')}>
//                 <OptionIcon icon={faUserMinus} />
//                 <OptionText>移除帳戶</OptionText>
//             </AccountItem>
//         </>
//     );

//     const renderLoginForm = () => (
//         <LoginFormContainer onSubmit={handleLogin}>
//             {/* 返回按鈕 */}
//             <BackButton type="button" onClick={handleBack}>
//                 <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '8px' }} />
//                 返回
//             </BackButton>

//             {/* 登入表單標題 */}
//             <MainTitle>
//                 登入
//             </MainTitle>
            
//             <Text>
//                 請輸入您的密碼
//             </Text>
            
//             <Input 
//                 type="text" 
//                 placeholder="電子郵件或電話號碼" 
//                 value={username} 
//                 onChange={e => setUsername(e.target.value)} 
//                 required
//             />
//             <Input 
//                 type="password" 
//                 placeholder="密碼" 
//                 value={password} 
//                 onChange={e => setPassword(e.target.value)} 
//                 required 
//             />
            
//             {error && <ErrorMessage>{error}</ErrorMessage>}

//             <SubmitButton type="submit">登入</SubmitButton>
//         </LoginFormContainer>
//     );

//     //登入畫面
//     return (
//         <FullScreenContainer>
//             <LoginCard>
                
//                 {/* 左邊 */}
//                 <LeftSection>
//                     <GoogleLogo 
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" 
//                         alt="Google Logo" 
//                     />
//                     <MainTitle>
//                         {view === VIEWS.SELECT_ACCOUNT ? '選擇帳戶' : '登入'}
//                     </MainTitle>
//                 </LeftSection>

//                 {/* 右邊 */}
//                 <RightSection>
//                     {view === VIEWS.SELECT_ACCOUNT 
//                         ? renderAccountSelect() 
//                         : renderLoginForm()}
//                 </RightSection>
//             </LoginCard>
            
//             {/* 下面灰字 */}
//             <GlobalFooterLinksBar>
//                 <LanguageSelector>
//                     繁體中文 <FontAwesomeIcon icon={faCaretDown} />
//                 </LanguageSelector>
//                 <HelpLinksGroup>
//                     <FooterLink href="#">說明</FooterLink>
//                     <FooterLink href="#">隱私權設定</FooterLink>
//                     <FooterLink href="#">條款</FooterLink>
//                 </HelpLinksGroup>
//             </GlobalFooterLinksBar>
//         </FullScreenContainer>
//     );
// };

// export default LoginPage;