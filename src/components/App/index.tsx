import { List } from "../List";

export function App() {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <header>
        <h1>Scroll me</h1>
      </header>
      <main>
        <List />
      </main>
    </div>
  );
}
