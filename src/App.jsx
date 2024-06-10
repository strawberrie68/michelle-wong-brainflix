import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import VideoDetails from "./pages/VideoDetails/VideoDetails";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import Navbar from "./components/Navbar/Navbar";

function App() {
  useEffect(() => {}, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/upload" element={<VideoUpload />} />
      </Routes>
    </>
  );
}

export default App;
