import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

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
        </main>
      </div>
    </div>
  );
}
