import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;
    document.title = getPageTitle(pathname);
  }, [location]);

  return null;
};
const getPageTitle = (pathname: string) => {
  switch (pathname) {
    case "/":
      return "Sawla Tours | Home";
    case "/about":
      return "About";
    case "/contact":
      return "Contact";
    default:
      return "Your App";
  }
};
export default PageTitle;
