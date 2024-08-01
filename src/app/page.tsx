"use client"
import PortaModel from "@/model/porta";
import Porta from "/src/components/Porta";
import Presente from "/src/components/Presente";
import { useState } from "react";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))
  
  return (
    <div >
        <Presente></Presente>
        <Porta porta={p1}></Porta>
    </div>
  );
}
