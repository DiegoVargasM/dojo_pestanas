import Pestañas from "./components/Pestañas";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Pestañas
        pestañas={[
          {
            label: "Pestaña 1",
            content: "Contenido de la pestaña 1",
            onTabClick: () => alert("Pestaña 1 clickeada")
          },
          {
            label: "Pestaña 2",
            content: "Contenido de la pestaña 2",
            onTabClick: () => alert("Pestaña 2 clickeada"),
          },
          {
            label: "Pestaña 3",
            content: "Contenido de la pestaña 3",
            onTabClick: () => alert("Pestaña 3 clickeada"),
          },
        ]}
      />
    </div>
  );
}

export default App;
