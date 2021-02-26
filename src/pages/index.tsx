import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Contador } from '../components/contador';
import { DesafiosCompletos } from '../components/desafios-completos';
import { ExperienceBar } from '../components/experience-bar';
import { Perfil } from '../components/perfil';
import { ChallangeBox } from '../components/challange-box';
import { ContadorProvider } from '../contexts/contador-context';
import { ChallangesProvider } from '../contexts/challange-context';

import { Cookies } from '../utils/types';
import styles from '../styles/pages/home.module.css';

export default function Home(props: Cookies) {
  return (
    <ChallangesProvider cookies={props}>
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
    </ChallangesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challangesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: +level,
      currentExperience: +currentExperience,
      challangesCompleted: +challangesCompleted,
    },
  };
};
