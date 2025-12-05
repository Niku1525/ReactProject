import CardImage from "./CardImage.jsx";
import Eika from "../assets/Eika_Test.png";
import Video from "./Video.jsx";
import Korone from "../assets/Korone_Test.mp4";

function Container({ title, text }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="container-inside">
        <p>{text}</p>
        <CardImage
          imgSrc={Eika}
          imgClass="EikaStyles"
          title="~Eika tambien te desea un feliz cumpleaños~"
          btnText="Clickeame >w<"
        />
        <Video srcVideo={Korone} videoClass="KoroneStyles" />
      </div>
    </div>
  );
}

export default Container;
