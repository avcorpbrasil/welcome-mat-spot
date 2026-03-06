import videoSrc from "@/assets/nuhaus-showroom-video.mp4";

const Video = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <h1 className="text-white text-2xl mb-6 font-serif">Vídeo Nuhaus Showroom</h1>
      <video
        src={videoSrc}
        controls
        autoPlay
        loop
        className="w-full max-w-4xl rounded-lg shadow-2xl"
      />
      <a
        href={videoSrc}
        download="nuhaus-showroom.mp4"
        className="mt-6 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
      >
        ⬇ Baixar vídeo .mp4
      </a>
    </div>
  );
};

export default Video;
