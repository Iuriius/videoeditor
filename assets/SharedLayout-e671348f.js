import{N as z,r as f,R as d,j as t,L as i,O as A}from"./index-2c221628.js";import{n as m}from"./emotion-styled.browser.esm-3e0cc4df.js";import{P as B}from"./index-510c05c0.js";const K=m.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0a0a0a;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 1rem;
  }
  @media screen and (min-width: 1300px) {
    justify-content: space-between;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 3rem;
    padding-right: 1rem;
  }
`,l=m(z)`
  display: none;
  text-decoration: none;
  padding: 5px;
  color: darkslateblue;
  transition: color 150ms ease-in-out;
  &:hover,
  &:focus {
    color: orange;
  }

  &.active {
    font-weight: bold;
    color: orange;
  }
  @media screen and (min-width: 768px) {
    display: inline;
  }
  @media screen and (min-width: 1300px) {
    display: inline;
  }
`,U="/pictures/png/logo.png",c=48,V=({color:n="currentColor",direction:e="left",distance:r="md",duration:s=.4,easing:u="cubic-bezier(0, 0, 0, 1)",hideOutline:k=!0,label:O,lines:a=3,onToggle:b,render:E,rounded:M=!1,size:N=32,toggle:T,toggled:j})=>{const[C,H]=f.useState(!1),o=Math.max(12,Math.min(c,N)),R=Math.round((c-o)/2),y=o/12,p=Math.round(y),w=o/(a*((r==="lg"?.25:r==="sm"?.75:.5)+(a===3?1:1.25))),g=Math.round(w),F=p*a+g*(a-1),I=Math.round((c-F)/2),P=a===3?r==="lg"?4.0425:r==="sm"?5.1625:4.6325:r==="lg"?6.7875:r==="sm"?8.4875:7.6675,D=(y-p+(w-g))/(a===3?1:2),G=parseFloat((o/P-D/(4/3)).toFixed(2)),$=Math.max(0,s),v={cursor:"pointer",height:`${c}px`,position:"relative",transition:`${$}s ${u}`,userSelect:"none",width:`${c}px`},S={background:n,height:`${p}px`,left:`${R}px`,position:"absolute"};k&&(v.outline="none"),M&&(S.borderRadius="9em");const q=T||H,h=j!==void 0?j:C;return E({barHeight:p,barStyles:S,burgerStyles:v,easing:u,handler:()=>{q(!h),typeof b=="function"&&b(!h)},isLeft:e==="left",isToggled:h,label:O,margin:g,move:G,time:$,topOffset:I,width:o})};function x(){return x=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},x.apply(this,arguments)}const X=n=>d.createElement(V,x({},n,{render:e=>d.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:r=>r.key==="Enter"&&e.handler(),role:"button",style:{...e.burgerStyles,transform:`${e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},d.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none"}`}}),d.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?"scaleX(0)":"none"}`}}),d.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight*2+e.margin*2}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move*-1}px)`:"none"}`}}))})),L=({setOpen:n})=>t.jsxs("nav",{className:"mobmenu",children:[t.jsx(i,{to:"/photo",onClick:()=>n(!1),children:t.jsx("h3",{children:"ФОТОСЕСІЇ"})}),t.jsx(i,{to:"/video",onClick:()=>n(!1),children:t.jsx("h3",{children:"ЗЙОМКА КЛІПІВ"})}),t.jsx(i,{to:"/aero",onClick:()=>n(!1),children:t.jsx("h3",{children:"АЕРОЗЙОМКА"})}),t.jsx(i,{to:"/contact",onClick:()=>n(!1),children:t.jsx("h3",{children:"ЗАМОВИТИ"})}),t.jsx(i,{to:"/",onClick:()=>n(!1),children:t.jsx("h3",{children:"ПОВЕРНУТИСЯ НАЗАД"})})]});L.propTypes={setOpen:B.func.isRequired};const Z=()=>{const[n,e]=f.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsxs(K,{children:[t.jsxs(i,{to:"/",style:{display:"flex",alignItems:"center"},children:[t.jsx("img",{className:"glow",src:U,alt:"logo",width:"28"}),t.jsx("span",{style:{color:"lavender",marginLeft:"1rem"},children:"VIDEOMONTAZH.ONLINE"})]}),t.jsxs("nav",{className:"navigation",children:[t.jsx(l,{to:"/",end:!0,children:"Головна"}),t.jsx(l,{to:"/photo",children:"ФОТО"}),t.jsx(l,{to:"/video",children:"ВІДЕО"}),t.jsx(l,{to:"/aero",children:"АЕРОЗЙОМКА"}),t.jsx(l,{to:"/contact",children:"ЗАМОВИТИ"}),t.jsx(X,{label:"Show menu",direction:"right",color:"DimGray",toggled:n,toggle:e})]})]}),t.jsx("div",{className:`slide-menu ${n?"open":""}`,children:t.jsx(L,{setOpen:e})})]})},_=m.div`
  font-weight: 100;
  color: dimgray;
  background-color: #0a0a0a;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

  @media screen and (min-width: 768px) {
    padding-bottom: 2rem;
  }
  @media screen and (min-width: 1300px) {
  }
`,J=()=>t.jsxs(_,{children:["Сopyright © 2023 Юрій Кириченко - ваш відеомонтажер.",t.jsx("br",{})," Всі права захищені."]}),Q=m.div`
  font-family: "Geologica", sans-serif;
  font-weight: 900;

  width: 320px;
  width: 100%;
  padding: 0;
  margin: 0 auto;

  background-color: black;
  color: rebeccapurple;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
  }
`,re=()=>t.jsxs(Q,{children:[t.jsx(Z,{}),t.jsx(f.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsx(A,{})}),t.jsx(J,{})]});export{re as default};
