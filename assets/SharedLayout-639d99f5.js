import{N as G,g as z,r as b,R as d,j as t,L as i,O as A}from"./index-6bf1da81.js";import{n as g}from"./emotion-styled.browser.esm-0f0973e2.js";const K=g.div`
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
`,c=g(G)`
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
`,V="/assets/logo-61caf576.png";var R={exports:{}},X="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y=X,J=Y;function L(){}function E(){}E.resetWarningCache=L;var Q=function(){function n(o,x,j,w,a,l){if(l!==J){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}n.isRequired=n;function e(){return n}var r={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:E,resetWarningCache:L};return r.PropTypes=r,r};R.exports=Q();var Z=R.exports;const ee=z(Z),p=48,te=({color:n="currentColor",direction:e="left",distance:r="md",duration:o=.4,easing:x="cubic-bezier(0, 0, 0, 1)",hideOutline:j=!0,label:w,lines:a=3,onToggle:l,render:m,rounded:P=!1,size:F=32,toggle:N,toggled:v})=>{const[_,M]=b.useState(!1),s=Math.max(12,Math.min(p,F)),H=Math.round((p-s)/2),$=s/12,h=Math.round($),S=s/(a*((r==="lg"?.25:r==="sm"?.75:.5)+(a===3?1:1.25))),f=Math.round(S),I=h*a+f*(a-1),W=Math.round((p-I)/2),D=a===3?r==="lg"?4.0425:r==="sm"?5.1625:4.6325:r==="lg"?6.7875:r==="sm"?8.4875:7.6675,U=($-h+(S-f))/(a===3?1:2),q=parseFloat((s/D-U/(4/3)).toFixed(2)),T=Math.max(0,o),k={cursor:"pointer",height:`${p}px`,position:"relative",transition:`${T}s ${x}`,userSelect:"none",width:`${p}px`},O={background:n,height:`${h}px`,left:`${H}px`,position:"absolute"};j&&(k.outline="none"),P&&(O.borderRadius="9em");const B=N||M,u=v!==void 0?v:_;return m({barHeight:h,barStyles:O,burgerStyles:k,easing:x,handler:()=>{B(!u),typeof l=="function"&&l(!u)},isLeft:e==="left",isToggled:u,label:w,margin:f,move:q,time:T,topOffset:W,width:s})};function y(){return y=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},y.apply(this,arguments)}const ne=n=>d.createElement(te,y({},n,{render:e=>d.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:r=>r.key==="Enter"&&e.handler(),role:"button",style:{...e.burgerStyles,transform:`${e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},d.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none"}`}}),d.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?"scaleX(0)":"none"}`}}),d.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight*2+e.margin*2}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move*-1}px)`:"none"}`}}))})),C=({setOpen:n})=>t.jsxs("nav",{className:"mobmenu",children:[t.jsx(i,{to:"/photo",onClick:()=>n(!1),children:t.jsx("h3",{children:"ФОТОСЕСІЇ"})}),t.jsx(i,{to:"/video",onClick:()=>n(!1),children:t.jsx("h3",{children:"ЗЙОМКА КЛІПІВ"})}),t.jsx(i,{to:"/aero",onClick:()=>n(!1),children:t.jsx("h3",{children:"АЕРОЗЙОМКА"})}),t.jsx(i,{to:"/contact",onClick:()=>n(!1),children:t.jsx("h3",{children:"ЗАМОВИТИ"})}),t.jsx(i,{to:"/",onClick:()=>n(!1),children:t.jsx("h3",{children:"ПОВЕРНУТИСЯ НАЗАД"})})]});C.propTypes={setOpen:ee.func.isRequired};const re=()=>{const[n,e]=b.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsxs(K,{children:[t.jsx(i,{to:"/",children:t.jsx("img",{className:"glow",src:V,alt:"logo",width:"28"})}),t.jsxs("nav",{className:"navigation",children:[t.jsx(c,{to:"/",end:!0,children:"Головна"}),t.jsx(c,{to:"/photo",children:"ФОТО"}),t.jsx(c,{to:"/video",children:"ВІДЕО"}),t.jsx(c,{to:"/aero",children:"АЕРОЗЙОМКА"}),t.jsx(c,{to:"/contact",children:"ЗАМОВИТИ"}),t.jsx(ne,{label:"Show menu",direction:"right",color:"DimGray",toggled:n,toggle:e})]})]}),t.jsx("div",{className:`slide-menu ${n?"open":""}`,children:t.jsx(C,{setOpen:e})})]})},ae=g.div`
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
`,oe=()=>t.jsxs(ae,{children:["Сopyright © 2023 Юрій Кириченко - ваш відеомонтажер.",t.jsx("br",{})," Всі права захищені."]}),ie=g.div`
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
`,le=()=>t.jsxs(ie,{children:[t.jsx(re,{}),t.jsx(b.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsx(A,{})}),t.jsx(oe,{})]});export{le as default};
