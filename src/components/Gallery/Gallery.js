import React, { useState } from 'react';

// Stylesheets
import './gallery.css';

// Close Icon
import { AiOutlineCloseCircle } from 'react-icons/ai';

// Images
import picture2 from '../../assets/images/gallery/gallery-2.avif';
import picture3 from '../../assets/images/gallery/gallery-3.avif';
import picture4 from '../../assets/images/gallery/gallery-4.avif';
import picture5 from '../../assets/images/gallery/gallery-5.avif';
import picture6 from '../../assets/images/gallery/gallery-6.avif';
import picture7 from '../../assets/images/gallery/gallery-7.avif';
import picture8 from '../../assets/images/gallery/gallery-8.avif';
import picture9 from '../../assets/images/gallery/gallery-9.avif';
import picture11 from '../../assets/images/gallery/gallery-11.avif';
import picture14 from '../../assets/images/gallery/gallery-14.avif';
import picture17 from '../../assets/images/gallery/gallery-17.avif';
import picture18 from '../../assets/images/gallery/gallery-18.avif';
import picture19 from '../../assets/images/gallery/gallery-19.avif';
import picture20 from '../../assets/images/gallery/gallery-20.avif';
import picture21 from '../../assets/images/gallery/gallery-21.avif';
import picture22 from '../../assets/images/gallery/gallery-22.avif';
import picture23 from '../../assets/images/gallery/gallery-23.avif';
import picture24 from '../../assets/images/gallery/gallery-24.avif';

function Gallery() {
  let data = [
    {
      id: 1,
      imgSrc: picture7,
    },
    {
      id: 2,
      imgSrc: picture21,
    },
    {
      id: 3,
      imgSrc: picture3,
    },
    {
      id: 4,
      imgSrc: picture22,
    },
    {
      id: 5,
      imgSrc: picture20,
    },
    {
      id: 6,
      imgSrc: picture17,
    },
    {
      id: 7,
      imgSrc: picture24,
    },
    {
      id: 8,
      imgSrc: picture8,
    },
    {
      id: 9,
      imgSrc: picture9,
    },
    {
      id: 10,
      imgSrc: picture19,
    },
    {
      id: 11,
      imgSrc: picture6,
    },
    {
      id: 12,
      imgSrc: picture11,
    },
    {
      id: 13,
      imgSrc: picture18,
    },
    {
      id: 14,
      imgSrc: picture2,
    },
    {
      id: 15,
      imgSrc: picture4,
    },
    {
      id: 16,
      imgSrc: picture14,
    },
    {
      id: 17,
      imgSrc: picture23,
    },
    {
      id: 18,
      imgSrc: picture5,
    },
  ];

  const getImg = (imgSrc) => {
    console.warn(imgSrc);

    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  return (
    <>
      <section className="">
        {/* onClick Overlay */}
        <div className={model ? 'model open' : 'model'}>
          <img src={tempimgSrc} alt="Something something"></img>
          <AiOutlineCloseCircle
            className="text-color closeIconSvg scale-150"
            src={AiOutlineCloseCircle}
            onClick={() => setModel(false)}
          />
        </div>

        {/* Gallery Image Container */}
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div
                className="gallery-images"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img
                  src={item.imgSrc}
                  alt="MedCare school stuff"
                  style={{ width: '100%' }}
                ></img>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Gallery;
