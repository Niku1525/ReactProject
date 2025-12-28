import { useState } from "react";
import "./components/CardImage.css";
import Container from "./components/Container";
import Video from "./components/Video";
import "./components/Container.css";
import "./App.css";
import "./components/Video.css";

function App() {
  const [mostrarVideo, setMostrarVideo] = useState(false);

  return (
    <>
      <Container
        title="¡Feliz Cumpleaños Wsiswi!"
        text={
          <>
            ¡Te deseo lo mejor en tu día especial, porque eres el mejor! <br />
            Gracias por ser esa persona con la que siempre se puede contar,
            <br /> para reír, para soplar, para odiar peruanos, para alabar a
            Eika,
            <br /> para disque jugar repo o simplemente para pasar el rato.
            <br />
            ¡Espero que cumplas todas tus metas chaval!
            <br />
            Con mucho cariño, Niku✨
          </>
        }
        onButtonClick={() => setMostrarVideo(!mostrarVideo)}
        btnText={mostrarVideo}
      />
      {mostrarVideo && (
        <div className="video-container">
          <Video srcVideo="./assets/Korone_Test.mp4" videoClass="video" />
        </div>
      )}
    </>
  );
}

export default App;
