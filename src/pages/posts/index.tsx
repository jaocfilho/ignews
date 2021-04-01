import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>1 de abril de 2021</time>
            <strong>Como fazer um bom README</strong>
            <p>
              Se seu projeto já tem uma logo adicione no README. Pode ser um banner também. Você pode criar uma logo ou banner usando o Canva.
            </p>
          </a>
          <a>
            <time>1 de abril de 2021</time>
            <strong>Como fazer um bom README</strong>
            <p>
              Se seu projeto já tem uma logo adicione no README. Pode ser um banner também. Você pode criar uma logo ou banner usando o Canva.
            </p>
          </a>
          <a>
            <time>1 de abril de 2021</time>
            <strong>Como fazer um bom README</strong>
            <p>
              Se seu projeto já tem uma logo adicione no README. Pode ser um banner também. Você pode criar uma logo ou banner usando o Canva.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}