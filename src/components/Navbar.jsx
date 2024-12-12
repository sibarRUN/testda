import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  CognitoUserPool,
  CognitoUser,
  CognitoUserSession,
  CognitoIdToken,
  CognitoAccessToken,
  CognitoRefreshToken
} from 'amazon-cognito-identity-js';

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
const poolData = {
  UserPoolId: 'ap-northeast-2_jczobrwlq', // Replace with your Cognito User Pool ID
  ClientId: 'e90hcf6rica8am3h81lcsuspe',  // Replace with your Cognito App Client ID
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

  // useNavigate hook from react-router-dom for navigation
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    // URL에서 인증 코드를 확인하는 부분
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get('code');

    if (authCode) {
      // 인증 코드가 있으면 토큰으로 교환하는 함수 호출
      console.log("인증 코드 발견:", authCode); // 디버깅용 로그
      exchangeCodeForToken(authCode);
    }
  }, []);

  const exchangeCodeForToken = async (code) => {
    try {
      console.log("토큰 교환 시작"); // 디버깅용 로그
      
      // Cognito 토큰 엔드포인트 URL 설정
      const tokenEndpoint = `https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/oauth2/token`;
      
      // 요청에 필요한 파라미터 설정
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('client_id', poolData.ClientId);
      params.append('code', code);
      params.append('redirect_uri', 'https://d19kcxe6thj51s.cloudfront.net');

      console.log("요청 파라미터:", params.toString()); // 디버깅용 로그

      // Cognito 토큰 엔드포인트로 POST 요청
      const response = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params
      });

      console.log("응답 상태:", response.status); // 디버깅용 로그

      if (response.ok) {
        // 응답이 성공적이면 토큰 정보를 추출
        const tokens = await response.json();
        console.log("토큰 수신 성공"); // 디버깅용 로그
        
        // localStorage에 토큰들을 저장
        localStorage.setItem('accessToken', tokens.access_token);
        localStorage.setItem('idToken', tokens.id_token);
        localStorage.setItem('refreshToken', tokens.refresh_token);
        
        // 인증 상태를 true로 설정
        setIsAuthenticated(true);
        
        // URL에서 인증 코드 파라미터 제거
        window.history.replaceState({}, document.title, window.location.pathname);
        
        console.log("인증 처리 완료"); // 디버깅용 로그
      } else {
        // 응답이 실패면 에러 로그 출력
        const errorData = await response.text();
        console.error('토큰 교환 실패:', errorData);
        setIsAuthenticated(false);
      }
    } catch (error) {
      // 예외가 발생하면 에러 로그 출력
      console.error('토큰 교환 중 오류 발생:', error);
      setIsAuthenticated(false);
    }
  };

  // 컴포넌트가 처음 로드될 때 localStorage에서 토큰 확인
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    console.log("저장된 액세스 토큰:", accessToken ? '존재' : '없음'); // 디버깅용 로그
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, []);

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
    const user = userPool.getCurrentUser();

    if (user) {
      try {
        const session = await new Promise((resolve, reject) => {
          user.getSession((err, session) => {
            if (err) reject(err);
            else resolve(session);
          });
        });

        if (session.isValid()) {
          window.location.href = 'https://d19kcxe6thj51s.cloudfront.net/bongjini.html';
        } else {
          alert("세션이 만료되었습니다. 다시 로그인해주세요.");
          handleLogout();
        }
      } catch (err) {
        console.error('세션 확인 중 오류:', err);
        alert("로그인 상태를 확인하는 중 오류가 발생했습니다.");
        handleLogout();
      }
    } else {
      alert("로그인이 필요한 서비스입니다.v3.9.5");
      window.location.href = `https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=${poolData.ClientId}&redirect_uri=https%3A%2F%2Fd19kcxe6thj51s.cloudfront.net&response_type=code&scope=email+openid`;
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    // localStorage에서 모든 토큰 제거
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');
    
    setIsAuthenticated(false);
    
    // Cognito 로그아웃 URL로 리디렉션
    const logoutUrl = `https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/logout?client_id=${poolData.ClientId}&logout_uri=https%3A%2F%2Fd19kcxe6thj51s.cloudfront.net`;
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
        {isAuthenticated ? (
          <Item
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={handleLogout}
          >
            <Link to="#">Logout</Link>
          </Item>
        ) : (
          <Item
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={() => window.location.href = `https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=${poolData.ClientId}&redirect_uri=https%3A%2F%2Fd19kcxe6thj51s.cloudfront.net&response_type=code&scope=email+openid`}
          >
            <Link to="#">Login / Register</Link>
          </Item>
        )}

        {/* BonGenie Menu Item */}
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={handleBonggenieClick}
        >
          <Link to="#">BonGenie</Link>
        </Item>
      </MenuItems>
    </NavContainer>
  );
};

// 콜백 처리를 위한 별도의 컴포넌트 생성
const AuthCallback = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      // 토큰 교환 로직
      // 토큰 저장 후 메인 페이지로 리디렉션
      window.location.href = 'https://d19kcxe6thj51s.cloudfront.net/';
    }
  }, []);

  return <div>Processing authentication...</div>;
};

export default Navbar;
