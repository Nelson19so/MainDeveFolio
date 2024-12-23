import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/blog/Home";
import PageError from "./pages/error/PageError";
import About from "./pages/blog/About";
import Services from "./pages/blog/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home page url configoration */}
          <Route path="/" element={<Home />} />
          {/* About page url configuration */}
          <Route path="/about" element={<About />} />
          {/* Service page url configuration */}
          <Route path="/services" element={<Services />} />
          {/* 404 error page configuration over here */}
          <Route path="*" element={<PageError />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
