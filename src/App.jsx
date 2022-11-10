import { Header } from "./components/Header";
import { Post } from "./Post";

import "./styles.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Natan Martins"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit maxime alias, perferendis amet illo reprehenderit sint saepe quaerat eveniet."
      />
    </div>
  );
}
