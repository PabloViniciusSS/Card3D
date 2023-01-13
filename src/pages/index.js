import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Card3D } from '../components/Card3D'


export default function Home() {
  return (
    <>
      <Head>
        <title>Card 3D</title>
        <meta name="card3D" content="Criação de um card 3 de produtos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main className={styles.main}>
        <Card3D
            img='Sofa.png'
            img2='Sofa.gif'
            numero= '0222'
            produto= 'Sofá Margot II - Rosé'
            valor= 'R$4.000,00'
            text='Adicionar À Cesta'  />
      </main>
    </>
  )
}
