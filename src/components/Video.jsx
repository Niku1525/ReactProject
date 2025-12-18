import { useEffect, useRef } from "react";

function Video({ srcVideo, videoClass, volume = 0.6 }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <video ref={videoRef} className={videoClass} controls autoPlay>
      <source src={srcVideo} />
    </video>
  );
}
export default Video;
