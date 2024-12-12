"use strict";(self.webpackChunkwibe_test=self.webpackChunkwibe_test||[]).push([[566],{5566:(e,o,t)=>{t.r(o),t.d(o,{default:()=>y});var n=t(3229),l=t(9950),i=t(9139),c=t(5616),a=t(1678),r=t(1314),s=t(4414);const d=(0,a.Ay)(n.P.div)`
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
`,h=a.Ay.li`
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
`,m=(0,a.Ay)(n.P.ul)`
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
`,p=(0,a.Ay)(n.P.li)`
  text-transform: uppercase;
  color: ${e=>e.theme.text};

  @media (max-width: 40em) {
    padding: 0.5rem 0;
  }
`,g="https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com",w="https://d19kcxe6thj51s.cloudfront.net",u={UserPoolId:"ap-northeast-2_jczobrwlq",ClientId:"e90hcf6rica8am3h81lcsuspe"},y=(new r.NE(u),()=>{const[e,o]=(0,l.useState)(!1),[t,n]=(0,l.useState)(!1),{scroll:a}=(0,i.g7)();(0,l.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get("code");if(console.log("URL \ud30c\ub77c\ubbf8\ud130 \ud655\uc778 - \uc778\uc99d \ucf54\ub4dc:",e?"\uc874\uc7ac":"\uc5c6\uc74c"),e)r(e);else{const e=localStorage.getItem("accessToken");console.log("localStorage \ud1a0\ud070 \ud655\uc778:",e?"\uc874\uc7ac":"\uc5c6\uc74c"),e&&n(!0)}}),[]);const r=async e=>{try{console.log("\ud1a0\ud070 \uad50\ud658 \uc2dc\uc791, \ucf54\ub4dc:",e);const o=`${g}/oauth2/token`,t=new URLSearchParams;t.append("grant_type","authorization_code"),t.append("client_id",u.ClientId),t.append("code",e),t.append("redirect_uri",w),console.log("\uc694\uccad URL:",o),console.log("\uc694\uccad \ud30c\ub77c\ubbf8\ud130:",t.toString());const l=await fetch(o,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t});if(console.log("\uc751\ub2f5 \uc0c1\ud0dc:",l.status),l.ok){const e=await l.json();return console.log("\ud1a0\ud070 \uc218\uc2e0 \uc131\uacf5"),console.log("\ud1a0\ud070 \uc815\ubcf4:",{accessToken:e.access_token?"\uc874\uc7ac":"\uc5c6\uc74c",idToken:e.id_token?"\uc874\uc7ac":"\uc5c6\uc74c",refreshToken:e.refresh_token?"\uc874\uc7ac":"\uc5c6\uc74c"}),localStorage.setItem("accessToken",e.access_token),localStorage.setItem("idToken",e.id_token),localStorage.setItem("refreshToken",e.refresh_token),n(!0),window.history.replaceState({},document.title,window.location.pathname),!0}{const e=await l.text();return console.error("\ud1a0\ud070 \uad50\ud658 \uc2e4\ud328:",e),n(!1),!1}}catch(o){return console.error("\ud1a0\ud070 \uad50\ud658 \uc911 \uc624\ub958:",o),n(!1),!1}},y=t=>{const n=document.querySelector(t);o(!e),a.scrollTo(n,{offset:"-100",duration:"500",easing:[.25,0,.35,1]})},f=()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("idToken"),localStorage.removeItem("refreshToken"),n(!1);const e=`${g}/logout?client_id=${u.ClientId}&logout_uri=${encodeURIComponent(w)}`;window.location.href=e};return(0,s.jsx)(d,{click:+e,initial:{y:"-100%"},animate:{y:0},transition:{duration:.5,delay:0},children:(0,s.jsxs)(m,{drag:"y",dragConstraints:{top:0,bottom:70},dragElastic:.05,dragSnapToOrigin:!0,children:[(0,s.jsx)(h,{onClick:()=>o(!e),children:(0,s.jsx)("span",{children:"MENU"})}),(0,s.jsx)(p,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>y("#home"),children:(0,s.jsx)(c.N_,{to:"/",children:"Home"})}),(0,s.jsx)(p,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>y(".about"),children:(0,s.jsx)(c.N_,{to:"/",children:"About"})}),(0,s.jsx)(p,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>y("#shop"),children:(0,s.jsx)(c.N_,{to:"/",children:"Shop"})}),t?(0,s.jsx)(p,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:f,children:(0,s.jsx)(c.N_,{to:"#",children:"Logout"})}):(0,s.jsx)(p,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>{console.log("\ub85c\uadf8\uc778 \ubc84\ud2bc \ud074\ub9ad");const e=`${g}/login?client_id=${u.ClientId}&redirect_uri=${encodeURIComponent(w)}&response_type=code&scope=email+openid`;console.log("\ub85c\uadf8\uc778 URL:",e),window.location.href=e},children:(0,s.jsx)(c.N_,{to:"#",onClick:e=>e.preventDefault(),children:"Login / Register"})}),(0,s.jsx)(p,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:async e=>{e.preventDefault(),console.log("\ubd09\uc9c0\ub2c8 \ubc84\ud2bc \ud074\ub9ad\ub428");const o=localStorage.getItem("accessToken");if(console.log("\uc800\uc7a5\ub41c \uc561\uc138\uc2a4 \ud1a0\ud070:",o?"\uc874\uc7ac":"\uc5c6\uc74c"),o)try{console.log("\uc778\uc99d\ub41c \uc0c1\ud0dc\ub85c \ubd09\uc9c0\ub2c8 \ud398\uc774\uc9c0 \uc811\uadfc"),window.location.href=`${w}/bongjini.html`}catch(t){console.error("\ud398\uc774\uc9c0 \uc774\ub3d9 \uc911 \uc624\ub958:",t),alert("\ud398\uc774\uc9c0 \uc811\uadfc \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),f()}else console.log("\ubbf8\uc778\uc99d \uc0c1\ud0dc - \ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \ub9ac\ub514\ub809\uc158"),alert("BonGenie\ub294 \ub85c\uadf8\uc778 \ud6c4 \uc0ac\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4?\uc9c4\uc9dc\ub85c."),window.location.href=`${g}/login?client_id=${u.ClientId}&redirect_uri=${encodeURIComponent(w)}&response_type=code&scope=email+openid`},children:(0,s.jsx)(c.N_,{to:"#",children:"BonGenie"})})]})})})}}]);