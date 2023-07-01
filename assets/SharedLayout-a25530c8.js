import{N as o,j as e,L as a,r,O as i}from"./index-aa9c9028.js";import{n}from"./emotion-styled.browser.esm-7b8d7625.js";const d=n.div`
  padding: 1rem;
  padding-left: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0a0a0a;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1300px) {
    margin-bottom: 1rem;
  }
`,t=n(o)`
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
`,s="/assets/logo-61caf576.png",c=()=>e.jsx(e.Fragment,{children:e.jsxs(d,{children:[e.jsx(a,{to:"/",children:e.jsx("img",{src:s,alt:"logo",width:"28"})}),e.jsxs("nav",{className:"navigation",children:[e.jsx(t,{to:"/",end:!0,children:"Головна"}),e.jsx(t,{to:"/photo",children:"ФОТО"}),e.jsx(t,{to:"/video",children:"ВІДЕО"}),e.jsx(t,{to:"/aero",children:"АЕРОЗЙОМКА"}),e.jsx(t,{to:"/contact",children:"ЗАМОВИТИ"})]})]})}),x=n.div`
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
`,l=()=>e.jsxs(x,{children:["Сopyright © 2023 Юрій Кириченко - ваш відеомонтажер.",e.jsx("br",{})," Всі права захищені."]}),p=n.div`
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
`,h=()=>e.jsxs(p,{children:[e.jsx(c,{}),e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(i,{})}),e.jsx(l,{})]});export{h as default};
