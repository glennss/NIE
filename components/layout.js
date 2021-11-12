import Navbar from "./navbar";
import Footer from "./footer";
// import Head from "next/head";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
