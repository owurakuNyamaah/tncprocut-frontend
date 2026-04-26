import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import workImage1 from '../assets/images/workImage 1.jpeg';
import workImage2 from '../assets/images/workImage 2.jpeg';
import workImage3 from '../assets/images/workImage 3.jpeg';
import workImage4 from '../assets/images/workImage 4.jpeg';
import workImage5 from '../assets/images/workImage 5.jpeg';
import workImage6 from '../assets/images/workImage 6.jpeg';
import workImage7 from '../assets/images/workImage 7.png';
import workImage8 from '../assets/images/workImage 8.png';
import workImage9 from '../assets/images/workImage 9.png';
import workImage10 from '../assets/images/workImage 10.png';
import workImage11 from '../assets/images/workImage 11.png';
import workImage12 from '../assets/images/workImage 12.jpeg';
import workImage13 from '../assets/images/workImage 13.jpeg';
import workImage14 from '../assets/images/workImage 14.jpg';
import workImage15 from '../assets/images/workImage 15.jpeg';


export default function Portfolio() {
  const images = [
    {
      src: workImage7,
      title: "",
    },
    {
      src: workImage8,
      title: "",
    },
    {
      src: workImage9,
      title: "",
    },
    {
      src: workImage1,
      title: "",
    },
  
    {
      src: workImage2,
      title: "",
    },
    {
      src: workImage10,
      title: "",
    },
    {
      src: workImage4,
      title: "",
    },
    {
      src: workImage5,
      title: "",
    },
    {
      src: workImage6,
      title: "",
    },
    {
      src: workImage3,
      title: "",
    },
    {
      src: workImage11,
      title: "",
    },
    {
      src: workImage12,
      title: "",
    },{
      src: workImage13,
      title: "",
    },{
      src: workImage14,
      title: "",
    },{
      src: workImage15,
      title: "",
    },
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Work
      </h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer group"
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <p className="mt-2 text-sm text-gray-600">
              {img.title}
            </p>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageTitle={images[photoIndex].title}
        />
      )}
    </section>
  );
}