const Videopart = () => {
  return (
    <section className="video-part">
      <div className="video-container">
        <div className="main-video">
          <video src="/video/video1.mp4" controls />
        </div>
        <div className="related-video">
          <div className="video-desc">
            <video src="/video/video1.mp4" controls />
            <p>
              <a href="">mukura yakoze imyitozo</a>
            </p>
          </div>
          <div className="video-desc">
            <video src="/video/video1.mp4" controls />
            <p>
              <a href="">Apr yatinze Rutsiro</a>
            </p>
          </div>
          <div className="video-desc">
            <video src="/video/video1.mp4" controls />
            <p>
              <a href="">rayon yabonye abandi abakinnyi beza</a>
            </p>
          </div>
          <div className="video-desc">
            <video src="/video/video1.mp4" controls />
            <p>
              <a href="">AS kigali yatinze police</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Videopart;
