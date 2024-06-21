import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import VideoPage from "./pages/VideoPage/VideoPage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />
        <Route path="/upload" element={<VideoUpload />} />
      </Routes>
    </>
  );
}

export default App;
