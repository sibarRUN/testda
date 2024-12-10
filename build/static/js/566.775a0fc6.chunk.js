"use strict";(self.webpackChunkwibe_test=self.webpackChunkwibe_test||[]).push([[566],{5566:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var o=i(3229),n=i(9950),a=i(9139),l=i(3564),c=i(6689),r=i(1678),s=i(1314),h=i(4414);const d=(0,r.Ay)(o.P.div)`
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
`,p=r.Ay.li`
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
`,m=(0,r.Ay)(o.P.ul)`
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
`,u=(0,r.Ay)(o.P.li)`
  text-transform: uppercase;
  color: ${e=>e.theme.text};

  @media (max-width: 40em) {
    padding: 0.5rem 0;
  }
`,w=new s.NE({UserPoolId:"ap-northeast-2_jczobrwlq",ClientId:"e90hcf6rica8am3h81lcsuspe"}),g=()=>{const[e,t]=(0,n.useState)(!1),{scroll:i}=(0,a.g7)(),o=((0,l.Zp)(),o=>{const n=document.querySelector(o);t(!e),i.scrollTo(n,{offset:"-100",duration:"500",easing:[.25,0,.35,1]})});return(0,h.jsx)(d,{click:+e,initial:{y:"-100%"},animate:{y:0},transition:{duration:.5,delay:0},children:(0,h.jsxs)(m,{drag:"y",dragConstraints:{top:0,bottom:70},dragElastic:.05,dragSnapToOrigin:!0,children:[(0,h.jsx)(p,{onClick:()=>t(!e),children:(0,h.jsx)("span",{children:"MENU"})}),(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>o("#home"),children:(0,h.jsx)(c.N_,{to:"/",children:"Home"})}),(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>o(".about"),children:(0,h.jsx)(c.N_,{to:"/",children:"About"})}),(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>o("#shop"),children:(0,h.jsx)(c.N_,{to:"/",children:"Shop"})}),(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>window.location.href="https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login/continue?client_id=e90hcf6rica8am3h81lcsuspe&redirect_uri=https%3A%2F%2Fd2c37b9hnb6ap4.cloudfront.net&response_type=code&scope=email+openid",children:(0,h.jsx)(c.N_,{to:"#",children:"Login / Register"})}),(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:e=>{e.preventDefault();const t=w.getCurrentUser();t?t.getSession(((e,t)=>{e||!t.isValid()?(alert("\ubd09\uc9c0\ub2c8\ub294 \ub85c\uadf8\uc778 \ud6c4 \uc0ac\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),window.location.href="https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd2c37b9hnb6ap4.cloudfront.net"):window.location.href="/bongjini.html"})):(alert("\ubd09\uc9c0\ub2c8\ub294 \ub85c\uadf8\uc778 \ud6c4 \uc0ac\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),window.location.href="https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd2c37b9hnb6ap4.cloudfront.net")},children:(0,h.jsx)(c.N_,{to:"#",children:"BonGenie"})})]})})}}}]);