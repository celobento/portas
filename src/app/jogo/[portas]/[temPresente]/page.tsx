"use client"
import styles from "@/app/Jogo.module.css"
import Porta from "@/components/Porta";
import { useEffect, useState } from "react";
import { atualizarPortas, criarPortas } from "@/functions/portas";
import Link from "next/link";
import {usePathname, useSearchParams, useParams  } from "next/navigation";
import PortaModel from "@/model/porta";

export default function Jogo() {
    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState<PortaModel[]>([])
    const params = useParams<{ portas: string; temPresente: string }>()

    useEffect(() => {
      console.log("USeEffect")
      const portas = +params.portas
      const temPresente = +params.temPresente
      setPortas(criarPortas(portas, temPresente))
    }, [params])

    useEffect(() => {
      const portas = +params.portas
      const temPresente = +params.temPresente
      const qtdPortasValidas = portas >=3 && portas <=10
      const temPresenteValidao = temPresente >= 1 && temPresente <=portas
      setValido(qtdPortasValidas && temPresenteValidao)
    }, [portas])

    console.log(">>"+params.portas)
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
            {valido ? renderizarPortas() : <h2>Valores Inválidos</h2>}
          </div>
          <div className={styles.botoes}>
            <Link href="/">
              <button>Reiniciar Jogo</button>
            </Link>
          </div>
        </div>
      );

}