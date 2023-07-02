import{j as e}from"./index-5658d170.js";import{n as r}from"./emotion-styled.browser.esm-48ed70a6.js";const o="/assets/hero-b9342367.jpg",t=r.div`
  background-image: url(${o});
  width: 320px;
  height: 320px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column-reverse;
  padding-bottom: 7rem;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 300px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
    height: 600px;
  }
`,i=r.div`
  color: white;
  padding: 1rem;
  background-color: darkslateblue;
  border-radius: 0.5rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  transition: all 150ms ease-in-out;
  &:hover,
  &:focus {
    color: darkslateblue;
    background-color: orange;
    cursor: pointer;
  }
`,d=()=>e.jsxs(t,{children:[e.jsx("h1",{children:"ВАШ ВІДЕОМОНТАЖЕР"}),e.jsx("br",{})," ",e.jsx(i,{children:"ЗАМОВИТИ МОНТАЖ ВІДЕО "})]});export{d as default};
