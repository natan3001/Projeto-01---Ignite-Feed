import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/natan3001.png",
      name: "Natan Martins",
      role: "Web Developer",
    },
    content: `
      Fala galeraa 👋

      Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      
      👉 [jane.design/doctorcare](#)
      
      [#novoprojeto](#) [#nlw](#) [#rocketseat](#)
    `,
    publishedAt: new Date("2022-11-11 10:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/lucasgois.png",
      name: "Lucas Gois",
      role: "Java Developer",
    },
    content: `
      Fala galeraa 👋

      Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      
      👉 [jane.design/doctorcare](#)
      
      [#novoprojeto](#) [#nlw](#) [#rocketseat](#)
    `,
    publishedAt: new Date("2022-11-10 15:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post author={post.author} content={post.content} publihedAt={post.publishedAt} />;
          })}
        </main>
      </div>
    </div>
  );
}
