import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/blog/Home";
import PageError from "./pages/error/PageError";
import About from "./pages/blog/About";
import Service from "./pages/blog/Service";
import Servicesdetails from "./pages/blog/Servicesdetails";
import Blogpost from "./pages/blog/Blogpost";

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
          <Route path="/service" element={<Service />} />
          {/* Service page url configuration */}
          <Route path="/servicesdetails" element={<Servicesdetails />} />
          {/* Blogpost page url configuration */}
          <Route path="/blogpost" element={<Blogpost />} />
          {/* 404 error page configuration over here */}
          <Route path="*" element={<PageError />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
