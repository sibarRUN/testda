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

  // Effect to check if the user is already authenticated on component mount
  useEffect(() => {
    const user = userPool.getCurrentUser();
    if (user) {
      user.getSession((err, session) => {
        if (!err && session.isValid()) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      });
    }
  }, []);

  // Effect to handle the authorization code received from Cognito after login
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code'); // Get the "code" query parameter from the URL
    if (code) {
      // Prepare the data for token exchange
      const data = new URLSearchParams();
      data.append('grant_type', 'authorization_code');
      data.append('client_id', poolData.ClientId);
      data.append('code', code);
      data.append('redirect_uri', 'https://d19kcxe6thj51s.cloudfront.net'); // Must match Cognito App Client settings

      // Exchange the authorization code for tokens
      fetch('https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
      })
      .then(res => res.json())
      .then(tokens => {
        // Check if all tokens are present
        if (tokens.id_token && tokens.access_token && tokens.refresh_token) {
          // Create Cognito tokens
          const idToken = new CognitoIdToken({ IdToken: tokens.id_token });
          const accessToken = new CognitoAccessToken({ AccessToken: tokens.access_token });
          const refreshToken = new CognitoRefreshToken({ RefreshToken: tokens.refresh_token });

          // Create a Cognito User Session
          const session = new CognitoUserSession({
            IdToken: idToken,
            AccessToken: accessToken,
            RefreshToken: refreshToken
          });

          // Extract the username from the ID token
          const username = idToken.payload['cognito:username'];

          // Initialize a CognitoUser object
          const user = new CognitoUser({
            Username: username,
            Pool: userPool
          });

          // Set the user's session
          user.setSignInUserSession(session);

          // Update authentication state
          setIsAuthenticated(true);

          // Remove the "code" query parameter from the URL
          const newUrl = window.location.origin + window.location.pathname;
          window.history.replaceState({}, document.title, newUrl);
        }
      })
      .catch(err => {
        console.error("토큰 교환 실패: ", err);
      });
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
  const handleBonggenieClick = (event) => {
    event.preventDefault();
    const user = userPool.getCurrentUser(); // Get the current user

    if (user) {
      // If user exists, check the session
      user.getSession((err, session) => {
        if (err || !session.isValid()) {
          // If session is invalid, alert and redirect to login
          alert("잘못된 접근입니다. 로그인해주세요.");
          window.location.href = `https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=${poolData.ClientId}&redirect_uri=https%3A%2F%2Fd19kcxe6thj51s.cloudfront.net&response_type=code&scope=email+openid`;
        } else {
          // If session is valid, redirect to BonGenie page
          window.location.href = 'https://d19kcxe6thj51s.cloudfront.net/bongjini.html';
        }
      });
    } else {
      // If no user is logged in, alert and redirect to login
      alert("쒸이이발 줘엇같네.");
      window.location.href = `https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=${poolData.ClientId}&redirect_uri=https%3A%2F%2Fd19kcxe6thj51s.cloudfront.net&response_type=code&scope=email+openid`;
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    const user = userPool.getCurrentUser();
    if (user) {
      user.signOut(); // Sign out the user from Cognito
      setIsAuthenticated(false); // Update authentication state
      alert("로그아웃 되었습니다.");

      // Redirect to Cognito logout endpoint to clear the session on the server
      const logoutUrl = `https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/logout?client_id=${poolData.ClientId}&logout_uri=https%3A%2F%2Fd19kcxe6thj51s.cloudfront.net`;
      window.location.href = logoutUrl;
    } else {
      // If user is not logged in, alert
      alert("이미 로그아웃 상태입니다.");
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

export default Navbar;
