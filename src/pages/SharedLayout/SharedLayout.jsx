import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { SharedLayoutStyled } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <SharedLayoutStyled>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </SharedLayoutStyled>
  );
};

export default SharedLayout;
