import React from 'react';
import Head from 'next/head';

import { Contador } from '../components/contador';
import { DesafiosCompletos } from '../components/desafios-completos';
import { ExperienceBar } from '../components/experience-bar';
import { Perfil } from '../components/perfil';
import { ChallangeBox } from '../components/challange-box';

import styles from '../styles/pages/home.module.css';
import { ContadorProvider } from '../contexts/contador-context';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Moveit</title>
      </Head>
      <ExperienceBar />
      <ContadorProvider>
        <section>
          <div>
            <Perfil />
            <DesafiosCompletos />
            <Contador />
          </div>
          <div>
            <ChallangeBox />
          </div>
        </section>
      </ContadorProvider>
    </div>
  );
}
