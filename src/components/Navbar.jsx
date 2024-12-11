import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  CognitoUserPool,
  CognitoUser,
  CognitoUserSession,
  CognitoIdToken,
  CognitoAccessToken,
  CognitoRefreshToken
} from 'amazon-cognito-identity-js';

// 스타일링: 네비게이션 컨테이너
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

// 스타일링: 메뉴 버튼
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

// 스타일링: 메뉴 항목 리스트
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

// 스타일링: 개별 메뉴 항목
const Item = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  @media (max-width: 40em) {
    padding: 0.5rem 0;
  }
`;

// Cognito User Pool 설정
const poolData = {
  UserPoolId: 'ap-northeast-2_jczobrwlq', // 실제 Cognito User Pool ID
  ClientId: 'e90hcf6rica8am3h81lcsuspe',  // 실제 App Client ID
};

// Cognito User Pool 객체 생성
const userPool = new CognitoUserPool(poolData);

const Navbar = () => {
  // 메뉴 클릭 상태 관리
  const [click, setClick] = useState(false);

  // LocomotiveScroll 라이브러리 사용
  const { scroll } = useLocomotiveScroll();

  // React Router를 사용한 페이지 이동
  const navigate = useNavigate();

  // useEffect: 로그인 코드 처리 및 세션 설정
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code'); // URL에서 "code" 파라미터 가져오기
    if (code) {
      // Cognito 토큰 교환 요청 생성
      const data = new URLSearchParams();
      data.append('grant_type', 'authorization_code');
      data.append('client_id', 'e90hcf6rica8am3h81lcsuspe');
      data.append('code', code);
      data.append('redirect_uri', 'http://testdasibar.s3-website.ap-northeast-2.amazonaws.com/bongjini.html/'); 

      fetch('https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
      })
      .then(res => res.json())
      .then(tokens => {
        // 토큰을 기반으로 세션 설정
        if (tokens.id_token && tokens.access_token && tokens.refresh_token) {
          const idToken = new CognitoIdToken({ IdToken: tokens.id_token });
          const accessToken = new CognitoAccessToken({ AccessToken: tokens.access_token });
          const refreshToken = new CognitoRefreshToken({ RefreshToken: tokens.refresh_token });
          const session = new CognitoUserSession({
            IdToken: idToken,
            AccessToken: accessToken,
            RefreshToken: refreshToken
          });

          // Cognito 사용자 정보 설정
          const username = idToken.payload['cognito:username'];
          const user = new CognitoUser({
            Username: username,
            Pool: userPool
          });

          // 사용자 세션 저장
          user.setSignInUserSession(session);

          // URL에서 "code" 파라미터 제거
          const newUrl = window.location.origin + window.location.pathname;
          window.history.replaceState({}, document.title, newUrl);
        }
      })
      .catch(err => {
        console.error("토큰 교환 실패: ", err);
      });
    }
  }, []);

  // 특정 ID로 스크롤 이동
  const handleScroll = (id) => {
    const elem = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '500',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  // BongGenie 버튼 클릭 처리
  const handleBonggenieClick = (event) => {
    event.preventDefault();
    const user = userPool.getCurrentUser(); // 현재 사용자 가져오기
    if (!user) {
      // 사용자 세션 확인
      user.getSession((err, session) => {
        if (err || !session.isValid()) {
          alert("잘못된 접근입니다. 로그인해주세요.");
          // 로그인 페이지로 리디렉션
          window.location.href = 'https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&redirect_uri=https://d209iioos46fo1.cloudfront.net&response_type=code&scope=email+openid';
        } else {
          // BongGenie 페이지로 이동
          window.location.href = 'http://testdasibar.s3-website.ap-northeast-2.amazonaws.com/bongjini.html';
        }
      });
      return;
    } else {
      // 로그인하지 않은 경우 경고 메시지
      alert("봉지니는 로그인 후 사용하실 수 있습니다.");
      window.location.href = 'https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&redirect_uri=https://d209iioos46fo1.cloudfront.net&response_type=code&scope=email+openid';
    }
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
        <MenuBtn onClick={() => setClick(!click)}>
          <span>MENU</span>
        </MenuBtn>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('#home')}
        >
          <Link to="/">Home</Link>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('.about')}
        >
          <Link to="/">About</Link>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('#shop')}
        >
          <Link to="/">Shop</Link>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => window.location.href = 'https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&redirect_uri=https://d209iioos46fo1.cloudfront.net&response_type=code&scope=email+openid'}
        >
          <Link to="#">Login / Register</Link>
        </Item>
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

export default Navbar;
