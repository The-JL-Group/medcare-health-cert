import React from 'react';

// Videos
import vid1 from '../../../assets/videos/medcare_3.mp4';
import vid2 from '../../../assets/videos/medcare_7.mp4';

function VideoFiles() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-10 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <video className="w-full" src={vid1} type="video/mp4" controls loop>
            <source src={vid1} type="video/mp4" controls />
          </video>
        </div>
        <div className="carousel-item relative float-left w-full">
          <video
            className="w-full"
            src={vid2}
            type="video/mp4"
            controls
            loop
          ></video>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-14 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-14 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default VideoFiles;
