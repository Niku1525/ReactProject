import { useState, useRef } from "react";
import CardImage from "./CardImage.jsx";
import Eika from "../assets/Eika_Test.png";
import Video from "./Video.jsx";
import Korone from "../assets/Korone_Test.mp4";
import Anta from "../assets/Anta.mp3";

function Container({ title, text }) {
  const [mostrarVideo, setMostrarVideo] = useState(false);
  const audioRef = useRef(null);

  const reproducirSonido = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className="container">
      <h1>{title}</h1>

      <div className="container-inside">
        <p>{text}</p>

        <CardImage
          imgSrc={Eika}
          imgClass="EikaStyles"
          title="~Eika también te desea un feliz cumpleaños~"
          btnText={mostrarVideo ? "Clickeame >w<" : "Clickeame >w<"}
          onButtonClick={() => setMostrarVideo(!mostrarVideo)}
          onImageClick={reproducirSonido}
        />

        {mostrarVideo && (
          <Video srcVideo={Korone} videoClass="KoroneStyles fade-in" />
        )}
        <audio ref={audioRef} src={Anta} />
      </div>
    </div>
  );
}

export default Container;
