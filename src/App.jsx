import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";
import { Careers } from "./pages/Careers/Careers";
import { Blog } from "./pages/Blog/Blog";
import { About } from "./pages/About/About";
import { Notfoundpage } from "./pages/Notfoundpage/Notfoundpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="careers" element={<Careers />}/>
          <Route path="blog" element={<Blog />}/>
          <Route path="about" element={<About />}/>
          <Route path="*" element={<Notfoundpage />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
