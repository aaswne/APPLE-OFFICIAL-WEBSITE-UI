"use client"

import { useState } from "react";
import NavBar from "./components/NavBar/NavBar"
import Menu from "./components/Menu/Menu"
import Card from "./components/Card/Card"
import Para from "./components/Para/Para"
import Footer from "./components/Footer/Footer"
import RawPost from "./components/RawPost/RawPost"
import {actions,romance,horror} from "./url"

export default function Home() {

  const [show, setShow] = useState(false)

  console.log(show)
  
  return (
    <div className="main" >

      <NavBar show={show} setShow={setShow} />
   
        <Card description="Meet the latest iPhone lineup." name="iphone" button="Shop Iphone" image="/image/iphone17pros.webp" baground=" rgb(245, 245, 247)" className="card" />
        <Card name="MacBook Neo" description="Amazing Mac.Surprising Price." button="Buy" image="/image/macbookneo.webp" baground=" rgb(245, 245, 247)" className="card" />
        <Card baground="lightblue" description="Now supercharged by M4" name="ipad Air" button="Buy" image="/image/ipadair.webp" className="card" />

      <div className="smallCardsRow">
        <Card image="image/applewatch.webp" baground=" rgb(245, 245, 247)" button="Buy" description="The ultimate way to Watch your health" name="WATCH SERIES 11" className="smallCard" />
        <Card image="image/macbookpro.webp" baground="black" button="Buy" description="Now with M5,M5 Pro and,M5 Max" name="MacBook Pro" color="white" className="smallCard" />
      </div>
      <div className="smallCardsRow">
        <Card image="image/applecard.webp" baground=" rgb(245, 245, 247)" button="Buy" description="Get up to 3% Daily Cash back with every purchase." name="Apple Card" color="black" className="smallCard" />
        <Card image="image/airpods3pro.webp" baground=" rgb(245, 245, 247)" button="Buy" description="The world's best in-ear Active Noise Cancellation." name="AirPods 3 Pro" color="black" className="smallCard" />
      </div>

      <RawPost url={actions}/>

      <div className="foot">
        <Para />
        <Footer />
      </div>

    </div>
  );
}
