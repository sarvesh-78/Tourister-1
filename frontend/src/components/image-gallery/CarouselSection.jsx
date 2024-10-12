import React from "react";
import maldivesImg from "../../assets/images/Maldives2.jpg";
import tajmahalImg from "../../assets/images/tajmahal3.png";
import sydneyImg from "../../assets/images/sydney.jpg";
const CarouselSection = () => {
  return (
    <section className="front4 pt-5 pb-5">
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            aria-label="Slide 1"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="active"
            aria-current="true"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item">
            <img className="responsive" src={maldivesImg} height="600px" alt="Maldives" />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1 className="tcar">Explore.</h1>
                <p className="pcar">Set sail on an adventure beyond your wildest dreams!</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="responsive"
              src={tajmahalImg}
              style={{ objectFit: "cover" }}
              height="600px"
              alt="Taj Mahal"
            />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="tcar">Wonders Await!</h1>
                <p className="pcar">Witness the Grandeur</p>
              </div>
            </div>
          </div>

          <div className="carousel-item active">
            <img
              className="responsive"
              src={sydneyImg}
              style={{ objectFit: "cover" }}
              height="600px"
              alt="Sydney"
            />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1 className="tcar">Preserve the Journey</h1>
                <p className="pcar">Collect memories, not things. Leave only footprints.</p>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default CarouselSection;
