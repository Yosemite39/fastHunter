export function VideoFrame({ src, title, caption }: { src: string; title: string; caption: string }) {
  return (
    <figure className="screenshot-frame">
      <div className="screenshot-bar">
        <span><i /><i /><i /></span>
        <b>{title}</b>
        <em>[view]</em>
      </div>
      <video 
        src={src} 
        controls 
        autoPlay 
        loop 
        muted 
        playsInline
        className="video-frame"
      />
      <figcaption><span>{title}</span>{caption}</figcaption>
    </figure>
  );
}
