"use strict";(self.webpackChunkwibe_test=self.webpackChunkwibe_test||[]).push([[566],{5566:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var i=o(3229),n=o(9950),l=o(9139),a=o(3564),r=o(6689),c=o(1678),s=o(1314),h=o(4414);const d=(0,c.Ay)(i.P.div)`
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
`,p=c.Ay.li`
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
`,m=(0,c.Ay)(i.P.ul)`
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
`,u=(0,c.Ay)(i.P.li)`
  text-transform: uppercase;
  color: ${e=>e.theme.text};

  @media (max-width: 40em) {
    padding: 0.5rem 0;
  }
`,g=new s.NE({UserPoolId:"ap-northeast-2_jczobrwlq",ClientId:"e90hcf6rica8am3h81lcsuspe"}),w=()=>{const[e,t]=(0,n.useState)(!1),{scroll:o}=(0,l.g7)(),i=((0,a.Zp)(),i=>{const n=document.querySelector(i);t(!e),o.scrollTo(n,{offset:"-100",duration:"500",easing:[.25,0,.35,1]})});return(0,h.jsx)(d,{click:+e,initial:{y:"-100%"},animate:{y:0},transition:{duration:.5,delay:0},children:(0,h.jsxs)(m,{drag:"y",dragConstraints:{top:0,bottom:70},dragElastic:.05,dragSnapToOrigin:!0,children:[(0,h.jsx)(p,{onClick:()=>t(!e),children:(0,h.jsx)("span",{children:"MENU"})}),(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>i("#home"),children:(0,h.jsx)(r.N_,{to:"/",children:"Home"})}),(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>i(".about"),children:(0,h.jsx)(r.N_,{to:"/",children:"About"})}),(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>i("#shop"),children:(0,h.jsx)(r.N_,{to:"/",children:"Shop"})}),(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>window.location.href="https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd2u50llkglor25.cloudfront.net",children:(0,h.jsx)(r.N_,{to:"#",children:"Login / Register"})}),(0,h.jsx)(u,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:e=>{e.preventDefault();const t=g.getCurrentUser();t?t.getSession(((e,t)=>{e||!t.isValid()?(alert("\ubd09\uc9c0\ub2c8\ub294 \ub85c\uadf8\uc778 \ud6c4 \uc0ac\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),window.location.href="https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd2u50llkglor25.cloudfront.net"):window.location.href="/bonggenie"})):(alert("\ubd09\uc9c0\ub2c8\ub294 \ub85c\uadf8\uc778 \ud6c4 \uc0ac\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),window.location.href="https://ap-northeast-2jczobrwlq.auth.ap-northeast-2.amazoncognito.com/login?client_id=e90hcf6rica8am3h81lcsuspe&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd2u50llkglor25.cloudfront.net")},children:(0,h.jsx)(r.N_,{to:"#",children:"BonGenie"})})]})})}}}]);