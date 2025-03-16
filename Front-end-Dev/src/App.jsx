import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/blog/Home";
import About from "./pages/blog/About";
import Service from "./pages/blog/Service";
import Servicesdetails from "./pages/blog/Servicesdetails";
import Blogpost from "./pages/blog/Blogpost";
import Contact from "./pages/blog/contact";
import Testimonial from "./pages/blog/Testimonial";
import Blogdetails from "./pages/blog/Blogdetails";
import Project from "./pages/blog/Project";
import Errorpage from "./pages/error/Errorpage";

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

          {/* Contact page url configuration */}
          <Route path="/contact" element={<Contact />} />

          {/* testimonial page url configuration */}
          <Route path="/testimonial" element={<Testimonial />} />

          {/* Blogdetails page url configuration */}
          <Route path="/Blogdetails" element={<Blogdetails />} />

          {/* Project page url configuration */}
          <Route path="/Project" element={<Project />} />

          {/* 404 error page configuration over here */}
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
