"use strict";(self.webpackChunkwibe_test=self.webpackChunkwibe_test||[]).push([[566],{5566:(e,t,o)=>{o.r(t),o.d(t,{default:()=>f});var n=o(3229),i=o(9950),a=o(9139),c=o(3564),r=o(6689),s=o(1678),l=o(1314),h=o(4414);const d=(0,s.Ay)(n.P.div)`
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
`,u=new l.NE({UserPoolId:"ap-northeast-2_jczobrwlq",ClientId:"e90hcf6rica8am3h81lcsuspe"}),f=()=>{const[e,t]=(0,i.useState)(!1),{scroll:o}=(0,a.g7)();(0,c.Zp)();(0,i.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get("code");if(e){const t=new URLSearchParams;t.append("grant_type","authorization_code"),t.append("client_id","e90hcf6rica8am3h81lcsuspe"),t.append("code",e),t.append("redirect_uri","https://d2c37b9hnb6ap4.cloudfront.net"),fetch("https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/oauth2/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t}).then((e=>e.json())).then((e=>{if(e.id_token&&e.access_token&&e.refresh_token){const t=new l.Yw({IdToken:e.id_token}),o=new l.pD({AccessToken:e.access_token}),n=new l.c9({RefreshToken:e.refresh_token}),i=new l.p4({IdToken:t,AccessToken:o,RefreshToken:n}),a=t.payload["cognito:username"];new l.TU({Username:a,Pool:u}).setSignInUserSession(i);const c=window.location.origin+window.location.pathname;window.history.replaceState({},document.title,c)}})).catch((e=>{console.error("\ud1a0\ud070 \uad50\ud658 \uc2e4\ud328: ",e)}))}}),[]);const n=n=>{const i=document.querySelector(n);t(!e),o.scrollTo(i,{offset:"-100",duration:"500",easing:[.25,0,.35,1]})};return(0,h.jsx)(d,{click:+e,initial:{y:"-100%"},animate:{y:0},transition:{duration:.5,delay:0},children:(0,h.jsxs)(m,{drag:"y",dragConstraints:{top:0,bottom:70},dragElastic:.05,dragSnapToOrigin:!0,children:[(0,h.jsx)(p,{onClick:()=>t(!e),children:(0,h.jsx)("span",{children:"MENU"})}),(0,h.jsx)(w,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>n("#home"),children:(0,h.jsx)(r.N_,{to:"/",children:"Home"})}),(0,h.jsx)(w,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>n(".about"),children:(0,h.jsx)(r.N_,{to:"/",children:"About"})}),(0,h.jsx)(w,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>n("#shop"),children:(0,h.jsx)(r.N_,{to:"/",children:"Shop"})}),(0,h.jsx)(w,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>window.location.href="https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd2c37b9hnb6ap4.cloudfront.net",children:(0,h.jsx)(r.N_,{to:"#",children:"Login / Register"})}),(0,h.jsx)(w,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:e=>{e.preventDefault();const t=u.getCurrentUser();t?t.getSession(((e,t)=>{e||!t.isValid()?(alert("\uc798\ubabb\ub41c \uc811\uadfc\uc785\ub2c8\ub2e4. \ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694."),window.location.href="https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd2c37b9hnb6ap4.cloudfront.net"):window.location.href="/bongjini.html"})):(alert("\ubd09\uc9c0\ub2c8\ub294 \ub85c\uadf8\uc778 \ud6c4 \uc0ac\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),window.location.href="https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd2c37b9hnb6ap4.cloudfront.net")},children:(0,h.jsx)(r.N_,{to:"#",children:"BonGenie"})})]})})}}}]);