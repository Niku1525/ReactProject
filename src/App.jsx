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
        text="¡Te deseo lo mejor en tu día especial!"
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
