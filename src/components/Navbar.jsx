import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CognitoUserPool } from 'amazon-cognito-identity-js';


const NavContainer = styled(motion.div)`
  position: absolute;
  /* left: 50%; */
  top: ${(props) => (props.click ? '0' : `-${props.theme.navHeight}`)};
  transition: all 0.3s ease;
  /* transform: translateX(-50%); */
  z-index: 6;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  
  @media (max-width: 40em) {
    top: ${(props) => (props.click ? '0' : `calc(-50vh - 4rem)`)};

  }
`;

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

  /* border-end-start-radius: 50%; */

  /* border-end-end-radius: 50%; */

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
    flex-direction:column;
    padding:2rem 0;
    height: 50vh;
  }
`;

const Item = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  @media (max-width: 40em) {
    flex-direction:column;
    padding:0.5rem 0;

  }
`;

// Cognito User Pool 설정
const poolData = {
  UserPoolId: 'ap-northeast-2_jczobrwlq', // 사용자 풀 ID
  ClientId: 'e90hcf6rica8am3h81lcsuspe',  // 앱 클라이언트 ID
};

const userPool = new CognitoUserPool(poolData);

const Navbar = () => {
  const [click, setClick] = useState(false);

  const { scroll } = useLocomotiveScroll();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const user = userPool.getCurrentUser(); // 현재 사용자 가져오기
      if (user) {
        user.getSession((err, session) => {
          if (err || !session.isValid()) {
            // 세션이 유효하지 않으면 로그인 페이지로 리디렉션
            window.location.href = 'https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd2u50llkglor25.cloudfront.net';
          }
        });
      } else {
        // 사용자가 없으면 로그인 페이지로 리디렉션
        window.location.href = 'https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd2u50llkglor25.cloudfront.net';
      }
    };

    checkAuth(); // 인증 상태 확인
  }, []);

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '500',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <NavContainer
      click={+click}
      initial={{ y: `-100%` }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0 /* 2 */ }}
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
          {' '}
          <Link to="/">Home</Link>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('.about')}
        >
          <Link to="/">about</Link>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('#shop')}
        >
          <Link to="/">shop</Link>
        </Item>

        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => window.location.href = 'https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd2u50llkglor25.cloudfront.net'}
        >
          <Link to="#">Login / Register</Link>
        </Item>

        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => window.location.href = '/bongjini.html'}
        >
          <Link to="#">BonGenie</Link>
        </Item>
      </MenuItems>
    </NavContainer>
  );
};

export default Navbar;
