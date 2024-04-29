// import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);

  return pathname.includes("products") ? (
    <p
      className="fixed bottom-2 right-2 cursor-pointer bg-red-500 py-2 px-4 rounded-full text-white text-[1.5rem]"
      onClick={() => window.scrollTo(0, 0)}
      width={40}
      alt="scrollup"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </p>
  ) : null;
}
