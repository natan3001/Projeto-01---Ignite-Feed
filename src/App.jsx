import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Natan Martins"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit maxime alias, perferendis amet illo reprehenderit sint saepe quaerat eveniet."
          />
          <Post
            author="Natan Martins"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit maxime alias, perferendis amet illo reprehenderit sint saepe quaerat eveniet."
          />
        </main>
      </div>
    </div>
  );
}
