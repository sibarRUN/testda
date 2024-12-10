import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

// 네비게이션 컨테이너 스타일 정의
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

// 메뉴 버튼 스타일 정의
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

// 메뉴 아이템 스타일 정의
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

// 개별 메뉴 아이템 스타일 정의
const Item = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  @media (max-width: 40em) {
    padding: 0.5rem 0;
  }
`;

// Cognito User Pool 설정
const poolData = {
  UserPoolId: 'ap-northeast-2_jczobrwlq', // 사용자 풀 ID
  ClientId: 'e90hcf6rica8am3h81lcsuspe',  // 앱 클라이언트 ID
};

const userPool = new CognitoUserPool(poolData);

const Navbar = () => {
  const [click, setClick] = useState(false); // 메뉴 클릭 상태 관리

  const { scroll } = useLocomotiveScroll(); // 스크롤 기능 사용
  const navigate = useNavigate(); // 페이지 이동 기능 사용

  // 특정 요소로 스크롤하는 함수
  const handleScroll = (id) => {
    const elem = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '500',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  // 봉지니 버튼 클릭 시 처리 함수
  const handleBonggenieClick = (event) => {
    event.preventDefault();
    const user = userPool.getCurrentUser();
    if (user) {
      user.getSession((err, session) => {
        if (err || !session.isValid()) {
          // 세션이 유효하지 않으면 알람 후 로그인 페이지로 리디렉션
          alert("봉지니는 로그인 후 사용하실 수 있습니다.");
          window.location.href = 'https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd2c37b9hnb6ap4.cloudfront.net';
        } else {
          // 세션이 유효하면 bongjini.html 페이지로 이동
          window.location.href = '/bongjini.html';
        }
      });
    } else {
      // 사용자가 없으면 알람 후 로그인 페이지로 리디렉션
      alert("봉지니는 로그인 후 사용하실 수 있습니다.");
      window.location.href = 'https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd2c37b9hnb6ap4.cloudfront.net';
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
          onClick={() => window.location.href = 'https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login/continue?client_id=e90hcf6rica8am3h81lcsuspe&redirect_uri=https%3A%2F%2Fd2c37b9hnb6ap4.cloudfront.net&response_type=code&scope=email+openid'}
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
