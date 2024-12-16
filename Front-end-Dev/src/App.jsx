import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/blog/Home";
import PageError from "./pages/error/PageError";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home page url configoration */}
          <Route path="/" element={<Home />} />
          {/* 404 error page configuration over here */}
          <Route path="*" element={<PageError />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
