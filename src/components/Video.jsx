function Video({ srcVideo, videoClass }) {
  return (
    <video controls className={videoClass}>
      <source src={srcVideo} />
    </video>
  );
}
export default Video;
