
"use client"
import { Inter } from "next/font/google";
import "./globals.scss";
import { Provider } from "react-redux";
import store from "@/shared/redux/store";
import Head from "next/head";


const RootLayout = ({children}:any) =>{
    return(
      <>
      <Provider store={store}>
        {children}
      </Provider>
   
      </>
    )
  }
  export default RootLayout
