import Head from 'next/head';

import Contador from '../components/contador';
import DesafiosCompletos from '../components/desafios-completos';
import ExperienceBar from '../components/experience-bar';
import Perfil from '../components/perfil';

import styles from '../styles/pages/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Moveit</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Perfil />
          <DesafiosCompletos />
          <Contador />
        </div>
        <div></div>
      </section>
    </div>
  );
}
