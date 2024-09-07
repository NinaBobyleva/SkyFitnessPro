export function Video() {
    const videoURL = "https://www.youtube.com/embed/WxFz-4YsiEE";

  return (
    <iframe
      className="rounded-[12px]"
      width="100%"
      height="100%"
      src={videoURL}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
