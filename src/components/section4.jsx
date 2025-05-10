import "../css/Section4.css";
export const Section4 = () => {
  return (

    <section id="Guidence" className="carousel-wrapper">
    <h2 className="carousel-heading text-center mb-4 fw-bold font">Guidence</h2>
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <video
          className="d-block w-100 custom-carousel-video"
          src="/video/firstStep.mp4"
          type="video/mp4"
          muted
          autoPlay
          loop
        />
      </div>
      <div className="carousel-item">
        <video
          className="d-block w-100 custom-carousel-video"
          src="/video/secondStep.mp4"
          type="video/mp4"
          muted
          autoPlay
          loop
        />
      </div>
      <div className="carousel-item">
        <video
          className="d-block w-100 custom-carousel-video"
          src="/video/thirdStep.mp4"
          type="video/mp4"
          muted
          autoPlay
          loop
        />
      </div>
      <div className="carousel-item">
        <video
          className="d-block w-100 custom-carousel-video"
          src="/video/fourthStep.mp4"
          type="video/mp4"
          muted
          autoPlay
          loop
        />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
</section>

  );
};
