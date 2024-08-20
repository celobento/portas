"use client"
import Cartao from "@/components/Cartao";
import styles from '../app/Formulario.module.css'
import Link from "next/link";
import EntradaNumerica from "@/components/EntradaNumerica";
import { useState } from "react";

export default function Home() {
  const [qtdPortas, setQtdPortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)
  return (
    <div className={styles.formulario}>
        <div>
          <Cartao bgcolor="#c0392c">
            <h1>Monty Hall</h1>
          </Cartao>
          <Cartao>
            <EntradaNumerica value={qtdPortas} 
            onChange={novaQtde => setQtdPortas(novaQtde)} 
            text="Qtd Portas"></EntradaNumerica>
          </Cartao>
        </div>
        <div>
          <Cartao>
            <EntradaNumerica value={comPresente} 
            onChange={novaComPresente => setComPresente(novaComPresente)} 
            text="Porta com Presente"></EntradaNumerica>
          </Cartao>
          <Cartao bgcolor="#28a085">
            <Link href={`/jogo/${qtdPortas}/${comPresente}`}>
              <h2 className={styles.link}>Iniciar</h2>
            </Link>
          </Cartao>
        </div>
    </div>
  );
}
