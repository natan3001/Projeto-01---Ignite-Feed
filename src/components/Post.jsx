import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/natan3001.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Natan Martins</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="10 de novembro às 19:13h" dateTime="2022-11-10 19:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O
          nome do projeto é DoctorCare 🚀{" "}
        </p>
        <p>
          👉 <a href="#"> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
