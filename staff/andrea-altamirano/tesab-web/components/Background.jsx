function Background() {
  return (
    <video
      autoPlay
      loop
      muted
      className="w-screen h-screen object-cover -z-10 absolute"
    >
      <source
        src="https://tesab-heavy.surge.sh/videos/700ie-drone-video-snippet_bLGz3NnO.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export default Background

