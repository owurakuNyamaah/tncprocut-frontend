import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function Portfolio() {
  const images = [
    {
      src: "/images/work1.jpg",
      title: "3D Acrylic Sign – Accra",
    },
    {
      src: "/images/work2.jpg",
      title: "Shopfront Branding",
    },
    {
      src: "/images/work3.jpg",
      title: "Engraved Plaque",
    },
    {
      src: "/images/work4.jpg",
      title: "CNC Cut Panel",
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