"use client"
import Backtotop from "@/shared/layout-components/backtotop/backtotop"
import Footer from "@/shared/layout-components/footer/footer"
import Header from "@/shared/layout-components/header/header"
import Sidebar from "@/shared/layout-components/sidebar/sidebar"
import Switcher from "@/shared/layout-components/switcher/switcher"
import { useEffect, useState, Fragment } from "react";
import { legendState, setTheme } from "@/shared/legendState/reducer";

const Layout = ({children}: any) => {
  const [MyclassName, setMyClass] = useState("");

  useEffect(() => {
    // Synchronise legendState avec le localStorage au chargement si besoin
    const theme = legendState.get();
    if (theme) {
      setTheme(theme);
    }
  }, []);

  const Bodyclickk = () => {
    const theme = legendState.get();
    if (localStorage.getItem("ynexverticalstyles") == "icontext") {
      setMyClass("");
    }
    if (window.innerWidth > 992) {
      if (theme.iconOverlay === 'open') {
        setTheme({ ...theme, iconOverlay: "" });
      }
    }
  }

  return (
    <>
    <Fragment>
        <Switcher/>
      <div className='page'>
        <Header/>
        <Sidebar/>
          <div className='main-content app-content'  
          onClick={Bodyclickk}
          >
        <div className='container-fluid'>
            {children}
          </div>
        </div>
        <Footer/>
      </div>
      <Backtotop/>
    </Fragment>
    </>
  )
}

export default Layout;
