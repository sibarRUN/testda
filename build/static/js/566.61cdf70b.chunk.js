"use strict";(self.webpackChunkwibe_test=self.webpackChunkwibe_test||[]).push([[566],{5566:(e,t,o)=>{o.r(t),o.d(t,{default:()=>y});var n=o(3229),i=o(9950),a=o(9139),c=o(3564),r=o(6689),s=o(1678),l=o(1314),h=o(4414);const d=(0,s.Ay)(n.P.div)`
  position: absolute;
  top: ${e=>e.click?"0":`-${e.theme.navHeight}`};
  transition: all 0.3s ease;
  z-index: 6;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    top: ${e=>e.click?"0":"calc(-50vh - 4rem)"};
  }
`,p=s.Ay.li`
  background-color: ${e=>`rgba(${e.theme.textRgba},0.7)`};
  color: ${e=>e.theme.body};
  width: 15rem;
  height: 2.5rem;
  border: none;
  outline: none;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${e=>e.theme.fontmd};
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
`,m=(0,s.Ay)(n.P.ul)`
  position: relative;
  height: ${e=>e.theme.navHeight};
  background-color: ${e=>e.theme.body};
  color: ${e=>e.theme.text};
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
`,w=(0,s.Ay)(n.P.li)`
  text-transform: uppercase;
  color: ${e=>e.theme.text};

  @media (max-width: 40em) {
    padding: 0.5rem 0;
  }
`,u={UserPoolId:"ap-northeast-2_jczobrwlq",ClientId:"e90hcf6rica8am3h81lcsuspe"},g=new l.NE(u),y=()=>{const[e,t]=(0,i.useState)(!1),[o,n]=(0,i.useState)(!1),{scroll:s}=(0,a.g7)();(0,c.Zp)(),(0,c.zy)();(0,i.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get("code");e&&l(e)}),[]);const l=async e=>{try{const t="https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/oauth2/token",o=new URLSearchParams;o.append("grant_type","authorization_code"),o.append("client_id",u.ClientId),o.append("code",e),o.append("redirect_uri","https://d19kcxe6thj51s.cloudfront.net");const i=await fetch(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o});if(i.ok){const e=await i.json();localStorage.setItem("accessToken",e.access_token),localStorage.setItem("idToken",e.id_token),localStorage.setItem("refreshToken",e.refresh_token),n(!0),window.history.replaceState({},document.title,window.location.pathname)}else console.error("\ud1a0\ud070 \uad50\ud658 \uc2e4\ud328"),n(!1)}catch(t){console.error("\ud1a0\ud070 \uad50\ud658 \uc911 \uc624\ub958 \ubc1c\uc0dd:",t),n(!1)}};(0,i.useEffect)((()=>{localStorage.getItem("accessToken")&&n(!0)}),[]);const y=o=>{const n=document.querySelector(o);t(!e),s.scrollTo(n,{offset:"-100",duration:"500",easing:[.25,0,.35,1]})},f=()=>{const e=g.getCurrentUser();if(e){e.signOut(),n(!1),alert("\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.");const t=`https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/logout?client_id=${u.ClientId}&logout_uri=https%3A%2F%2Fd19kcxe6thj51s.cloudfront.net`;window.location.href=t}else alert("\uc774\ubbf8 \ub85c\uadf8\uc544\uc6c3 \uc0c1\ud0dc\uc785\ub2c8\ub2e4.")};return(0,h.jsx)(d,{click:+e,initial:{y:"-100%"},animate:{y:0},transition:{duration:.5,delay:0},children:(0,h.jsxs)(m,{drag:"y",dragConstraints:{top:0,bottom:70},dragElastic:.05,dragSnapToOrigin:!0,children:[(0,h.jsx)(p,{onClick:()=>t(!e),children:(0,h.jsx)("span",{children:"MENU"})}),(0,h.jsx)(w,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>y("#home"),children:(0,h.jsx)(r.N_,{to:"/",children:"Home"})}),(0,h.jsx)(w,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>y(".about"),children:(0,h.jsx)(r.N_,{to:"/",children:"About"})}),(0,h.jsx)(w,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>y("#shop"),children:(0,h.jsx)(r.N_,{to:"/",children:"Shop"})}),o?(0,h.jsx)(w,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:f,children:(0,h.jsx)(r.N_,{to:"#",children:"Logout"})}):(0,h.jsx)(w,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>window.location.href=`https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=${u.ClientId}&redirect_uri=https%3A%2F%2Fd19kcxe6thj51s.cloudfront.net&response_type=code&scope=email+openid`,children:(0,h.jsx)(r.N_,{to:"#",children:"Login / Register"})}),(0,h.jsx)(w,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:async e=>{e.preventDefault();const t=g.getCurrentUser();if(t)try{(await new Promise(((e,o)=>{t.getSession(((t,n)=>{t?o(t):e(n)}))}))).isValid()?window.location.href="https://d19kcxe6thj51s.cloudfront.net/bongjini.html":(alert("\uc138\uc158\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694."),f())}catch(o){console.error("\uc138\uc158 \ud655\uc778 \uc911 \uc624\ub958:",o),alert("\ub85c\uadf8\uc778 \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\ub294 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),f()}else alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4."),window.location.href=`https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=${u.ClientId}&redirect_uri=https%3A%2F%2Fd19kcxe6thj51s.cloudfront.net&response_type=code&scope=email+openid`},children:(0,h.jsx)(r.N_,{to:"#",children:"BonGenie"})})]})})}}}]);