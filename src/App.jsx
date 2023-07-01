import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const SharedLayout = lazy(() => import("./pages/SharedLayout/SharedLayout"));
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Photo = lazy(() => import("./pages/Photo/Photo"));
const Video = lazy(() => import("./pages/Video/Video"));
const Aero = lazy(() => import("./pages/Aero/Aero"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route path="photo" element={<Photo />} />
        <Route path="video" element={<Video />} />
        <Route path="aero" element={<Aero />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
