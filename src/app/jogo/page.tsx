"use client"
import styles from "@/app/Jogo.module.css"
import Porta from "@/components/Porta";
import { useState } from "react";
import { atualizarPortas, criarPortas } from "@/functions/portas";

export default function jogo() {
  
    const [portas, setPortas] = useState(criarPortas(3, 2))
  
    function renderizarPortas() {
      return portas.map(porta => {
        return <Porta key={porta.numero} value={porta} 
                onChange={novaPorta => 
                  setPortas(atualizarPortas(portas, novaPorta))}></Porta>
      })
    }

    return (
        <div id={styles.jogo}>
          <div className={styles.portas}>
            {renderizarPortas()}
          </div>
          <div className={styles.botoes}></div>
        </div>
      );

}