// Navbar.jsx
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

// Styled-components for styling the Navbar and its elements

// NavContainer: The main container for the navigation bar
const NavContainer = styled(motion.div)`
  position: absolute;
  top: ${(props) => (props.click ? '0' : `-${props.theme.navHeight}`)};
  transition: all 0.3s ease;
  z-index: 6;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    top: ${(props) => (props.click ? '0' : `calc(-50vh - 4rem)`)};
  }
`;

// MenuBtn: The button to toggle the menu visibility
const MenuBtn = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;
  border: none;
  outline: none;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  @media (max-width: 40em) {
    width: 10rem;
    height: 2rem;
  }
`;

// MenuItems: The container for the list of menu items
const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 0 10rem;

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
  }
`;

// Item: Individual menu item styling
const Item = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  @media (max-width: 40em) {
    padding: 0.5rem 0;
  }
`;

// Cognito User Pool configuration
const COGNITO_DOMAIN = 'https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com';
const REDIRECT_URI = 'https://d19kcxe6thj51s.cloudfront.net';

const poolData = {
  UserPoolId: 'ap-northeast-2_jczobrwlq',
  ClientId: 'e90hcf6rica8am3h81lcsuspe',
  ClientSecret: 'qu21ju6vdii5mjq974ccasqklekr9ka43a5adaeko4rq9fo5lnk', // 클라이언트 보안키 추가
};

// Initialize the Cognito User Pool
const userPool = new CognitoUserPool(poolData);

// Navbar component definition
const Navbar = () => {
  // State to manage the menu's open/close state
  const [click, setClick] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // LocomotiveScroll for smooth scrolling
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    // Check URL for 'code' parameter
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    console.log("URL 파라미터 확인 - 인증 코드:", code ? '존재' : '없음');

    if (code) {
      exchangeCodeForToken(code);
    } else {
      // Check localStorage for tokens
      const accessToken = localStorage.getItem('accessToken');
      console.log("localStorage 토큰 확인:", accessToken ? '존재' : '없음');
      if (accessToken) {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const exchangeCodeForToken = async (code) => {
    try {
      console.log("토큰 교환 시작, 코드:", code);
      const tokenEndpoint = `${COGNITO_DOMAIN}/oauth2/token`;
      
      // Base64로 client_id와 client_secret를 인코딩
      const clientCredentials = btoa(`${poolData.ClientId}:${poolData.ClientSecret}`);

      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('code', code);
      params.append('redirect_uri', REDIRECT_URI);

      console.log("요청 URL:", tokenEndpoint);
      console.log("요청 파라미터:", params.toString());

      const response = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${clientCredentials}`, // Basic Authentication 헤더 추가
        },
        body: params
      });

      console.log("응답 상태:", response.status);

      if (response.ok) {
        const tokens = await response.json();
        console.log("토큰 수신 성공");

        // 토큰 저장 전 확인
        console.log("토큰 정보:", {
          accessToken: tokens.access_token ? '존재' : '없음',
          idToken: tokens.id_token ? '존재' : '없음',
          refreshToken: tokens.refresh_token ? '존재' : '없음'
        });

        // Store tokens in localStorage
        localStorage.setItem('accessToken', tokens.access_token);
        localStorage.setItem('idToken', tokens.id_token);
        localStorage.setItem('refreshToken', tokens.refresh_token);
        
        setIsAuthenticated(true);
        
        // Remove the 'code' parameter from URL
        window.history.replaceState({}, document.title, window.location.pathname);
        
        return true;
      } else {
        const errorData = await response.json();
        console.error('토큰 교환 실패:', errorData);
        setIsAuthenticated(false);
        alert(`토큰 교환 실패: ${errorData.error_description || errorData.error}`);
        return false;
      }
    } catch (error) {
      console.error('토큰 교환 중 오류:', error);
      setIsAuthenticated(false);
      alert('토큰 교환 중 오류가 발생했습니다. 다시 시도해주세요.');
      return false;
    }
  };

  // Function to handle scrolling to specific sections
  const handleScroll = (id) => {
    const elem = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '500',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  // Function to handle the 'BonGenie' button click
  const handleBonggenieClick = async (event) => {
    event.preventDefault();
    console.log("봉지니 버튼 클릭됨");
    
    // Check localStorage directly
    const accessToken = localStorage.getItem('accessToken');
    console.log("저장된 액세스 토큰:", accessToken ? '존재' : '없음');

    if (accessToken) {
      try {
        // Navigate to BonGenie page
        console.log("인증된 상태로 봉지니 페이지 접근");
        window.location.href = `${REDIRECT_URI}/bongjini.html`;
      } catch (err) {
        console.error('페이지 이동 중 오류:', err);
        alert("페이지 접근 중 오류가 발생했습니다.");
        handleLogout();
      }
    } else {
      console.log("미인증 상태 - 로그인 페이지로 리디렉션");
      alert("BonGenie는 로그인 후 사용하실 수 있습니다.");
      window.location.href = `${COGNITO_DOMAIN}/login?client_id=${poolData.ClientId}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=email+openid`;
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    // Remove tokens from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');
    
    setIsAuthenticated(false);
    
    // Redirect to Cognito logout
    const logoutUrl = `${COGNITO_DOMAIN}/logout?client_id=${poolData.ClientId}&logout_uri=${encodeURIComponent(REDIRECT_URI)}`;
    window.location.href = logoutUrl;
  };

  return (
    <NavContainer
      click={+click}
      initial={{ y: `-100%` }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        {/* Menu Button to toggle menu visibility */}
        <MenuBtn onClick={() => setClick(!click)}>
          <span>MENU</span>
        </MenuBtn>

        {/* Home Menu Item */}
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('#home')}
        >
          <Link to="/">Home</Link>
        </Item>

        {/* About Menu Item */}
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('.about')}
        >
          <Link to="/">About</Link>
        </Item>

        {/* Shop Menu Item */}
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('#shop')}
        >
          <Link to="/">Shop</Link>
        </Item>

        {/* Login / Register or Logout Menu Item */}
        {!isAuthenticated ? (
          <Item
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={() => {
              console.log("로그인 버튼 클릭");
              // Login URL
              const loginUrl = `${COGNITO_DOMAIN}/login?client_id=${poolData.ClientId}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=email+openid`;
              console.log("로그인 URL:", loginUrl);
              window.location.href = loginUrl;
            }}
          >
            <Link to="#" onClick={(e) => e.preventDefault()}>Login / Register</Link>
          </Item>
        ) : (
          <Item
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={handleLogout}
          >
            <Link to="#">Logout</Link>
          </Item>
        )}

        {/* BonGenie Menu Item */}
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={handleBonggenieClick}
        >
          <Link to="#">BonGenieV2</Link>
        </Item>
      </MenuItems>
    </NavContainer>
  );
};

export default Navbar;
