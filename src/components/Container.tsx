import { useEffect } from "react";
import { useRouter } from "next/router";

import NProgress from "nprogress";
import NavBar from "./NavBar";
import Footer from "./Footer";


type Props = {
  children?: React.ReactNode
}

const Container = ({children}: Props) => {
  const Router = useRouter();

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <>
      <div className="container mx-auto px-5 bg-light h-full w-full">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Container;
