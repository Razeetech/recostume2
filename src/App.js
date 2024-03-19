import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Desktop from "./pages/Desktop";
import Cart from "./pages/Cart";
import Desktop1 from "./pages/Desktop1";
import Desktop2 from "./pages/Desktop2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-62":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/checkout-1":
        title = "";
        metaDescription = "";
        break;
      case "/productlist":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/desktop-62" element={<Desktop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout-1" element={<Desktop1 />} />
      <Route path="/productlist" element={<Desktop2 />} />
    </Routes>
  );
}
export default App;
