"use strict";(self.webpackChunkwibe_test=self.webpackChunkwibe_test||[]).push([[566],{5566:(e,t,o)=>{o.r(t),o.d(t,{default:()=>y});var i=o(3229),n=o(9950),l=o(9139),r=o(3564),s=o(6689),a=o(1678),c=o(1314),h=o(4414);const d=(0,a.Ay)(i.P.div)`
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
`,p=a.Ay.li`
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
`,m=(0,a.Ay)(i.P.ul)`
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
`,u=(0,a.Ay)(i.P.li)`
  text-transform: uppercase;
  color: ${e=>e.theme.text};

  @media (max-width: 40em) {
    padding: 0.5rem 0;
  }
`,w={UserPoolId:"ap-northeast-2_jczobrwlq",ClientId:"e90hcf6rica8am3h81lcsuspe"},g=new c.NE(w),y=()=>{const[e,t]=(0,n.useState)(!1),[o,i]=(0,n.useState)(!1),{scroll:a}=(0,l.g7)();(0,r.Zp)();(0,n.useEffect)((()=>{const e=async()=>{const e=g.getCurrentUser();if(e)try{(await new Promise(((t,o)=>{e.getSession(((e,i)=>{e?o(e):t(i)}))}))).isValid()?i(!0):(i(!1),y())}catch(t){console.error("\uc138\uc158 \ud655\uc778 \uc911 \uc624\ub958 \ubc1c\uc0dd:",t),i(!1)}else i(!1)};e();const t=setInterval(e,3e5);return()=>clearInterval(t)}),[]);const c=o=>{const i=document.querySelector(o);t(!e),a.scrollTo(i,{offset:"-100",duration:"500",easing:[.25,0,.35,1]})},y=()=>{const e=g.getCurrentUser();if(e){e.signOut(),i(!1),alert("\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.");const t=`https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/logout?client_id=${w.ClientId}&logout_uri=https%3A%2F%2Fd19kcxe6thj51s.cloudfront.net`;window.location.href=t}else alert("\uc774\ubbf8 \ub85c\uadf8\uc544\uc6c3 \uc0c1\ud0dc\uc785\ub2c8\ub2e4.")};return(0,h.jsx)(d,{click:+e,initial:{y:"-100%"},animate:{y:0},transition:{duration:.5,delay:0},children:(0,h.jsxs)(m,{drag:"y",dragConstraints:{top:0,bottom:70},dragElastic:.05,dragSnapToOrigin:!0,children:[(0,h.jsx)(p,{onClick:()=>t(!e),children:(0,h.jsx)("span",{children:"MENU"})}),(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>c("#home"),children:(0,h.jsx)(s.N_,{to:"/",children:"Home"})}),(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>c(".about"),children:(0,h.jsx)(s.N_,{to:"/",children:"About"})}),(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>c("#shop"),children:(0,h.jsx)(s.N_,{to:"/",children:"Shop"})}),o?(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:y,children:(0,h.jsx)(s.N_,{to:"#",children:"Logout"})}):(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>window.location.href=`https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=${w.ClientId}&redirect_uri=https%3A%2F%2Fd19kcxe6thj51s.cloudfront.net&response_type=code&scope=email+openid`,children:(0,h.jsx)(s.N_,{to:"#",children:"Login / Register"})}),(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:async e=>{e.preventDefault();const t=g.getCurrentUser();if(t)try{(await new Promise(((e,o)=>{t.getSession(((t,i)=>{t?o(t):e(i)}))}))).isValid()?window.location.href="https://d19kcxe6thj51s.cloudfront.net/bongjini.html":(alert("\uc138\uc158\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694."),y())}catch(o){console.error("\uc138\uc158 \ud655\uc778 \uc911 \uc624\ub958:",o),alert("\ub85c\uadf8\uc778 \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\ub294 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),y()}else alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4."),window.location.href=`https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=${w.ClientId}&redirect_uri=https%3A%2F%2Fd19kcxe6thj51s.cloudfront.net&response_type=code&scope=email+openid`},children:(0,h.jsx)(s.N_,{to:"#",children:"BonGenie"})})]})})}}}]);