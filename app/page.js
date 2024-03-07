"use client"
import Header from "./Components/Header.js"
import Bio from "./Components/Bio.js"
import TechStack from "./Components/TechStack.js"
import Footer from "./Components/Footer.js"
import NavBar from "./Components/NavBar.js"



export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Bio />
      <TechStack />
      <Footer />
    </>
  )
}
